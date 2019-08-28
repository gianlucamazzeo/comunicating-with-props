// Import the React and ReactDOM libraries
// https://github.com/StephenGrider/redux-code
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
            <div className="ui container comments" style={{margin:'50px'}}>
                <ApprovalCard />
                <CommentDetail author="Sam" timeAgo="3.45PM" content="Bel Post" avatar={faker.image.avatar()} />
                <CommentDetail author="John" timeAgo="1.45PM"  content="Grazie" avatar={faker.image.avatar()} />
                <CommentDetail author="Peter" timeAgo="24.00PM" content="Ottimo lavoro!" avatar={faker.image.avatar()}  />                
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



