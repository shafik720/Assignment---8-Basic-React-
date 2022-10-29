import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="question-div">
            <div className="answer-div">
                <h2>How React Works ? </h2>
                <hr/>
                <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.  React will have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            </div>
            <div className="answer-div">
                <h2>How React Usestate Works ? </h2>
                <hr/>
                <p>The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component. 
                It's a Hook that allows to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                </p>
            </div>
        </div>
    );
};

export default Question;