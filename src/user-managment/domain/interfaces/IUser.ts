export interface IUser {
  name: string | null;
  role: role;
  email: string;
}

export type role = "USER" | "ADMIN";
