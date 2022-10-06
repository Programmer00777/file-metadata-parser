![readme-file-metadata-parser](https://user-images.githubusercontent.com/55809302/194280143-bd033463-d6af-4ed9-9dc2-93abf21feb27.png)

A File Metadata Parser helps to fetch the data about uploading files.

Data you can receive:
- **Uploader name:** The name of the person that uploads a file.
- **Field name:** The name of the field from which the file was uploaded.
- **Filename:** The name of the file itself.
- **Type:** The type of the file.
- **Size:** The size of the file.
- **Encoding:** The type of the file encoding.

Structure of a *JSON* object returned from the service:
```
{
  uploaderName: "uploader-name",
  fieldName: "field-name",
  fileName: "file-name",
  type: "type",
  size: "size",
  encoding: "encoding"
}
```

## Endpoints
Basically, the app is running on port 3000 (if you don't specify another).
- **GET /** Home page
- **POST /api/file/analyse** endpoint attached to the HTML form to upload a file

## Libraries used in the service
- ***express*** lightweight framework for Node.
- ***multer*** node.js middleware for handling *multipart/form-data*. Primarily used to upload files.
- ***dotenv*** loads environment variables from .env file

## Usage
1. Clone the repository with ```git clone https://github.com/Programmer00777/file-metadata-parser.git``` into your working directory.
2. Launch the app with ```node server.js```
3. Go to ```http://localhost:3000/```
You should see the next HTML page:
<img width="1439" alt="Screen Shot 2022-10-06 at 12 25 46 PM" src="https://user-images.githubusercontent.com/55809302/194277338-59ea5634-7038-417d-aeeb-1a00942d6f28.png">
4. Click on "Choose File" and find a file you want to upload.
5. Also, you can enter your uploader name.
<img width="1440" alt="Screen Shot 2022-10-06 at 12 28 10 PM" src="https://user-images.githubusercontent.com/55809302/194277870-15e49d1c-0eaa-4a6e-a3fe-1921afbf40fd.png">
6. Click the "Upload" button.
You will receive a response in the JSON format:
<img width="1440" alt="Screen Shot 2022-10-06 at 12 29 24 PM" src="https://user-images.githubusercontent.com/55809302/194278376-3b7664df-9d72-4717-9018-0313cb922059.png">

That's pretty mich it!

## Licence
MIT
