import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';


const ResultsContainer = ({suggestedNames}) => {


/*Map function which returns a list of all suggested Names*/
    const suggestedNamesJsx = suggestedNames.map((suggestedName) =>{
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    }); 

    return(
        <>
        <div className="results-container">{suggestedNamesJsx}</div>
        </>
    )
}

export default ResultsContainer;





/*suggestedNames.length > 0 ? suggestedNames[0] : null*/