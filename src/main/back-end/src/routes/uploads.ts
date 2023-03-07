import express from "express";
import multer from "multer";
import { uploadToS3 } from "../utils/upload";

const upload = multer({});

const router = express.Router();

router.post("/", upload.single("file"), async (req, res) => {
	
	const { file } = req;

	const uploadedFile = await uploadToS3(file);

	res.send(uploadedFile);

});

export default router;