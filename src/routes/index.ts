import {Router} from "express";

const router = Router();

import {categoriesRoutes} from "./categories.routes";
import {specificationRoutes} from "./specifications.routes";
import {usersRouters} from "./users.routes";

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRouters);

export {router};
