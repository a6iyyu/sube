export interface Users {
  username?: string;
  email?: string;
  username_or_email?: string;
  password?: string;
  confirm_password?: string;
  dashboard?: Dashboard;
}

interface Dashboard {
  profile_picture?: string;
  username?: string;
  bio?: string;
  nationality?: string;
}