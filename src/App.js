import React from "react";
// import { render } from 'react-dom'
import { Router } from "@reach/router";
import moment from "moment";

import "antd/dist/antd.css";
import "./App.css";

import { Welcome } from "./routes/Welcome";
import { Authentication } from "./routes/Authentication";
import { YourBudget } from "./routes/YourBudget";
import { YourPlan } from "./routes/YourPlan";
import { YourPayment } from "./routes/YourPayment";
import { Home } from "./routes/Home";

import { MessageContext } from "./messageContextProvider";

// Default messages to have for app background
const msgHistory = [
  {
    from: "user",
    txt: `I have run out of cash. Can I get some more to top up my Hop card?`,
    timeStamp: "4:23pm 11 August 2019"
  },
  {
    from: "office",
    txt: `Sure thing, I have put another $30 on your debit card for you to use to top up your Hop card.`,
    timeStamp: "4:34pm 11 August 2019"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgHistory,
      createMsg: this.addMsg
    };
    this.addMsg = this.addMsg.bind(this);
  }

  addMsg(msgTxt) {
    let updatedMsgHistory = [
      ...this.msgHistory.msgHistory,
      {
        from: "user",
        txt: msgTxt,
        timeStamp: moment().format("h:mma DD MMMM YYYY")
      }
    ];
    this.msgHistory.msgHistory = updatedMsgHistory;
    window.localStorage.setItem(
      "msgHistory",
      JSON.stringify(updatedMsgHistory)
    );
  }

  componentDidMount() {
    window.localStorage.setItem("msgHistory", JSON.stringify(msgHistory));
    this.setState({ msgHistory, ...this.state });
  }

  render() {
    return (
      <MessageContext.Provider
        value={{ msgHistory: this.state, createMsg: this.state.createMsg }}
      >
        <Router>
          <Welcome path="/" />
          <YourBudget path="/your-budget" />
          <Authentication path="/authentication" />
          <YourPlan path="/your-plan" />
          <YourPayment path="/your-payment" />
          {/* <Home path='/' /> */}
        </Router>
      </MessageContext.Provider>
    );
  }
}

export default App;
