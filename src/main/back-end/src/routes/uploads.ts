import express from "express";
import multer from "multer";
import { success } from "../constants/success";
import { responseBuilder } from "../helpers/responseBuilder";
import { uploadToS3 } from "../utils/upload";

const upload = multer({});

const router = express.Router();

router.post("/", upload.single("file"), async (req, res) => {
	
	const { file } = req;

	const uploadedFile = await uploadToS3(file);

	return responseBuilder(res, "success", success.fileUploadedSuccessfully, uploadedFile);


});

export default router;