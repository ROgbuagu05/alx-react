import React from 'react';
import BodySection from './BodySection'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={this.props.title} children={this.props.children}></BodySection>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
      marginBottom: "40px",
      width: "100%",
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}
