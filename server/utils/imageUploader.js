const cloudinary = require('cloudinary').v2

/*
@desc Upload Image to Cloudinary
@body file: File
@body folder: String
@body height: Number
@body quality: Number
@returns Cloudinary Response
*/

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    const options = { folder };
    if (height) {
        options.height = height;
    }
    if (quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}