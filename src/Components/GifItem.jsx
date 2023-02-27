import PropTypes from 'prop-types'
import React from 'react'

export const GifItem = ( {title, url, id}) => {

  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
/* TAREA
1. Añadir PropTypes ????? yarn add
  a. title obligatorio
  b. url obligatorio
  
2. Evaluar el snapshot
*/