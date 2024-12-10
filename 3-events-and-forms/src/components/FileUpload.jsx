import { useState } from "react";

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <input type="file" onChange={handleChange} /><br/>
            <img width={400} src={file} />
        </>
    );
}

export default FileUpload;