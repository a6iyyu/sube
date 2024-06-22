import { z } from "zod";

export const RegisterSkema = z.object({
    username: z.string().min(6, { message: "Nama pengguna harus memiliki setidaknya 6 karakter!" }),
    email: z.string().email({ message: "Email tidak valid!" }).min(1, { message: "Surel tidak boleh kosong!" }),
    password: z.string().regex(/[A-Z]/, { message: "Kata sandi harus memiliki setidaknya 1 huruf besar!" }).regex(/[0-9]/, { message: "Kata sandi harus memiliki setidaknya 1 angka!" }).min(7, { message: "Kata sandi harus memiliki setidaknya 7 karakter" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Kata sandi tidak cocok!",
    path: ["confirm_password"],
  });

export const LoginSkema = z.object({
  username_or_email: z.string().min(1, { message: "Bagian ini tidak boleh kosong!" }),
  password: z.string().min(1, { message: "Kata sandi tidak boleh kosong!" }),
});