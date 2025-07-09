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
  _id: string;
  username: string;
  password: string;
  phone: string;
  address: string;
  status: string;
  role: "admin" | "user";
  points: number;
}
