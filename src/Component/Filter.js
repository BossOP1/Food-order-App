import React from 'react'

const Filter = (props) => {

let category = props.category;
let setCategory = props.setCategory;

function FilterHandler(){
    setCategory(title);
}

  return (
    <div>
  {props.filterData.map((data)=>{
    return(
        <button key = {data.id} onClick={()=>filterData(data.title)}>{category == data.title}
        </button>
    
    )
  })}
    </div>
  )
}

export default Filter