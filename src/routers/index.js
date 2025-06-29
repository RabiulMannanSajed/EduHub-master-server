import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";
import { AuthRouter } from "../modules/auth/auth.router.js";
import { SellRouter } from "../modules/sell/sell.route.js";
import { CourseRouter } from "../modules/course/course.route.js";
import { FreelancerRoutes } from "../modules/freelancing/freelancing.route.js";
import { MessageRouter } from "../modules/message/message.route.js";
import { BlogRouter } from "../modules/blog/blog.route.js";
import { JObRouter } from "../modules/job/job.route.js";
import { JObApplicationRouter } from "../modules/JobApply/JobApply.route.js";
import { LikeRouter } from "../modules/like/like.route.js";
import { CommentRouter } from "../modules/comment/comment.route.js";

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

  {
    path: "/posts",
    route: BlogRouter,
  },
  {
    path: "/jobs",
    route: JObRouter,
  },
  {
    path: "/applications",
    route: JObApplicationRouter,
  },
  {
    path: "/likes",
    route: LikeRouter,
  },

  {
    path: "/comments",
    route: CommentRouter,
  },
];
moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
