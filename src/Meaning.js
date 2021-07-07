import React from "react";
import Synonims from "./Synonyms";

export default function Meaning(props){
console.log(props.meaning);
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <p>
                            <strong>Definitions:</strong> {definition.definition}
                        <br />
                        <strong>Example:</strong> <em> {definition.example}</em>
                        <br />
                        <Synonims synonyms={definition.synonyms} />
                        </p>
                    </div>
                )
            })}
        </div>
    );
}