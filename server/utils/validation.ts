import { z } from "zod";

export const RegisterValidation = z.object({
    username: z.string().trim().min(6).max(25).regex(/[a-zA-Z0-9_]+$/).min(1),
    email: z.string().trim().email().min(1).regex(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g),
    password: z.string().regex(/[A-Z]/).regex(/[0-9]/).min(7).min(1),
    confirm_password: z.string().trim(),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Kata sandi tidak cocok!",
    path: ["confirm_password"],
  });

export const LoginValidation = z.object({
  username_or_email: z.string().trim().min(1),
  password: z.string().trim().min(1),
});

export const FeedbackValidation = z.object({
  email: z.string().trim().email().min(1).regex(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g),
  subject: z.string().trim().min(1).max(100).regex(/(?:[a-zA-Z0-9!%&+/=-`"])/g),
  description: z.string().trim().min(1).max(3000),
});

export const ForgotPasswordValidation = z.object({
  username_or_email: z.string().trim().min(1),
});

export const ResetPasswordValidation = z.object({
  password: z.string().trim().regex(/[A-Z]/).regex(/[0-9]/).min(7).min(1),
  confirm_password: z.string().trim(),
}).refine(data => data.password === data.confirm_password, {
  message: "Kata sandi tidak cocok!",
  path: ["confirm_password"],
});