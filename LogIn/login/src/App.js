import React from "react";
import LoinForm from "./LoginForm"
import InputField from "./InputField"
import SubmitButton from "./SubmitButton"
import UserStore from "./stores/UserStore"
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/jason',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/jason',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          Loading Pkease wait
        </div>
      )
    }

    else {

      return (
        <div className="app">
          Welcome {UserStore.username}
          <SubmitButton />
        </div>
      )
    }
  }
}

export default App