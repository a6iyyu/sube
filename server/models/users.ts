import { createClient } from "@supabase/supabase-js";

const SupabaseURL = process.env.SUPABASE_URL || "";
const SupabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";
const SupabaseDB = createClient(SupabaseURL, SupabaseAnonKey);

export interface User {
  id_user: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
}

export const CreateUser = async (user: User) => {
  const { data, error } = await SupabaseDB.from("users").insert([user]);
  if (error) throw error;
  return data;
};

export const FindUserByUsername = async (username: string) => {
  const { data, error } = await SupabaseDB.from("users").select("*").eq("username", username).single();
  if (error) throw error;
  return data;
};