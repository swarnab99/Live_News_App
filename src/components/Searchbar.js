import React, { useState } from 'react'

const Searchbar = (props) => {
  // State using Hooks
  const [searchKey, setSearchKey] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchKey)
    props.onSearch(searchKey)
  }
  

  return (
    <div className="row searchbar">
      <form onSubmit={onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input onChange={(e) => setSearchKey(e.target.value)} id="email" type="text" className="validate" required/>
            {/* <span className="helper-text" data-error="wrong" data-success="Loading"></span> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Searchbar
