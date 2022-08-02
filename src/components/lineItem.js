import { FaTrashAlt} from 'react-icons/fa'

function LineItem({item, handleCheck, handleDelete}) {
  return (
    <li key={item.id}>
            <div className="item-container">
              <input 
              type="checkbox" 
              checked={item.checked}
              onChange={()=> handleCheck(item.id)}
              />
              <p
              onDoubleClick={()=> handleCheck(item.id)}
              style={(item.checked) ? {textDecoration:'line-through'} : null}
              >{item.product}</p>
              <FaTrashAlt role="button" tabIndex="0" onClick={()=>handleDelete(item.id)}/>
            </div>
          </li>)
}

export default LineItem
