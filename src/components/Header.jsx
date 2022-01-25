import React, { useState } from 'react';
import "@styles/Header.scss";
import menu from '@icons/icon_menu.svg';
import MenuComponent from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo " />
                <ul>
                    <li>
                        <a href="/">Alls</a>
                    </li>
                    <li>
                        <a href="/">Clhotes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furtinures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="icon_shopping_cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <MenuComponent />}
        </nav>
    );
}

export default Header;
