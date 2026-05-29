import './App.css'
import ItemsList from './ItemsList'

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

function App() {
  return (
    <>
      <ItemsList/>
    </>
  )
}

export default App
