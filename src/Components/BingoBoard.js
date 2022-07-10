import React, { Fragment, useEffect, useState } from "react";
import BingoOptions from "../utils/mockData/BingoOptions";
import {
  countMarkedLines,
  shuffleBingoOptions,
  updateMarked,
} from "../utils/utils";
import "./styles.css";

// the actual bingo board component
const BingoBoard = ({ startNewGame, handleBingoButton }) => {
  const [shuffle, setShuffle] = useState(false);
  const [bingoBoardOptions, setBingoBoardOptions] = useState([]);
  const [filledLines, setFilledLines] = useState(0);

  // if user has clicked start new game
  useEffect(() => {
    if (startNewGame) {
      // shuffle and build array here
      setShuffle(true);
    }
  }, [startNewGame]);

  // if user has clicked start new game, shuffle and set up the bingo board
  useEffect(() => {
    if (shuffle) {
      setBingoBoardOptions(shuffleBingoOptions(BingoOptions));
      setShuffle(false);
    }
  }, [shuffle]);

  // action when user clicks on tile and toggles it on / off
  const toggleTile = (id) => {
    if (id !== 12) {
      if (!bingoBoardOptions.find((obj) => obj.value === id).marked) {
        setBingoBoardOptions(updateMarked(bingoBoardOptions, id));
      }
    }
  };

  // check if user has met winning criteria of row, column, or diagonal
  useEffect(() => {
    if (bingoBoardOptions.length > 0) {
      let res = bingoBoardOptions.filter(e => e.marked === true);
      if (countMarkedLines(bingoBoardOptions) > filledLines) {
        handleBingoButton(res); // unlock button in parent component
        setFilledLines(filledLines + 1);
      }
    }
  }, [bingoBoardOptions, filledLines, handleBingoButton]);

  return (
    <Fragment>
      <div className="wrapper">
        {bingoBoardOptions.map((option, index) => (
          <Tile
            key={index}
            isSet={option.marked}
            onToggle={() => toggleTile(index)}
          >
            {option.label}
          </Tile>
        ))}
      </div>
    </Fragment>
  );
};

// tile component for board use
const Tile = ({ children, onToggle, isSet }) => {
  return (
    <div onClick={onToggle} className={`tile ${isSet ? "tile--set" : ""}`}>
      {children}
    </div>
  );
};

export default BingoBoard;
