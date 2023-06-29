import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const puppies = [
    { name: "Sir Waggington" },
    { name: "Fiona Penny Pickles" },
    { name: "Professor Wagglesworth" },
    { name: "Sergeant Barkowitz" },
    { name: "Captain Sniffer" },
    { name: "Miss Furbulous" },
    { name: "Alfred von Wigglebottom" },
  ];

  console.log(puppies);

  return (
    <>
      <div>
        <h1>"Puppy List"</h1>
        {puppies.map((puppy) => {
          <p>{puppy.name}</p>;
        })}

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
