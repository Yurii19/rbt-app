import React, { Component } from 'react';
import classes from '../styles/AsideBar.module.css';

   function AsideBar(props){
    return(
        <div className={classes.aside}>
            <h2>Sub menu</h2>
            {/* <hr color='white'/> */}
             <span>{props.curentPage}</span>
             <div className={classes.line}></div>

        </div>
        
    );
}

export default AsideBar;