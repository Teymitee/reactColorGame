import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Container from "./components/Container";
import Square from "./components/Square";
import ModeButtons from "./components/ModeButtons";
import "./index.css";

class App extends Component {
  state = {
    header: "#232323",
    squares: [],
    message: "",
    modes: [
      { name: "easy", numSquare: 3 },
      { name: "intermediate", numSquare: 6 },
      { name: "hard", numSquare: 9 },
    ],
    num: 3,
    colors: [],
    pickedColor: "",
  };
  componentDidMount() {
    this.generateRandomColors(this.state.num);
  }

  randomColor() {
    let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  generateRandomColors() {
    let num = this.state.num;
    let arr = [];
    let random;
    for (let i = 0; i < num; i++) arr.push(this.randomColor());

    random = Math.floor(Math.random() * arr.length);
    this.setState({
      colors: arr,
      pickedColor: arr[random],
      num: arr.length,
    });
  }
  handleClick = (num) => {
    this.setState(
      {
        num: num,
        message: "",
        header: "#232323",
      },
      () => this.generateRandomColors(this.state.num)
    );
  };

  handleCheck = (squareColor) => {
    let pickedColor = this.state.pickedColor;
    if (pickedColor === squareColor) {
      let rightColor = [];
      for (let i = 0; i < this.state.colors.length; i++) {
        rightColor.push(pickedColor);
        this.setState(function () {
          return {
            colors: rightColor,
            message: "Correct!",
            header: pickedColor,
          };
        });
      }
    } else {
      this.setState(function () {
        return {
          message: "Wrong!",
        };
      });
    }
  };
  reset = () => {
    this.generateRandomColors(this.state.num);
    this.setState({
      message: "",
    });
  };
  render() {
    let colors = this.state.colors,
      modes = this.state.modes,
      buttons = [],
      squares = [];
    for (let i = 0; i < colors.length; i++) {
      squares.push(
        <Square key={i} color={colors[i]} handleCheck={this.handleCheck} />
      );
    }
    modes.forEach((mode) => {
      buttons.push(
        <ModeButtons
          key={mode.name}
          numSquare={mode.numSquare}
          name={mode.name}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <div>
        <Header
          pickedColor={this.state.pickedColor}
          headerColor={this.state.header}
        />
        <NavBar>
          <button className="resetBtn" onClick={this.reset}>
            Reset
          </button>
          <span>{this.state.message}</span> {buttons}
        </NavBar>
        <div
          style={{
            backgroundColor: "white",
            width: "300px",
            padding: "15px",
            margin: "50px 0px 0 20px",
            float: "left",
            borderRadius: "5px",
          }}
        >
          <h2>How to Play</h2>
          <p style={{ lineHeight: " 2" }}>
            Choose a square which represents the rgb color code displayed in the
            header. You can change level of difficulty by clicking "easy",
            "Intermediate" or "Hard"
          </p>
        </div>
        <Container>{squares}</Container>
      </div>
    );
  }
}

export default App;
