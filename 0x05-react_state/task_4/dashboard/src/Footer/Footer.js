import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function Footer() {
    return (
        <AppContext.Consumer>
            {(context) => {
                return (
                    <footer className="App-footer">
                        <p>Copyright {year} - {getFooter}</p>
                        {context.user.isLoggedIn && <a href="#">Contact us</a>}
                    </footer>
                );
            }}
        </AppContext.Consumer>
    );
}
