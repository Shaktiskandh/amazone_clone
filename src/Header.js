import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Header.css";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
function Header() {
    const [{ basket, user}] = useStateValue();
     function handleAuthentication() {
         if(user) {
             auth.signOut();
         }
     };

    return (
        <div className="header">
            <Link to="/">
            <img 
             className="header_logo" 
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt="Amazon_logo"
             />
            </Link>
            
            <div className="header_search">
                <input 
                type="text" 
                className="header_input"
                />
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} 
                className="header_option">
                    <span className="header_optionLineOne">
                       {user ? 
                       `Hello ${user?.email}` : "Hello Guest"}
                    </span>
                    <span className="header_optionLineTwo">
                        {user ? 'Sign out':'Sign in'}
                    </span>
                </div>
                </Link>
                 <Link to="/orders">
                 <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                 </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    
                    <ShoppingBasketIcon />
                    
                    <span className="header_optionLineTwo header_basketCount">
                    { basket.length }
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
