// Build a React (TSX preferred) component that
// displays a list of items (e.g., fruits or products)
// with the following features:
// Requirements;
// Display List
// Show a list of items from a given array.
// Each item should have a selectable control (checkbox/toggle).
// Selection Logic
// Users can select multiple items.
// Display all selected items in a separate section.
// Search Filter
// Add a search input.
// Filter the list in real-time as the user types.
// Selection Limit
// Allow selecting maximum 3 items only.
// Disable further selections once the limit is reached.

import { useMemo, useState } from 'react';

type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Orange' },
  { id: 4, name: 'Mango' },
  { id: 5, name: 'Grapes' },
];

export default function ItemsList() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [search, setSearch] = useState('');

  const handleSelect = (id: number) => {
    const alreadySelected = selectedItems.includes(id);
    if (alreadySelected) {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
      return;
    }
    setSelectedItems((prev) => [...prev, id]);
  };

  const filterdItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <>
      <h3>List Items</h3>
      <input type="text"placeholder="Search items..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filterdItems.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          const disableCheckbox = !isSelected && selectedItems.length >= 3
          return (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleSelect(item.id)}
                  disabled={disableCheckbox}
                />
                {item.name}
              </label>
            </li>
          );
        })}
      </ul>
      <h3>Selected Items</h3>
      <ul>
        {items
          .filter((item) => selectedItems.includes(item.id))
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </>
  );
}
