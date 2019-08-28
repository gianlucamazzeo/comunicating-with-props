// Import the React and ReactDOM libraries
// https://github.com/StephenGrider/redux-code
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" />
                    </a>
                        <div className="content">
                            <a href="/" className="author">
                                Sam
                            </a>
                            <div className="metadata">
                                <span className="date">Oggi è il 28</span>
                            </div>
                            <div className="text">Nice Blog!</div>
                        </div>
                    </div>
                </div>
   );
};

// Take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') );

// semantic libraries 
// http://semantic-ui.com
// https://semantic-ui.com/collections/menu.html
// https://semantic-ui.com/views/comment.html
// for installing libraries use search on google
// semantic ui cdn   ---  https://cdnjs.com/libraries/semantic-ui   
// cdnjs.cloudflare.com/ajax/libs/semantic.min.js 
// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
// npm install --save faker



