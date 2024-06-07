import React from "react"
import Right from "./Right";
import Left from "./Left";


const App=()=>{
    const imageURL="images/avatar.png";
    return(
        <div>
            <Left 
            images={imageURL}
            style={{ marginTop: '10px' }}
            name="Arvind Kumar Rai"
            />
            <Right/>
        </div>
    );
}

export default App;