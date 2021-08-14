import {Router} from "express";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

import {categoriesRoutes} from "./categories.routes";
import {specificationRoutes} from "./specifications.routes";
import {usersRouters} from "./users.routes";

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRouters);
router.use(authenticateRoutes);

export {router};
