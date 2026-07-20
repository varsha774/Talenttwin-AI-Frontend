import { useState } from "react";
import axios from "axios";

export default function ResumeUpload(){

const [file,setFile] = useState(null);
const [message,setMessage] = useState("");

const handleUpload = async()=>{

if(!file){
setMessage("Please select a PDF file");
return;
}

const formData = new FormData();
formData.append("resume",file);


try{

const response = await axios.post(
"http://localhost:5000/api/resume/upload",
formData,
{
headers:{
"Content-Type":"multipart/form-data"
}
}
);


console.log(response.data);

setMessage("Resume uploaded successfully ✅");


}
catch(error){

console.log(error);
setMessage("Upload failed ❌");

}

}


return(

<div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">


<h1 className="text-4xl font-bold mb-6">
Upload Resume
</h1>


<input
type="file"
accept=".pdf"
onChange={(e)=>setFile(e.target.files[0])}
className="bg-white text-black p-3 rounded"
/>


<button

onClick={handleUpload}

className="mt-5 bg-blue-500 px-6 py-3 rounded"

>
Upload File
</button>


<p className="mt-5">
{message}
</p>


</div>

)

}