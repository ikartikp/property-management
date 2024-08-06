const multer=require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      const fileName = Date.now() + '-' 

      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  exports.module=upload