import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { render } from 'react-dom';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { user, logOut } from './AppContext';

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
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.state = {
            displayDrawer: false, 
            user, 
            logOut: this.logOut,
            listNotifications: listNotificationsInitialState,
        };
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

    componentDidMount() {
        document.addEventListener("keydown", this.handleclick);
      }
    
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleclick);
      }

    handleDisplayDrawer() {
        this.setState({displayDrawer: true});
    }
    
    handleHideDrawer() {
        this.setState({displayDrawer: false});
    }

    logIn(email, password) {
        this.setState({
            user: {
                email,
                password,
                isLoggedIn: true,
            },
        });
    }

    logOut() {
        this.setState({ user });
    }

    markNotificationAsRead(id) {
        this.setState({
            listNotifications: this.state.listNotifications.filter((notification) =>{
                return notification.id !== id;
            }),
        });
    }

    render() {
        const { 
            user, 
            user: { isLoggedIn }, 
            logOut, 
            displayDrawer,
            listNotifications,
        } = this.state;
        const value = { user, logOut };
        return (
            <AppContext.Provider value={value}>
                <Notifications 
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
                />
                <div className={css(styles.app)}>
                    <Header/>
                </div>
                <div className={css(styles.body)}>
                    {isLoggedIn ?( 
                    <BodySectionWithMarginBottom title='Course list'>
                        <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom>) :(
                    <BodySectionWithMarginBottom title='Log in to continue'>
                        <Login logIn={this.Login}/>
                    </BodySectionWithMarginBottom>)}
                    <BodySection title='News from the School'>
                        <p>Some news</p>
                    </BodySection>
                </div>
                <div className={css(styles.footer)}>
                    <Footer/>
                </div>
            </AppContext.Provider>
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


App.PropTypes = {}

App.defaultProps = {}
