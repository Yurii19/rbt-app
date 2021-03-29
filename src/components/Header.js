import React, { } from 'react';
import classes from '../styles/Header.module.css';
import { BrowserRouter, NavLink } from "react-router-dom";
import Home from "./Home";
//import store from "../redux/redux-store";
import { connect } from 'react-redux';

const Header = (props) => {

    // const [isLogined, setUser] = React.useState(false);
    const menuItems = props.pages;
    const menuVar = menuItems.map((el) => <li key={el}><NavLink to={'/' + el} className={classes.link}>
        {el.charAt(0).toUpperCase() +
            el.substr(1)}</NavLink></li>);
    console.log(props);

    // React.useEffect((flag) => {
    //     const localstate = store.getState();
    //      setUser( localstate.authData.userID);
    // });
    // console.log('-> '+isLogined);
    return (
        <div className={classes.main_menu}>
            <span className={classes.logo}></span>

            <button className={classes.btn}>App</button>
            <ul>
                {menuVar}
            </ul>
            <div className={classes.login}>
                <NavLink to={'home'}>{props.isLogined ? 'UserName' : 'Login'}
                </NavLink>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { isLogined: state.authData.userID }
}
export default connect(mapStateToProps, null)(Header);
//export default Header;