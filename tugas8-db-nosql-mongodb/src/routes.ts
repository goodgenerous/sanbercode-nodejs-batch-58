import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import productsController from "./controllers/products.controller";
import categoryController from "./controllers/category.controller";

const router = express.Router();

// routes category controller
router.get("/category", categoryController.findAll);
router.post("/category", categoryController.create);
router.get("/category/:categoryId", categoryController.findOne);
router.get(
  "/category/:categoryId/:productId",
  categoryController.findProductbyCategory
);
router.put("/category/:categoryId", categoryController.update);
router.delete("/category/:categoryId", categoryController.delete);

// routes product controller
router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
