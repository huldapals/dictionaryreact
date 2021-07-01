import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
let [Keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function search(event){
    event.preventDefault();

    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);    
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
            <Results results={results}/>
        </div>
    );
}