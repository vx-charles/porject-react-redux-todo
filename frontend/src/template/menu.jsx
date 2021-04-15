import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
    background: #333;
    border-radius: 6px;
    margin-bottom: 30px;
    
    .navbar-header a, .menu a {
        color: #ccc;
        font-weight: 600;
        font-family: arial, sans-serif;
    }

    .navbar-header a:hover, .menu a:hover {
        color: #fff;
        text-decoration: none;
    }

    .container {        
        justify-content: right;
    }

    .nav li, .navbar-brand {
        margin-right: 2rem;
    }
`;

const Menu = props => (
    <Navbar className="navbar">
        <div className="container">
            <div className="navbar-header">
                <Link to='/todos' className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </Link>
            </div>

            <div id="navbar" className="menu">
                <ul className="nav">
                    <li><Link to='/todos'>Tarefas</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                </ul>
            </div>
        </div>
    </Navbar>
)

export default Menu