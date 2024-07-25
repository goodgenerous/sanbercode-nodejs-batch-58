import { Request, Response } from "express";
import CategoryModel from "@/models/category.model";
import ProductsModel from "@/models/products.model";
import mongoose from "mongoose";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await CategoryModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create category",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await CategoryModel.find();
      res.status(200).json({
        data: result,
        message: "Success get all category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all category",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({
          data: "null",
          message: "Failed get product",
        });
      }
      const result = await CategoryModel.findById(categoryId).populate(
        "products"
      );
      if (!result) {
        return res.status(404).json({
          data: "null",
          message: "Failed get result",
        });
      }
      res.status(200).json({
        data: result,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },
  async findProductbyCategory(req: Request, res: Response) {
    try {
      const { categoryId, productId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({
          data: null,
          message: "Invalid category ID",
        });
      }

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
          data: null,
          message: "Invalid product ID",
        });
      }

      const category = await CategoryModel.findById(categoryId).populate(
        "products"
      );
      if (!category) {
        return res.status(404).json({
          data: "null",
          message: "Category not found",
        });
      }

      const product = category.products.find(
        (prod: any) => prod._id.toString() === productId
      );

      if (!product) {
        return res.status(404).json({
          data: "null",
          message: "Product not found in this category",
        });
      }

      res.status(200).json({
        data: product,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await CategoryModel.findOneAndUpdate(
        { _id: req.params.categoryId },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update category",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;

      // Validasi ObjectId
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({
          data: null,
          message: "Invalid category ID",
        });
      }

      const category = await CategoryModel.findById(categoryId);

      if (!category) {
        return res.status(404).json({
          data: null,
          message: "Category not found",
        });
      }

      await ProductsModel.updateMany(
        { categoryId: categoryId },
        { $unset: { categoryId: "" } }
      );

      const result = await CategoryModel.findByIdAndDelete(categoryId);
      res.status(200).json({
        data: result,
        message: "Success delete category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete category",
      });
    }
  },
};
