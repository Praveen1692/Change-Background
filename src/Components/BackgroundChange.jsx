import React, { useState } from "react";

function BackgroundChange() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl cursor-pointer">
          <button
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}
          >
            Red
          </button>

          <button
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>

          <button
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setcolor("orange")}
          >
            Orange
          </button>

          <button
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setcolor("black")}
          >
            Black
          </button>

          <button
            className="outline-none px-3 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackgroundChange;
