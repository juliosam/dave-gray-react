import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { useState } from 'react';

function App() {

  const [listOfGrocerys, setListOfGrocerys] = useState([
    {
      id: 1 ,
      product: "3 potatoes of a fresh farm with the certificate of veganism",
      checked: true 
    },
    {
      id: 2 ,
      product: "2 mangos",
      checked: false
    },
    {
      id: 3 ,
      product: "item 3",
      checked: false
    }, 
  ])

  const handleCheck = (id) =>{
     const listItems = listOfGrocerys.map((item) => item.id === id ? {...item,
       checked: !item.checked}: item)
     setListOfGrocerys(listItems);
  //    localStorage.setListOfGrocerys('shoppingList', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
      const listItems = listOfGrocerys.filter((item) => item.id !== id)
      setListOfGrocerys(listItems)
  }
  return (
    <div className="App">
      <Header title="Grosery List"/>
      <Content 
      listOfGrocerys={listOfGrocerys} 
      handleDelete ={handleDelete}
      handleCheck={handleCheck}
      />
      <Footer length={listOfGrocerys.length}/>
    </div>
  );
}

export default App;
