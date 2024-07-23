import express from "express";
import cloudinary, { handleUpload } from "../utils/cloudinary";
import { single, multiple } from "../middlewares/upload.middleware";
import multer from "multer";

const router = express.Router();

router.post("/single", single, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const result = await handleUpload(req.file.buffer);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/multiple", multiple, async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).send("No files uploaded.");
    }
    const uploadFiles = req.files.map((file) => handleUpload(file.buffer));
    const results = await Promise.all(uploadFiles);
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
