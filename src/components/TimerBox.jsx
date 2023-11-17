import React from "react";
import "../App.css";

class TimerBox extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1500,
      starter: false,
      text: "START",
      counter: 1,
      active: "1",
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    if (hours !== 0) {
      minutes += hours * 60;
    }

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.state.starter === false) {
      this.timer = setInterval(this.countDown, 1000);
      this.setState({ starter: true });
      this.setState({ text: "STOP" });
    } else {
      clearInterval(this.timer);
      this.setState({ starter: false });
      this.setState({ text: "START" });
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
      let counter = this.state.counter + 1;
      this.setState({
        seconds: 10,
        counter: counter,
      });
      if (this.state.text === "STOP") {
        this.setState({ starter: false });
        this.setState({ text: "START" });
      }
      alert("TIMER ENDED");
    }
  }

  resetCounter(){
    let result = window.confirm("Do you want to refresh pomodoro counter?")
    if(result === true){
      this.setState({ counter: 1 });
    }
    
  }
  

  handleClick = (event) => {
    let secn
    const updater = (secn) => {
      this.setState({ seconds: secn });
      let timeLeftVar = this.secondsToTime(secn);
      this.setState({ time: timeLeftVar });
    };
    let startbtn = document.getElementsByClassName("timer_start");
    let timertxt = document.getElementsByClassName("timer_text");
    this.setState({ active: event.target.id });

    clearInterval(this.timer);
    this.setState({ starter: false });
    this.setState({ text: "START" });
    switch (event.target.id) {
      case "1":
        document.body.style.background = "#ba4949";
        startbtn.starter.style.color = "#ba4949";
        timertxt.tmrtxt.innerHTML = "Time to focus!";
        secn=1500
        updater(secn)
        break;
      case "2":
        document.body.style.background = "#38858a";
        startbtn.starter.style.color = "#38858a";
        timertxt.tmrtxt.innerHTML = "Time for a break!";
        secn = 300;
        updater(secn);
        break;
      case "3":
        document.body.style.background = "#397097";
        startbtn.starter.style.color = "#397097";
        timertxt.tmrtxt.innerHTML = "Time for a break!";
        secn = 900;
        updater(secn);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="timer_wrapper">
        <div className="timer_buttons">
          <button
            className={this.state.active === "1" ? "activebtn" : undefined}
            id={"1"}
            onClick={this.handleClick}
          >
            Pomodoro
          </button>

          <button
            className={this.state.active === "2" ? "activebtn" : undefined}
            id={"2"}
            onClick={this.handleClick}
          >
            Short Break
          </button>

          <button
            className={this.state.active === "3" ? "activebtn" : undefined}
            id={"3"}
            onClick={this.handleClick}
          >
            Long Break
          </button>
        </div>
        <div className="timer">
          {this.state.time.m === 0
            ? "00"
            : this.state.time.m < 10
            ? `0${this.state.time.m}`
            : this.state.time.m}
          :
          {this.state.time.s === 0
            ? "00"
            : this.state.time.s < 10
            ? `0${this.state.time.s}`
            : this.state.time.s}
          <button
            id="starter"
            className="timer_start"
            onClick={this.startTimer}
          >
            {this.state.text}
          </button>
        </div>
        <div className="counter">
          <button onClick={this.resetCounter}>#{this.state.counter}</button>
          <span id="tmrtxt" className="timer_text">
            Time to focus!
          </span>
        </div>
      </div>
    );
  }
}


export default TimerBox;
