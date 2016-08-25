import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <h1>IMG</h1>
        { children }
        <footer>
            <Link to="/">Pedro Carbonell</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};
// kyguerra@falabella.cl
export default App;
