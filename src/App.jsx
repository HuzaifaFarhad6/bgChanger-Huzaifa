import { useState } from "react";

function App() {
  const [color, setColor] = useState("aqua");

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {/* Use a responsive grid layout */}
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row fixed sm:static center">
          <button
            onClick={() => setColor("red")}
            className={`bg-red-500 text-white py-2 px-4 rounded-md hover:bg-gray-100 hover:text-black ${
              color == "red" ? "border-4 border-black" : ""
            }`}
          >
            RED
          </button>
          <button
            onClick={() => setColor("blue")}
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "blue" ? "border-4 border-black" : ""
            }`}
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("green")}
            className={`bg-green-500 text-white py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "green" ? "border-4 border-black" : ""
            }`}
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("white")}
            className={`bg-white text-black py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "white" ? "border-4 border-black" : ""
            }`}
          >
            WHITE
          </button>
          <button
            onClick={() => setColor("purple")}
            className={`bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "purple" ? "border-4 border-black" : ""
            }`}
          >
            PURPLE
          </button>
          <button
            onClick={() => setColor("black")}
            className={`bg-black text-white py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "black" ? "border-4 border-white" : ""
            }`}
          >
            BLACK
          </button>
          <button
            onClick={() => setColor("orange")}
            className={`bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "orange" ? "border-4 border-black" : ""
            }`}
          >
            ORANGE
          </button>
          <button
            onClick={() => setColor("aqua")}
            className={`bg-aqua text-black py-2 px-4 rounded-md hover:bg-gray-100  hover:text-black ${
              color == "aqua" ? "border-4 border-black" : ""
            }`}
          >
            Aqua
          </button>
        </div>
      </div>
    </>
  );
}

export default App;


