import React from "react";

const Nametag=(props)=>{
    const divStyle = {
        color: 'blue',
      };
    return(
        <div className="name-tag" style={props.style}>
            <p><span style={divStyle}>DEVELOPER</span> IN INDIA</p>
        </div>
        
    );
}

export default Nametag;