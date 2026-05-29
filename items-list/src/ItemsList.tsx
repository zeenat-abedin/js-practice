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
  return (
    <ul>
      {items.map((el) => (
        <li>{el.name}</li>
      ))}
    </ul>
  );
}
