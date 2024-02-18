import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

export default function Header() {
    return (
        <div>
            <header className={css(styles.header)}>
                <img src={logo} alt="logo" className={css(styles.headerImg)}></img>
                <h1>School dashboard</h1>
            </header>
        </div>
    );
}

const cssVars = {
    mainColor: "#e01d3f",
};
  
const styles = StyleSheet.create({
    header: {
      display: "flex",
      alignItems: "center",
      color: cssVars.mainColor,
      fontSize: "20px",
    },
  
    headerImg: {
      width: "200px",
    },
});
