import React, { useEffect, useState } from 'react';

function ContactPage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('imageFile');
    if (data) {
      setImage(data);
    }
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      console.log("Image preview:", imageData);
      setImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (image) {
      localStorage.setItem('imageFile', image);
      alert('Image uploaded and saved!');
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Page</h2>

      <div className="w-1/3 h-52 border mx-auto my-10 shadow-md flex justify-center items-center bg-gray-100">
        {image ? (
          <img src={image} alt="Uploaded preview" className="max-h-48 max-w-full" />
        ) : (
          <span className="text-gray-400">No image uploaded yet</span>
        )}
      </div>

      <div className="border shadow-md text-center p-4 w-1/3 mx-auto bg-white">
        <form onSubmit={handleUpload}>
          <input
            onChange={handleChange}
            type="file"
            accept="image/*"
            className="mb-4"
          />
          <br />
          <button
            type="submit"
            className="border px-4 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
