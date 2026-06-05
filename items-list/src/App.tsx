import './App.css';
import explorer from './data/folderData';
import Folder from './Folder';
// import StopWatch from './StopWatch';
// import Todo from './Todo';
// import Table from './Table';
// import Carousel from './Carousel'
// import ItemsList from './ItemsList'
// import Search from './Search'
// import StarRating from './StarRating'

function App() {
  return (
    <>
      {/* <ItemsList/>
      <StarRating />
      <Search /> 
       <Carousel/> 
       <Table/> */}
      {/* <StopWatch />
      <Todo/> */}
      <Folder explorer={explorer}/>
    </>
  );
}

export default App;
