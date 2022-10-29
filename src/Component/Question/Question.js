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
                <h2>How React Works ? </h2>
                <hr/>
                <p>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.  React will have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            </div>
        </div>
    );
};

export default Question;