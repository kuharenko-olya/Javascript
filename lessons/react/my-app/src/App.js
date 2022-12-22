import Header from './components/Header/Header';
import MainClass from "./components/Main/MainClass";
import Footer from "./components/Footer/Footer";
import {ActivityChecker} from "./components/Main/ActivityChecker";


export default function App() {

    return (
        <div>
            <Header/>
            <ActivityChecker></ActivityChecker>
            <MainClass></MainClass>
            <Footer/>
        </div>
    )
}

