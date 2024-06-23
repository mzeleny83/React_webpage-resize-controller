import { useState, useEffect } from "react";

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const sizeControler = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeControler);

    return () => {
      console.log("Já jsem cleanUp funkce");
      window.removeEventListener("resize", sizeControler);
    };
  });

  return (
    <div>
      <h1>Šířka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};

export default App;
