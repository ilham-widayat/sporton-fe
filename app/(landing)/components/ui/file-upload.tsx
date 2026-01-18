'use client'
import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
    onFileSelect?: (file: File | null ) => void;
}
const FileUpload = ({onFileSelect}: TFileUploadProps) => {
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (selectedFile?: File) => {
        if (!selectedFile) return;
        setFile(selectedFile)
        onFileSelect?.(selectedFile)
    }
    
    const removeFile = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();
        setFile(null)
        onFileSelect?.(null)
    };
    return(
        <div className="bg-primary-light border border-dashed border-primary grid place-items-center py-10"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e)=>{
            e.preventDefault()
            handleFileChange(e.dataTransfer.files?.[0])
        }}
        >
            <input type="file" className="hidden" ref={fileInputRef} accept="image/*"
            onChange={(e) => handleFileChange(e.target.files?.[0])}/>
            {
                !file ? (
                    <>
                        <FiUploadCloud size={24} className="text-primary mb-1"/>
                        <span className="text-xs">Upload Your Payment Receipt here</span>
                    </>
                ):(
                    <>
                        <FiImage size={24} className="text-primary mb-4"/>
                        <span className="text-primary text-sm">{file.name}</span>
                        <span className="text-xs text-gray-500">
                            {(file.size / 1024).toFixed()} KB
                        </span>
                        <button onClick={removeFile} className="bg-primary text-white flex items-center gap-2 mt-4 py-1 px-2 cursor-pointer">
                            <FiTrash2/>
                            Remove
                        </button>
                    </>
                )
            }
        </div>
    )
}
export default FileUpload;