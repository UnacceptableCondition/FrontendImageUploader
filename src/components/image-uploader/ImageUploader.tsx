import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ImageUploader.css";

const ImageUploader = () => {
  const { t } = useTranslation("common");

  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div
      className="image-uploader"
      onDrop={(event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
          Array.from(droppedFiles).forEach((file) => {
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const url = [event?.target?.result];
                if (typeof url === "string") {
                  setFiles((prev) => [...prev, ...url]);
                }
              };
              reader.readAsDataURL(file);
            }
          });
        }
        debugger;
      }}
      onDragOver={(event) => event.preventDefault()}
    >
      {t("app.image-uploader.upload-image")}

      {files.map((file) => {
        return <img src={file} alt="uploaded file"></img>;
      })}
    </div>
  );
};

export { ImageUploader };
