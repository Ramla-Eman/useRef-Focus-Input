import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="min-h-screen xl:w-[30%] w-[98%] mx-auto flex flex-col items-center justify-center space-y-6">
        <h1 className="sm:text-5xl text-4xl font-bold">Focus Input Field</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className=" flex flex-col items-center justify-center">
          <p className="sm:text-2xl font-semibold">
            Click on button to focus on input field
          </p>
          <button
            onClick={handleFocus}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Focus the Input
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
