import './App.css';
import React from "react";
import NavBar from "./navbar/Navbar";
import {createBrowserHistory} from "history";
import {BrowserRouter} from 'react-router-dom';

const history = createBrowserHistory();

function App() {
    return (
        <BrowserRouter history={history} basename={'/fitness'}>
            <div className="App">
                <h1>Fitness</h1>
                <NavBar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
