import { useState, useRef } from "react";
import "./App.css";

const ROW_HEIGHT = 30; // each row’s height in px
const VISIBLE_ROWS = 10;

function App() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({ name: "Swiggy", value: i });
  }

  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const totalHeight = array.length * ROW_HEIGHT;

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const newStartIndex = Math.floor(scrollTop / ROW_HEIGHT);
    setStartIndex(newStartIndex);
  };

  const visibleData = array.slice(startIndex, startIndex + VISIBLE_ROWS);

  return (
    <div
      className="App"
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        overflowY: "auto",
        height: VISIBLE_ROWS * ROW_HEIGHT,
        position: "relative",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <table style={{ position: "absolute", top: startIndex * ROW_HEIGHT }}>
          <thead>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                <strong>Value</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((item, index) => (
              <tr key={startIndex + index} style={{ height: ROW_HEIGHT }}>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
