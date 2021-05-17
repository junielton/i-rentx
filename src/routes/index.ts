import {Router} from "express";

const router = Router();

import {categoriesRoutes} from "./categories.routes";
import {specificationRoutes} from "./Specifications.routes";

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export {router};
