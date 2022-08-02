import { useState } from 'react'
import { useRef } from 'react'
import { FaPlus} from 'react-icons/fa'

const AddItem = ({current, setCurrent, handleSubmit}) => {

    const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
      autoFocus
      id="addItem"
      ref={inputRef}
      placeholder="Add Item"
      type="text"
      required
      value={current}
      onChange={(e)=>{ setCurrent(e.target.value)}}
      />
      <button 
      type="submit"
      aria-label="Add Item"
      onClick={() => inputRef.current.focus()}
      ><FaPlus/></button>
    </form>
  )
}

export default AddItem
