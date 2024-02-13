import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styleBottom = { 
        position: 'relative',
        left: '1175px',
        bottom: '70px',
        border: 'none',
        background: 'transparent'
};

function printOnClick() {
    console.log('Close button has been clicked');
}

const notification = getLatestNotification();

const style = {
    position: "absolute",
    right: "1px",
    "margin-right": "20px",
}

export default class Notifications extends React.Component{

    shouldComponentUpdate(nextProps) {
        if (this.props.listNotifications.length < nextProps.listNotifications.length) return true
        return false;
    }

    render () {
        return (
            <div style={style}>
                <div className={css(styles.menuItem)} id="menuItem">
                    Your notifications
                </div>
            {this.props.displayDrawer ? (
                <div className={css(styles.notifications)} id="Notifications">
                    <React.Fragment>
                        <p className={css(styles.notificationsP)}>Here is the list of notifications</p>
                        <button style={styleBottom} arial-label="Close" onClick={printOnClick}>
                            <img src={close} alt="Close" width="10px"/>
                        </button>
                        <ul>
                            {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
                            {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
                        </ul>
                    </React.Fragment>
                </div>) : <></> }
            </div>
        );
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
}

const cssVars = {
    mainColor: "#e01d3f",
};
  
  const styles = StyleSheet.create({
    menuItem: {
      textAlign: "right",
    },
  
    notifications: {
      float: "right",
      border: `3px dashed ${cssVars.mainColor}`,
      padding: "10px",
      marginBottom: "20px",
    },
  
    notificationsButtonImage: {
      width: "10px",
    },
  
    notificationsP: {
      margin: 0,
      marginTop: "15px",
    },
});

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}
