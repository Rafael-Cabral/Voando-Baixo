import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import {config} from "dotenv";
import { v4 as uuidv4 } from "uuid";
config();

export const uploadToS3 = async (aFile : Express.Multer.File) => {

	const { originalname, buffer } = aFile;

	const s3 = new S3Client({
		region: process.env.AWS_REGION,
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
		}
	});

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${uuidv4()}-${originalname}`,
		Body: buffer
	};

	const command = new PutObjectCommand(params);

	await s3.send(command);

	return {
		objectKey: params.Key,
		uri: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`
	};

};