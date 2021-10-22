import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import Images from "../src/components/images";

function App() {
  const [title, setTitle] = useState("Hello REACTTT");
  const [isShowing, setIsShowing] = useState(false);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  //component did mount only
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div>
      <section className="flex justify-center">
        {console.log("re rendered")}
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{title}</div>
            <button
              className="p-10 bg-blue-700 rounded-md text-white my-2"
              onClick={handleClick}
            >
              Toggle Image
            </button>
          </div>
          {isShowing ? <Images /> : null}
        </div>
      </section>
    </div>
  );
}

export default App;
