import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

// Mengatur RESTful API agar pengguna bisa masuk ke situs web
// menggunakan Google.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "http://localhost:2001/auth/google/callback",
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails?.[0].value;
      if (!email) return done(null, false, { message: "Tidak ada surel yang terasosiasi di akun ini!" });

      let user = await Prisma.users.findUnique({ where: { email } });
      if (!user) user = await Prisma.users.create({
        data: {
          username: profile.displayName,
          email,
          password: "",
          created_at: new Date(),
        },
      });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id_user);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await Prisma.users.findUnique({ where: { id_user: id } });
    done(null, user);
  } catch (error) {
    done(error);
  }
});