import express from "express";
import { success } from "../constants/success";
import { responseBuilder } from "../helpers/responseBuilder";

const router = express.Router();

// GET /api/
router.get("/", (req, res) =>  { 

	return responseBuilder(res, "success", success.apiHealthGotSuccessfully, {            
		name: process.env.APP_NAME,
		host: process.env.APP_HOST,
		port: process.env.APP_PORT,
		version: process.env.APP_VERSION,
		environment: process.env.APP_ENVIRONMENT
	});

});	

export default router;