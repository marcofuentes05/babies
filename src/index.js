import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <h1>
            {[1,2,3,4,5,6].map(v => <h2> {v*v}</h2>)}
        </h1>
    </div>
)
ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
