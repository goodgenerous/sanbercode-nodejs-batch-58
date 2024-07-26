import { Request, Response } from "express";
import ProductsModel from "@/models/products.model";
import CategoriesModel from "@/models/category.model";
import mongoose from "mongoose";

export default {
  async create(req: Request, res: Response) {
    try {
      const { name, description, images, price, qty, category } = req.body;
      const isValidCategory = await CategoriesModel.findById(category);
      if (!isValidCategory) {
        return res.status(400).json({
          data: null,
          message: "Invalid category ID",
        });
      }
      const result = await ProductsModel.create(req.body);
      const savedProduct = await result.save();
      await isValidCategory.save();

      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await ProductsModel.find().populate("category");
      res.status(200).json({
        data: result,
        message: "Success get all products",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all products",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          data: "null",
          message: "Failed get product",
        });
      }
      const result = await ProductsModel.findById(id);
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
  async update(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Validasi ID produk
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          data: null,
          message: "Invalid product ID",
        });
      }

      const product = await ProductsModel.findById(id);
      if (!product) {
        return res.status(404).json({
          data: null,
          message: "Product not found",
        });
      }

      await CategoriesModel.findByIdAndUpdate(
        product.category,
        { $pull: { products: id } },
        { new: true }
      );

      await ProductsModel.findByIdAndDelete(id);
      res.status(200).json({
        data: null,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product",
      });
    }
  },
};
