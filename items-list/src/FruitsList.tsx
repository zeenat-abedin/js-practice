//same functionality as ItemsList code

import { useMemo, useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'banana' },
  { id: 3, name: 'mango' },
  { id: 4, name: 'orange' },
  { id: 5, name: 'kiwi' },
  { id: 6, name: 'pineapple' },
  { id: 7, name: 'avocado' },
];

export default function FruitsList() {
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const handleSelected = (id: number) => {
    const alreadySelected = selectedItems.includes(id);
    if (alreadySelected) {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
      return;
    }
    setSelectedItems((prev) => [...prev, id]);
  };

  return (
    <>
      <h3>Fruits List</h3>
      <input
        type="text"
        placeholder="Search fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: 5 }}
      />
      <ul>
        {filteredItems.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          const disableCheckbox = !isSelected && selectedItems.length >= 3;
          return (
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleSelected(item.id)}
                  disabled={disableCheckbox}
                />
                {item.name}
              </label>
            </li>
          );
        })}
      </ul>
      <h3>Selected fruits</h3>
      <ul>
        {items
          .filter((item) => selectedItems.includes(item.id))
          .map((item) => (
            <li>{item.name}</li>
          ))}
      </ul>
    </>
  );
}
