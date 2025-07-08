import { Request } from "express";

declare module "express" {
  interface Request {
    _id?: string;
  }
}
