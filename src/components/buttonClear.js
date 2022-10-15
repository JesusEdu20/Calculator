import React from "react";
import "../staylesheet/buttonClear.css"

 const  ButtonClear= (props) =>(
    <div className="button-clear" onClick={props.clearHandler}>
        {props.children}
    </div>
 );

 export default ButtonClear;