export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  confirmpassword: string;
}
export interface User {
  id: string;
  username: string;
  password: string;
  role: "admin" | "user";
}
