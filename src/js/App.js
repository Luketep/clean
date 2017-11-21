import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {    
    render() {
        ReactDOM.render(
            <span>Hello from React!</span>
            , document.getElementById('app')
        );
    }
}