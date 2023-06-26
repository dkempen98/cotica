import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/close-menu.png'
import '../style/Navbar.css';

export default function Navbar() {
    const [menuVis, setMenuVis] = useState("false")
    const [page, setPage] = useState('')

    function openNav() {
        if (menuVis === 'false') {
            setMenuVis('true')
        } else {
            setMenuVis('false')
        }
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleOutsideClick(event) {
                if(ref.current && !ref.current.contains(event.target)) {
                    setMenuVis('false')
                }
            }

            document.addEventListener("mousedown", handleOutsideClick);
            return() => {
                document.removeEventListener("mousedown", handleOutsideClick)
            }
        }, [ref])
    }

    function changePage(newPage) {
        if(menuVis === 'true') {
            setMenuVis('false')
        }
        setPage(newPage)
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <header className="nb-container nb-flex">
            {/* <div ref={wrapperRef}>HERE</div> */}
            <div className='nb-flex nb-header'> 
                <img className='nb-logo' src={logo}></img>
                <h1 className='nb-title'><span>COTICA</span></h1>
            </div>

            <button onClick={openNav} className='nb-mobile-toggle' aria-controls='primary-navigation' aria-expanded={menuVis}>
                <span className='sr-only'>Menu</span>
            </button>
            
            <nav>
                <ul className="nb-primary nb-flex" data-visible={menuVis} active='true' ref={wrapperRef}>
                    <li>
                        <Link to="/" onClick={() => changePage("home")}>
                            <span className={window.location.pathname === "/" || page === "home"  ? 'nb-span nb-active' : 'nb-span'} aria-hidden="true"></span>Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={() => changePage("team")}>  
                            <span className={window.location.pathname === "/team" ? 'nb-span nb-active' : 'nb-span'} aria-hidden="true"></span>Item 2
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => changePage()}>  
                            <span className={window.location.pathname === "/login" ? 'nb-span nb-active' : 'nb-span'} aria-hidden="true"></span>Login or Sign Up
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/players" onClick={() => changePage('players')}>  
                            <span className={activePage === 'players' ? 'nb-span nb-active' : 'nb-span'} aria-hidden="true">04</span>Player Stats
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </header>
  );
}
