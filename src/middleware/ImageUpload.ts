import multer from "multer";
import fs from 'fs';
import path from "path";

class ImageUpload {
    private storage() {
        return multer.diskStorage({
            destination: (req, file, cb) => {
                // create a folder called tem_uploads
                const dir = "./tem_uploads";
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
        
                cb(null, "./tem_uploads/");
            },
            filename: (req, file, cb) => {
                cb(
                    null,
                    `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
                );
            },
        });
    }

    public uploadToLocal() {
        return multer({
           storage: this.storage(),
            limits: { fileSize: 1000000 }, // 1MB
            fileFilter: (req, file, cb) => {
                const filetypes = /csv/;
                const extname = filetypes.test(
                    path.extname(file.originalname).toLowerCase()
                );
                const mimetype = filetypes.test(file.mimetype);
        
                if (mimetype && extname) {
                    return cb(null, true);
                } else {
                    cb(new Error('Error: CSV Only!'));
                }
            },
        });
    }
}

export default new ImageUpload().uploadToLocal();