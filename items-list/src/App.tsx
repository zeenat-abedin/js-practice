import './App.css'
import Carousel from './Carousel'
import ItemsList from './ItemsList'
import Search from './Search'
import StarRating from './StarRating'

function App() {
  return (
    <>
      <ItemsList/>
      <StarRating />
      <Search />
      <Carousel/>
    </>
  )
}

export default App
