export interface registerusers {
  id_user: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface loginusers {
  id_user: string;
  username_or_email: string;
  password: string;
}