import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BingoBoard from "../Components/BingoBoard";
import Confetti from "react-confetti";

// importing data to simulate receiving from api
import QuestionModal from "../Modals/QuestionModal";
import ModalQuestions from "../utils/mockData/ModalQuestions";

// main layout for the bingo board
const BingoBoardLayout = () => {
  const [startNewGame, setStartNewGame] = useState(false);
  const [bingoButton, setBingoButton] = useState(false);
  const [bingoScore, setBingoScore] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // all handler declarations
  const handleStartNewGame = () => {
    setStartNewGame(true);
  };

  const handleBingoButton = (res) => {
    setBingoButton(true);
    if (res.length === 25) {
      setGameOver(true);
    }
  };

  const clickBingoButton = () => {
    setBingoButton(false);
    setConfetti(true);
    setOpenModal(!openModal);
    setBingoScore(bingoScore + 1);
  };

  const handleModalClick = () => {
    setOpenModal(!openModal);
    if (!gameOver) {
      setConfetti(false);
    }
  };

  return (
    <Fragment>
      {confetti ? <Confetti /> : null}
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={8} sm={12}>
            <Row className="justify-content-center text-center mt-2">
              {!startNewGame && (
                <Col md={6} className="mt-5">
                  <Button color="primary" onClick={handleStartNewGame}>
                    Start Conference Bingo
                  </Button>
                </Col>
              )}
              {bingoScore > 0 && (
                <Col md={6}>
                  <h4 className="font-weight-bold">Score: {bingoScore}</h4>
                </Col>
              )}
            </Row>
            {startNewGame && (
              <Row className="p-3 bg-light border justify-content-center text-center">
                <BingoBoard
                  startNewGame={startNewGame}
                  handleBingoButton={handleBingoButton}
                />
              </Row>
            )}
            <Row className="justify-content-center text-center mt-2 mb-3">
              {bingoButton && (
                <Col md={6}>
                  <Button color="success" onClick={clickBingoButton}>
                    Bingo!
                  </Button>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <QuestionModal
        openModal={openModal}
        modalQuestions={ModalQuestions}
        handleClick={handleModalClick}
      ></QuestionModal>
    </Fragment>
  );
};

export default BingoBoardLayout;
