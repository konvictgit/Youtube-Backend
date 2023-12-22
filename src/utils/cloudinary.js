import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { url } from "inspector";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }
       const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file uploded successfully
        console.log("file uploded successfully on cloudinary",response.url);
        return response;
    } catch (error) {

        fs.unlinkSync(localFilePath)// remove the locally saved temp file as the upload got failed
        return null;
        
    }
}

export{uploadOnCloudinary}



