const fileUpload = require('express-fileupload');

module.exports = function(express) {
	const route = express.Router();

	route.get("/",(req,res) => {
		return res.render("index");
	});
	route.get("/brand",(req,res) => {
		return res.render("brand");
	});
	route.get("/item",(req,res) => {
		return res.render("item");
	});
	route.get("/upload",(req,res) => {
		return res.render("brand");
	});
	route.post("/upload",(req,res) => {
		
		let sampleFile;
        let uploadPath;

		
      
        if (!req.body.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
      
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.body.files.sampleFile;
        uploadPath = __dirname + './public/image' + sampleFile.name;
      
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(uploadPath, function(err) {
          if (err)
            return res.status(500).send(err);
      
          res.send('File uploaded!');
        });

	});
	
	return route;
};