import React from "react";
import "./styles/Game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ button: !this.state.button });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          This game is{" "}
          {this.state.button ? "out of stock" : "available"}
        </button>
        <img
          src={this.props.gameData.background_image}
          alt={this.props.gameData.background_image}
        />
        <ul>
          <li>{this.props.gameData.name}</li>
          <li>{this.props.gameData.id}</li>
          <li>{this.props.gameData.rating}</li>
        </ul>
      </div>
    );
  }
}

export default Game;