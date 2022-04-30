import './App.css';

import SideBar from './components/SideBar/SideBar';
import Logo from './components/Logo/Logo';
import Paragraph from './components/Paragraph/Paragraph';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <SideBar />

            <div className="wrapper">
                <div className="container">
                    <Logo />
                    <Paragraph />
                    <ItemList />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
