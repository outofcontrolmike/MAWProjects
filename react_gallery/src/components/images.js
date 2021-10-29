import react, { useEffect, useState } from "react";
export default function Images() {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1634549667619-bbbdb4b098a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ]);

  const [newImageUrl, setNewImageUrl] = useState("");

  function handleAdd() {
    if (newImageUrl != "") {
      setImages([newImageUrl, ...images]);
      setNewImageUrl("");
    }
  }

  function handleChange(e) {
    setNewImageUrl(e.target.value);
  }
  function handleRemove(index) {
    setImages(images.filter((image, i) => (i) => i != index));
  }

  function ShowImage() {
    {
      return images.map((image, index) => {
        return (
          <div key={index}>
            <img
              src={image}
              className="my-4 mx-2"
              style={{ height: "200px" }}
              onClick={() => handleRemove(index)}
            />
          </div>
        );
      });
    }
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>

      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            className="p-2 border border-gray-800 rounded shadow w-full"
            onChange={handleChange}
            type="text"
            value={newImageUrl}
          ></input>
        </div>
        <button
          className={`p-2 text-white 
        ${newImageUrl != "" ? "bg-green-600" : "bg-green-300"}`}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </section>
  );
}
