import { useState } from 'react';

export default function Folder({ explorer }) {
  const [expanded, setExpanded] = useState(false);

  if (explorer.isFolder === true) {
    return (
      <>
        <div onClick={() => setExpanded(!expanded)}>{expanded.name ? '📁' : '📂'}{explorer.name}</div>
        <div style={{ paddingLeft: '25px' }}>
          {explorer.items.map((item: { id: string; name: string }) => (
            <Folder key={item.id} explorer={item} />
          ))}
        </div>
      </>
    );
  } else {
    return <div>📄{explorer.name}</div>;
  }
}
