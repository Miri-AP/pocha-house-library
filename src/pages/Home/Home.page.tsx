import './Home.css'
import Header from '../../components/Header';

function HomePage() {
    const logo = require("./pochaLibrary.png") as string;
    return (
    <div>
        <Header></Header>
        <img src={logo} className="Pocha-Library-Logo" alt="logo" />
    </div>
    )
}

export default HomePage;