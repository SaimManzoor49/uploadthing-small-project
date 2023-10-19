'use client'

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter } from "../api/uploadthing/core";
import '@uploadthing/react/styles.css';
import {useState} from 'react'
import Link from 'next/link' 


export default function UploadDnd() {
const [images,setImages] = useState<{fileUrl:string,fileKey:string}[]>([])
const title = images.length?(
<>
<p>Upload Completed</p>
<p className="mt-2">{images.length} Files</p>

</>
):null;

const imgList = (
    <>
    {title}
    <ul>
        {images.map((img)=>{
            return <li key={img.fileKey} className="mt-2">
                <Link href={img.fileUrl} target="_blank">{img.fileUrl}</Link>
                 </li>
        })}
    </ul>
    </>
)

    return (
        <div className=" justify-center mt-5 ">
            <UploadDropzone<OurFileRouter>
                
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    if(res){
                        setImages(res)
                        const json = JSON.stringify(res)
                        console.log("Files: ", json);

                    // alert("Upload Completed");
                    }
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
                onUploadBegin={(name) => {
                    // Do something once upload begins
                    console.log("Uploading: ", name);
                }}
            />
            {imgList}
        </div>)
};