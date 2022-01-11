import React, { createRef, useState } from "react";

export default function FileSend() {
  const imageRef = createRef(null);
  const [files, setFiles] = useState(null);
  return (
    <div>
      <input
        onChange={(e) => setFiles(e.target.files)}
        type={"file"}
        multiple
        accept='image/*'
      />
      <button onClick={() => console.log(files)}>click</button>
    </div>
  );
}
