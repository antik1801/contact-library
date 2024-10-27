import express from "express";
import { userRoutes } from "../../modules/users/user.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes
  }
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
