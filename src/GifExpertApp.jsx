import {useState} from 'react'
import { AddCategory, GifGrid} from './Components'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])
  
  //console.log(categories)
  const onAddcategories = ( newCategory ) =>{

    if ( categories.includes(newCategory) ) return;   
    //console.log(newCategory)  
    //categories.push(newCategory)
    setCategories([ newCategory, ...categories]);
  }
  return (
      <> 
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
        //setCategories = { setCategories }
          onNewCategory={ (value) => onAddcategories(value)} 
        />
        {/* Listado de gif */}
        {/* <button onClick={onAddcategories}>Agregar</button> */}

            {
                categories.map( ( category ) =>(
                   <GifGrid key={ category } category={category}/>
                  ))
            }
            
          {/* Gif Item */}
      </>
    )
  }