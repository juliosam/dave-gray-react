import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={
        (e)=> {
            e.preventDefault()
            setSearch('')}
        }>
      <label
      htmlFor='search'
      >Search Item</label>
      <input
      id='search'
      type="text"
      placeholder='Search Item'
      role='searchbox'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      /> 
    </form>
  )
}

export default SearchItem
