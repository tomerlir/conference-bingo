import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  FormText,
  Form,
  Input,
  Label,
} from "reactstrap";
import { returnRandomQuestion } from "../utils/utils";

// Custom modal to be used for the question in between Bingos
const QuestionModal = ({ openModal, modalQuestions, handleClick }) => {
  const [show, setShow] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState({});
  const [showFalseAnswer, setShowFalseAnswer] = useState(false);

  // handle submit 
  const handleConfirm = () => {
    // check if the selected answer is the correct answer
    let correctAnswer = question.answers.findIndex(
      (answr) => answr.correct === true
    );
    if (selectedAnswer === correctAnswer + 1) {
      // handle correct answer
      setShow(false);
      setShowFalseAnswer(false);
      handleClick();
      setSelectedAnswer(null);
    } else {
      // do nothing but show text indicating false answer submitted
      setShowFalseAnswer(true);
    }
  };

  const handleRadioChange = (e) => {
    setSelectedAnswer(parseInt(e.target.value));
  };

  // open modal and set question
  useEffect(() => {
    if (openModal) {
      setQuestion(returnRandomQuestion(modalQuestions));
      setShow(true);
    }
  }, [openModal, setShow, setQuestion, modalQuestions]);

  return (
    <Fragment>
      <Modal isOpen={show}>
        {question ? (
          <Fragment>
            <ModalHeader>
              {question.text}
            </ModalHeader>
            <ModalBody>
              <Form>
                {question?.answers?.map((answer, index) => (
                  <FormGroup check key={index}>
                    <Label check>
                      <Input
                        type="radio"
                        value={answer.value}
                        checked={answer.value === selectedAnswer}
                        onChange={handleRadioChange}
                      />
                      {answer.label}
                    </Label>
                  </FormGroup>
                ))}
                {showFalseAnswer && (
                  <FormText>
                    Wrong answer! You should brush up on your knowledge!
                  </FormText>
                )}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="confirm-action"
                onClick={() => handleConfirm(true)}
              >
                Submit
              </Button>
            </ModalFooter>
          </Fragment>
        ) : (
          " "
        )}
      </Modal>
    </Fragment>
  );
};

export default QuestionModal;
