export interface Users {
  id_user: string;
  username: string;
  email: string;
  username_or_email?: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  dashboard: Dashboard;
}

interface Dashboard {
  id_user: string;
  profile_picture: string;
  username: string;
  bio: string;
  nationality: string;
  created_at: Date;
  updated_at: Date;
}