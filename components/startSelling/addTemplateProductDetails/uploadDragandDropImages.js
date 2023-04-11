import {useState,useCallback,useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

const  UploadDragandDropImages = () =>{

const [fileNames, setFileNames] = useState([]);
const [filesPerColumn, setFilesPerColumn] = useState(5);

useEffect(() => {
  if (fileNames.length > 15) {
    setFilesPerColumn(3);
  }
}, [fileNames]);

  const FILETYPE_FORMATS = ["image/jpeg",
  "image/png",
  "image/gif",];

  const onDrop = useCallback((acceptedFiles) => {
      // Store the filenames of the uploaded files
      const allowedFiles = acceptedFiles.filter((file) => FILETYPE_FORMATS.includes(file.type));

  // Store the filenames of the uploaded PDF files
  const newFileNames = allowedFiles.map((file) => file.name);
      setFileNames([...fileNames, ...newFileNames]);
    }, [fileNames]);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: FILETYPE_FORMATS.join(), });
    
    const removeFile = (fileName) => {
        setFileNames(fileNames.filter((name) => name !== fileName));
    }
    return (
      <>
    <div className="col-md-12 d-flex">
              <div {...getRootProps()} className="col-md-8 border  cursor-pointer text-center py-40 px-30">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <h6 className="text-15 mt-20 fw-normal">Drop the files here ...</h6>
                ) : (
                    <div>
                   
                    <Image
                    
                  width={60}
                  height={60}
                  src="/img/startselling/screenshotupload.png"
                  alt="image"
                  
                />
                    <h6 className="text-15 mt-20 fw-normal">
                    Drag and Drop Screenshots here or <Link href="" className="text-blue-1 fw-500">Browse</Link> your files
                  </h6>
                  </div>
                )}
              </div>
              <div className="col-md-6  ml-md-4 py-30 px-40">
                <h6 className="text-15 fw-600 mb-10">Uploaded files:</h6>
                {fileNames.length > 0 ? (
                  <div className="d-flex flex-wrap">
                  {Array.from({ length: Math.ceil(fileNames.length / filesPerColumn) }).map((_, columnIndex) => (
                    <ul key={columnIndex} className="mr-5">
                      {fileNames.slice(columnIndex * filesPerColumn, (columnIndex + 1) * filesPerColumn).map((fileName, index) => (
                        <li key={index} className="d-flex align-items-center">
                          <span>{fileName}</span>
                          
                          <Image
                          onClick={() => removeFile(fileName)} src="/img/startselling/close.png"
                          width={20}
                          height={20}
                          className="ml-2 cursor-pointer"
                          alt="image"
                          
                        />
                          </li>
                      ))}
                    </ul>
                  ))}
                </div>
                ) : (
                  <p>No files uploaded yet.</p>
                )}
              </div>
            </div>   
            </>
 ) };

 export default UploadDragandDropImages;