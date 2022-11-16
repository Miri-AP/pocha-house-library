import './Home.css'
import SignUp from '../../components/SignUp';

function HomePage() {
    // const logo = require("./pochaLibrary.png") as string;
    return (
    <div className='Homepage'>
        <SignUp></SignUp>
        {/* <img src={logo} className="Pocha-Library-Logo" alt="logo" /> */}
    </div>
    )
}

export default HomePage;