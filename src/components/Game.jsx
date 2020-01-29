import React from "react";
import "./styles/Game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteButton: false
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
          Click to delete the game{" "}
          {this.state.deleteButton ? "DELETE" : "RE-ADD"}
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