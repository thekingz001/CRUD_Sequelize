const {
	item,
	brand,
	Sequelize
} = require("./../models");

const Op = Sequelize.Op;

let self = {};

self.upload = async (req,res) => {
	try{
        let sampleFile;
        let uploadPath;
      
        if (!req.body.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
      
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.body.files.sampleFile;
        uploadPath = __dirname + '/public/image' + sampleFile.name;
      
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(uploadPath, function(err) {
          if (err)
            return res.status(500).send(err);
      
          res.send('File uploaded!');
        });

	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.get = async (req,res) => {
	try{

        return res.json({
			status:"aaaaaaaaaaa"
		})

	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

module.exports = self;