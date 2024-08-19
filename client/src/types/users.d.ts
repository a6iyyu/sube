export interface Users {
  id_user?: string;
  username?: string;
  email?: string;
  username_or_email?: string;
  password?: string;
  confirm_password?: string;
  created_at?: string;
  dashboard?: Dashboard;
}

interface Dashboard {
  profile_picture?: string;
  username?: string;
  bio?: string;
  nationality?: string;
  updated_at?: Date;
}