import LineItem from "./lineItem"

const ItemList = ({listOfGrocerys, handleCheck, handleDelete}) => {
  return (
    <div>
      <ul>
        {listOfGrocerys.map((item) =>  (
        <LineItem 
        key={item.id}
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        ))}
      </ul> 
    </div>
  )
}

export default ItemList
