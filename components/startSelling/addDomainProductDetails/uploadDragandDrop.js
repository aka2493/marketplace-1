import { useState } from "react";
import { useDropzone } from "react-dropzone";
//import { UploadIcon } from "@heroicons/react/solid";
import { Image } from "@nextui-org/react";

const DragAndDropUpload = ({ onFileSelect, label }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState("");

  const onDrop = (acceptedFiles) => {
    // This will trigger when a file is dropped or selected
    const updatedFiles = [...files, ...acceptedFiles];
    setFiles(updatedFiles);
    const updatedFileNames = [...fileNames, ...acceptedFiles.map(file => file.name)];
    setFileNames(updatedFileNames);
    onFileSelect(updatedFiles);
  };


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
     multiple: true
  });

  return (
   
    <div className="border border-gray rounded-md px-3 py-4 flex flex-col justify-center items-center space-y-2">
      <div {...getRootProps()} className={`flex flex-col justify-center items-center p-5 ${isDragging ? "bg-white-50" : ""}`}>
        <input {...getInputProps()} />
        <Image src="/img/startselling/upload.svg" width={100} height={80} alt="Upload Image" />
        <h6 className="text-16 fw-400 mt-2 text-center cursor-pointer">Drag and Drop the Files here</h6>
        {isDragActive && fileNames.length>0 && <p className="text-gray-600 mt-1 cursor-pointer">{fileNames.join(', ')}</p>}
        <h6 className="text-16 fw-400 mt-2 text-center">or</h6>

        {!label ? (
          <p className="text-center text-gray-500 mt-2">click to select a file</p>
        ) : (
          <div className="d-flex fw-500 text-center mx-auto  align-items-center justify-content-center align-center mt-2 border border-gray px-6 w-1/4 py-2 cursor-pointer text-pink font-semibold mt-2">{label}</div>
        )}
        {!isDragActive && fileNames.length >0 && <p className="text-gray-600 mt-1 text-center cursor-pointer">{fileNames.join(', ')}</p>}
      </div>
    </div>
  
  );
};

export default DragAndDropUpload;
