import React from 'react';
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default class Login extends React.Component() {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "", 
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit() {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    const { value } = e.target;
    const { password } = this.state;
  
    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });

    this.setState({ email: e.target.value })
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;
  
    if (email !== "" && value !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
  
    this.setState({ password: e.target.value });
  }

  render () {
    return (
      <div>
          <div className={css(styles.login)}>
              <p>Login to access the full dashboard</p>
              <div className={css(styles.form)}>
                <form action="" onSubmit={this.handleLoginSubmit}>
                  <div className={css(styles['input-group'])}>
                      <label htmlFor="Email">Email: </label>
                      <input type="email" id="Email" name="Email" value={this.state.email} onChange={this.handleChangeEmail} className={css(styles.loginInput)}/>
                  </div>
                  <div className={css(styles['input-group'])}>
                      <label htmlFor="Password"> Password: </label>
                      <input type="password" id="Password" name="Password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.loginInput)}/>
                  </div>
                  <input type="submit" value="OK" disable={!this.state.enableSubmit}/>
                  </form>
              </div>
          </div>
          <div className="linea"></div>
      </div>
    );
  }
}

const screenSize = {
    small: "@media screen and (max-width: 900px)",
};
  
const styles = StyleSheet.create({
    login: {
      margin: "50px",
      flexGrow: 1,
      [screenSize.small]: {
        margin: '0.25rem 0'
      },
    },
  
    'input-group': {
      '@media (max-width: 900px)': {
        margin: '0.25rem 0'
      }
    },
  
    loginInput: {
      marginLeft: "10px",
      marginRight: "20px",
      [screenSize.small]: {
        display: "block",
        marginLeft: 0,
        marginTop: "10px",
        marginBottom: "10px",
      },
    },
});
