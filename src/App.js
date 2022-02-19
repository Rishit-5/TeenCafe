import './App.css';
import BootstrapCarousel from './BootstrapCarousel';
import BootstrapNavbar from "./BootstrapNavbar";
import {BrowserRouter as Router, Route, Link, BrowserRouter, Switch, HashRouter} from 'react-router-dom';
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Footer from "./components/footer"

function App() {
    return (
            <div className="App">
                <HashRouter basename="/TeenCafe">
                    <BootstrapNavbar />
                        <div className="pl-20">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/signup' component={SignUp} />
                    </Switch>
                        </div>
                    <Footer />
                </HashRouter>
            </div>

    );
}

export default App;
