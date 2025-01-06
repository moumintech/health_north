import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: any; // Remplacez `any` par le type réel de `user`, par exemple `{ id: string; name: string; }`
    }
  }
}
