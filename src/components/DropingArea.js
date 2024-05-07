import React, {  useState}          from 'react';
import './styles/DropingArea.scss';

function DropingArea (props){
    const {  onDrop} = props;
    const[showDropArea , setShowDropArea] = useState(false)
    return(
        <div 
            className={`dropingAreaWrapper ${showDropArea ? "showDropArea" :"hideDropArea"}`} 
            onDragEnter={() => setShowDropArea(true)} 
            onDragLeave={()=>setShowDropArea(false)}
            onDrop= {()=>{
                onDrop();
                setShowDropArea(false);
            }}
            onDragOver={e => e.preventDefault()}
        >
            Drop Here !!
        </div>
    )
}

export default DropingArea;