import React from 'react'
import "./Pagination.css"

const Pagination = () => {
  return (
    <div className='pagination'>
      <button><i className="material-symbols-outlined">arrow_back_ios_new</i></button>
      <button>1</button>
      <button>2</button>
      <button>...</button>
      <button>9</button>
      <button>10</button>
      <button><i className="material-symbols-outlined">arrow_forward_ios</i></button>
    </div>
  )
}

export default Pagination