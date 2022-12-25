import './App.css';
import { React, useState } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

function App() {
  const [userInput, setUserInput] = useState("");
  const [shortUrlLink, setShortUrlLink] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        "https://localhost:3333/api/short/${userInput}"
      )
      setShortUrlLink();
    } catch (err) {
      console.log(err);
    };
  };
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-medium text-blue-500 mb-4">
          <span className=" text-yellow-400">URL Shortener</span>
        </h1>
        <div>
          <input
            className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
            type="text"
            placeholder="Make a ShortURL"
          />
          <button className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md">
            Make ShortURL!
          </button>
          <div className="mt-5">
            <CopyToClipboard text={shortUrlLink}>
              <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
                Copy
              </button>
            </CopyToClipboard>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;