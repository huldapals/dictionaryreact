import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
let [Keyword, setKeyword] = useState("");


function search(event){
    event.preventDefault();
    alert(`searching for ${Keyword}`);
    }
    
function handelKeyword(event){
 setKeyword(event.target.value);
}

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handelKeyword}/>
                <input type="submit"/>
            </form>
        </div>
    );
}