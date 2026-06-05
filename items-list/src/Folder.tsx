import { useState } from 'react';

export default function Folder({ explorer }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <h3>Folder Structure/ Nested Accordion/ Nested Comments</h3>
      <div onClick={() => setExpanded(!expanded)}>{explorer.name}</div>
      <div>
        {explorer.items.map((item: { name: string }) => (
          <li>{item.name}</li>
        ))}
      </div>
    </>
  );
}
