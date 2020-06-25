import React from 'react'


function Square({ color, handleCheck }) {
    
    return (<div style={{backgroundColor: color}} onClick={()=>handleCheck(color)}></div>
    )
}



export default Square