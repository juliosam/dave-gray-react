import ItemList from './itemList';

const Content = ({listOfGrocerys, handleCheck, handleDelete}) => {

  return ( 
    <>
      {listOfGrocerys.length ? (
        <ItemList 
        listOfGrocerys={listOfGrocerys} 
        handleDelete ={handleDelete}
        handleCheck={handleCheck}
        />
       ) : (<p style={{margin: '9rem 0', fontSize:'2rem'}}>Your List Is Empty</p>)}
    </>
   );
}
 
export default Content;