import {useState, useRef } from 'react';
import './App.css'

const ROW_HEIGHT = "30px";
const VISIBLE_ROWS = 10;

function App() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({name: "Swiggy", value: i})
  }

  const containerRef = useRef(null);
  const [startIndex, setStartIndex ] = useState(0)
  const totalHeight = array.length * ROW_HEIGHT



 const visibleData = array.slice(startIndex, startIndex + VISIBLE_ROWS);
  return (
    <>
      <h1>React Virtualization</h1>
      <table style={{ height: totalHeight }}>
        <thead>
          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Value</strong></td>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item) => 
            <tr>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
