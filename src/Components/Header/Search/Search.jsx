import React from 'react'
import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setshowSearch}) => {
  return (
    <div className='search-modal'>
    <div className='form-field'>
        <input 
          type='text'
          autoFocus
          placeholder='Search for products'
        />
        <MdClose className="close-btn" onClick={()=> setshowSearch(false)}/>
    </div>

    <div className='search-result-content'>
        <div className='search-results'>
            <div className='search-result-item'>
                <div className='img-container'>
                    <img src='../images/hplaptop.jpg' alt='img'/>
                </div>
                <div className='prod-details'>
                  <span className='name'>product name</span>
                  <span className='desc'>product desc</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search