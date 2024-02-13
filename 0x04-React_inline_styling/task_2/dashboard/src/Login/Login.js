import React from 'react';
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function Login() {
    return (
        <div>
            <div className={css(styles.login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email: </label>
                <input type="email" id="Email" name="Email" className={css(styles.loginInput)}/>
                <label htmlFor="Password"> Password: </label>
                <input type="password" id="Password" name="Password" className={css(styles.loginInput)}/>
                <button>Ok</button>
            </div>
            <div className="linea"></div>
        </div>
    );
}

const styles = StyleSheet.create({
    login: {
      margin: "50px",
      flexGrow: 1,
    },
  
    loginInput: {
      marginLeft: "10px",
      marginRight: "20px",
    },
});
