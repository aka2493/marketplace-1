import Image from "next/image";
import React, { useState } from "react";

const ThumbnailUploader = () => {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (!file) {
      setError("Please select an image.");
      setSuccess(false);
      return;
    }

    if (file.size > 80 * 80) {
      setError("Image must be smaller than 80px wide and 80px tall.");
      setSuccess(false);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      setSuccess(false);
      return;
    }

    reader.onload = () => {
      setImage(reader.result);
      setSuccess(true);
      setError("");
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="row y-gap-30 items-center">
      <div className="col-auto">
        {image ? (
          <div className="d-flex ratio ratio-1:1 w-200">
            <Image
              width={80}
              height={80}
              src={image}
              alt="avatar"
              className="img-ratio rounded-4"
            />
            
          </div>
        ) : (
          <div className="d-flex ratio ratio-1:1 w-200">
            <Image
              width={80}
              height={80}
              src="/img/startselling/thumbnail.png"
              alt="image"
              className="img-ratio rounded-4"
            />
           
          </div>
        )}
      </div>

      <div className="col-auto">
        <h4 className="text-16 fw-500">Upload</h4>
        <div className="text-14 mt-5">
          PNG or JPG no bigger than 80px wide and tall.
        </div>
        <div className="d-inline-block mt-15">
          <label
            htmlFor="avatar-upload"
            role="button"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            <i className="icon-upload-file text-20 mr-10" />
            Browse
          </label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        {error && !success && <div className="text-red-1 mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default ThumbnailUploader;
