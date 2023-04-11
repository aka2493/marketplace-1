import {useState,useCallback,useEffect} from 'react';
import Link from "next/link";
import { useDropzone } from "react-dropzone";

const  UploadDragandDrop = () =>{

const [fileNames, setFileNames] = useState([]);
const [filesPerColumn, setFilesPerColumn] = useState(5);

useEffect(() => {
  if (fileNames.length > 15) {
    setFilesPerColumn(3);
  }
}, [fileNames]);

  const FILETYPE_FORMATS = ["application/x-zip-compressed", "application/zip", "application/gzip", "application/epub+zip", "application/vnd.rar", "application/x-7z-compressed", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/pdf"];
  

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
                    <img src="/img/startselling/upload1.png" width="60px" height="60px"/>
                  <h6 className="text-15 mt-20 fw-normal">
                    Drag and drop Files here or <Link href="" className="text-blue-1 fw-500">Browse</Link> your files
                  </h6>
                  </div>
                )}
              </div>
              <div className="col-md-6  ml-md-4 py-20 px-40">
                <h6 className="text-15 fw-600 mb-10">Uploaded files:</h6>
                {fileNames.length > 0 ? (
                  <ul >
                    {fileNames.map((fileName, index) => (
                      <li  key={index}>{fileName}
                      <img onClick={()=>removeFile(fileName)} src="/img/startselling/close.png" width={20} height={20}/>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No files uploaded yet.</p>
                )}
              </div>
            </div>

            </>
 ) };

 export default UploadDragandDrop;