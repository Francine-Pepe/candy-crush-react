import { useState, useEffect } from "react";

const width = 8; //board width
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArragement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArragement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArragement);
  };

  useEffect(() => {
    createBoard()
  }, []); //useEffect is used, so the function is called just one time

  console.log(currentColorArrangement);

  return (
    <>
      <div className="app">
        <div className="game">
          {currentColorArrangement.map((candyColor, index) => (
            <img key={index}
            style={{backgroundColor: candyColor}}
            alt={candyColor}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default App;
