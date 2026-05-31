import { useMemo, useState } from 'react';

export default function Search() {
  const [list, setList] = useState(['apple', 'kiwi', 'orange']);
  const [searchText, setSearchText] = useState('');

  const filteredItems = useMemo(() => {
    return list.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
  }, [list, searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search item..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
