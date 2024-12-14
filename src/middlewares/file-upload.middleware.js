import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // console.log(file.originalname);
      cb(null,new Date().toISOString().split(':').join('-')+file.originalname)
    }
    
  })
  
  const upload = multer({ storage: storage })
  export default upload