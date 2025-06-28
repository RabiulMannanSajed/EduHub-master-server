import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";
import { AuthRouter } from "../modules/auth/auth.router.js";
import { SellRouter } from "../modules/sell/sell.route.js";
import { CourseRouter } from "../modules/course/course.route.js";
import { FreelancerRoutes } from "../modules/freelancing/freelancing.route.js";
import { MessageRouter } from "../modules/message/message.route.js";

const router = Router();

const moduleRouters = [
  {
    path: "/users",
    route: UserRoutes,
  },

  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/sell",
    route: SellRouter,
  },

  {
    path: "/courses",
    route: CourseRouter,
  },

  {
    path: "/freelancer",
    route: FreelancerRoutes,
  },

  {
    path: "/messages",
    route: MessageRouter,
  },
];
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
