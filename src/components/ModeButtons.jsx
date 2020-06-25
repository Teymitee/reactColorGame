import React from 'react'



function ModeButtons({ name, numSquare, handleClick}) {
    return (
    <button onClick={function(){handleClick(numSquare)}}>{ name }</button>
    )
}

export default ModeButtons