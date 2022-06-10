// const multer = require("multer");
// const path = require("path");
// const shortid = require('shortid');

// //Multer configurations || product image uploding
// module.exports = multer({
//     storage: multer.diskStorage({
//         destination: 'uploads',
//         filename: (req, file, cb) => {
//             cb(null, file.originalname);
//         },
//     }),
//     fileFilter: (req, file, cb) => {
//         let ext = path.extname(file.originalname);
//         if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//             cb(new Error("File type is not supported"), false);
//             return;
//         }
//         cb(null, true);
//     },
//     filename: function (req, file, cb) {
//         cb(null, shortid.generate() + '-' + file.originalname)
//     }
// });

// // module.exports = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, path.join(path.dirname(__dirname), 'uploads'))
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, shortid.generate() + '-' + file.originalname)
// //     }
// // })
// // const upload = multer({ storage });