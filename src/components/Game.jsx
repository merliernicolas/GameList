import React from "react";
import "./styles/Game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: false
    };

    this.handledeleteButtonClick = this.handledeleteButtonClick.bind(this);
  }

  handledeleteButtonClick() {
    this.setState({ deleteButton: !this.state.deleteButton });
  }
  render() {
    return (
      <div>
        <button onClick={this.handledeleteButtonClick}>
          This game is{" "}
          {this.state.deleteButton ? "out of stock" : "available"}
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