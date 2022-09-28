import React, { Component } from "react";
import "./index.css";
import CustomChessboard from './Components/CustomChessBoard';

export default class Game extends Component {
  render() {
    return (
      <div>
        <div className="boardsContainer">
          <CustomChessboard />
        </div>
      </div>
    );
  }
}



