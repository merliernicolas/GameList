import React from "react";
import axios from "axios";
import Game from "./Game";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then(({ data }) => {
        this.setState({ games: data });
      })
      .catch(error => {
        console.log("Echec appel API" + error);
      });
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
        <ul>
          {this.state.games.map(game => {
            return <Game gameData={game} />;
          })}
        </ul>
      </div>
    );
  }
}

export default GameList;