import { FaTrashAlt} from 'react-icons/fa'

const Content = ({listOfGrocerys, handleCheck, handleDelete}) => {

  return ( 
    <div>
      {listOfGrocerys.length ? (
      <ul>
        {listOfGrocerys.map(item => {
          return(
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
        })}
      </ul> ) : (<p style={{marginTop: '12rem', fontSize:'2rem'}}>Your List Is Empty</p>)}
    </div>
   );
}
 
export default Content;