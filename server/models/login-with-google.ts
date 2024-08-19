import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";
import { Users } from "../types/users";

const router = Router();
const Prisma = new PrismaClient();

// Mengatur RESTful API agar pengguna bisa masuk ke situs web
// menggunakan Google.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    callbackURL: "https://sube-server.vercel.app/auth/google/callback",
  }, async (_accessToken, _refreshToken, profile: Profile, done) => {
    try {
      const email = profile.emails?.[0].value;
      if (!email) return done(null, false, { message: "Tidak ada surel yang terasosiasi di akun ini!" });

      let user = await Prisma.users.findUnique({ where: { email } });
      if (!user) user = await Prisma.users.create({
        data: {
          id_user: uuidv4(),
          username: profile.displayName.toLowerCase().replace(/ /g, ""),
          email,
          password: "",
          created_at: new Date(),
        },
      });
      
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  })
);

passport.serializeUser((user: any, done) => done(null, user.id_user));

passport.deserializeUser(async (id_user: string, done) => {
  try {
    const user = await Prisma.users.findUnique({ where: { id_user: id_user } });
    done(null, user);
  } catch (e) {
    done(e);
  }
});

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "https://sukabelajar.vercel.app/masuk" }),
  (request: Request, response: Response) => {
    const { id_user }: Users = request.body;
    const User = request.user as any;
    const Token = jwt.sign({ id_user: User.id_user }, process.env.JWT_SECRET! || "", { expiresIn: "4h" });
    response.cookie(id_user || "id_user", Token, { httpOnly: true, secure: process.env.NODE_ENV === "production" || true, sameSite: "lax", maxAge: 4 * 60 * 60 * 1000 });
    response.redirect("https://sukabelajar.vercel.app/dashboard");
  }
);

export default router;