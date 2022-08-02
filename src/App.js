import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import AddItem from './components/addItem';
import SearchItem from './components/searchItem';
import { useEffect, useState } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/listOfGrocerys'
  
  const [listOfGrocerys, setListOfGrocerys] = useState([]);
  const [current, setCurrent] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json();
        setListOfGrocerys(listItems)
      }catch(err){ setFetchError(err.message)}
      finally{setIsLoading(false)}
    }
    setTimeout(()=>{fetchItems()},2000)
    
  },[])

  const addItem = (item) =>{
    const key = listOfGrocerys.length? listOfGrocerys[listOfGrocerys.length - 1].id + 1 : 1;
    const newItem = {id:key, product:item, checked: false};
    const newList = [...listOfGrocerys, newItem];
    setListOfGrocerys(newList)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!current) return
    addItem(current)
    setCurrent('')
  }

  const handleCheck = (id) =>{
    const listItems = listOfGrocerys.map((item) => item.id === id ? {...item,
      checked: !item.checked}: item)
    setListOfGrocerys(listItems)
  }

  const handleDelete = (id) => {
    const listItems = listOfGrocerys.filter((item) => item.id !== id)
    setListOfGrocerys(listItems)
  }

  return (
    <div className="App">
      <Header title="D' CheckList"/>
      <AddItem 
      handleSubmit={handleSubmit}
      current={current}
      setCurrent={setCurrent}
      />
      <SearchItem search={search} setSearch={setSearch}/>
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
        listOfGrocerys={listOfGrocerys.filter(item => ((item.product).toLocaleLowerCase())
          .includes((search).toLocaleLowerCase()))} 
        handleDelete ={handleDelete}
        handleCheck={handleCheck}
        />}
      </main>
      <Footer length={listOfGrocerys.length}/>
    </div>
  );
}

export default App;
