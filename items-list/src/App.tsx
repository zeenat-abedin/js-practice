import './App.css'
import ItemsList from './ItemsList'
import StarRating from './StarRating'

function App() {
  return (
    <>
      <ItemsList/>
      <StarRating limit={5} rating={3}/>
    </>
  )
}

export default App
