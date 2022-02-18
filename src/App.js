import './App.css';
import BootstrapCarousel from './BootstrapCarousel';
import BootstrapNavbar from "./BootstrapNavbar";
import {BrowserRouter as Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Footer from "./components/footer"
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <BootstrapNavbar />
                        <div className="pl-20">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                        </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </AuthProvider>

    );
}

export default App;
