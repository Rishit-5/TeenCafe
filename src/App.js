import logo from './logo.svg';
import './App.css';
import BootstrapCarousel from './BootstrapCarousel';
import BootstrapNavbar from "./BootstrapNavbar";
import {BrowserRouter as Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Home from "./components/Home"
import SignUp from "./components/SignUp";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BootstrapNavbar />
                <div className="pl-20">
                    <Switch>
                        <Route exact path='/' component={Home} />]
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
