import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { render } from 'react-dom';
import {getLatestNotification} from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const year = getFullYear();
const getFooter = getFooterCopy(false);

const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 1, name: 'React', credit: 40}
];

const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume availalbe'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleclick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleClick)
    }

    handleClick(e) {
        if(e.keyCode === 72 && e.ctrlkey) {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Notifications listNotifications={listNotifications}/>
                <div className={css(styles.app)}>
                    <Header/>
                </div>
                <div className={css(styles.body)}>
                    {this.props.isLoggedIn ? 
                    <BodySectionWithMarginBottom title='Course list'>
                        <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom> :
                    <BodySectionWithMarginBottom title='Log in to continue'>
                        <Login />
                    </BodySectionWithMarginBottom>}
                    <BodySection title='News from the School'>
                        <p>Some news</p>
                    </BodySection>
                </div>
                <div className={css(styles.footer)}>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        borderBottom: `3px solid ${cssVars.mainColor}`,
    },

    body: {
        display: "flex",
        justifyContent: "center",
    },

    footer: {
        backgroundColor: 'red'
    },
 
    footer: {
        borderTop: `3px solid ${cssVars.mainColor}`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        fontStyle: "italic",
    }
});

const cssVars = {
    maincolor: "#e01d3f",
}

App.PropTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => void(0),
}
