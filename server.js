const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
require('dotenv').config();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
});

app.post('/api/file/analyse', upload.single('file'), (req, res) => {
   res.json({
     name: req.file.originalname,
     type: req.file.mimetype,
     size: req.file.size
   });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
   console.log("The app is listening on port " + port);
});