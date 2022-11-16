import './Header.css'
import { FC, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../../providers/GlobalContext/GlobalContext.provider';

interface Props {
  dispatch: any
}

const Header :FC<Props> = ({ dispatch }) => {
    const logo = require("./logo.png") as string;
    const { Header, Search } = useContext(GlobalContext);
    const [languageSelected, setLanguage] = useState('SPANISH');
    
    const langActive = (language :string) :string => {
       return languageSelected === language ? `Header-Language ${language.toLowerCase()}-active` : 'Header-Language'
    }

    return (
    <div className="Header-Wrapper">
        {/* <img src={logo} className="Header-Logo" alt="logo" /> */}
        <input type="text" className='Header-Search' placeholder={Search.placeholder} />
        <nav>
            <Link to="borrow-book" className='Header-Link'>{Header.pages.borrow}</Link>
            <Link to="return-book" className='Header-Link'>{Header.pages.return}</Link>
            <Link to="donate" className='Header-Link'>{Header.pages.donate}</Link>
        </nav>
        <div className='Header-Language-Toggle'>
            <button
                className={langActive('ENGLISH')}
                onClick={() => {
                        setLanguage('ENGLISH')
                        dispatch({ type: 'SET_ENGLISH_MODE' })
                    }}
            >English</button>
            <button
               className={langActive('SPANISH')}
                onClick={() => {
                        setLanguage('SPANISH')
                        dispatch({ type: 'SET_SPANISH_MODE' })
                    }}
            >Español</button>
        </div>
    </div>
    )
}

export default Header;