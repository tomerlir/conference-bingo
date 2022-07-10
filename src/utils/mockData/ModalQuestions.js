// simulate data from server
const ModalQuestion = [
  {
    text: "Which is the correct spelling?",
    answers: [
      { label: "JavaScript", value: 1, correct: true },
      { label: "Javascript", value: 2, correct: false },
      { label: "Java Script", value: 3, correct: false },
    ],
  },
  {
    text: "Who created JavaScript?",
    answers: [
      { label: "Douglas Crockford", value: 1, correct: false },
      { label: "Brendan Eich", value: 2, correct: true },
      { label: "John Resig", value: 3, correct: false },
    ],
  },
  {
    text: "What other names has JavaScript been released under?",
    answers: [
      { label: "Mocha", value: 1, correct: true },
      { label: "Latte", value: 2, correct: false },
      { label: "Caramel Macchiato", value: 3, correct: false },
    ],
  },
  {
    text: "NaN === NaN",
    answers: [
      { label: "true", value: 1, correct: false },
      { label: "false", value: 2, correct: true },
      { label: "Sounds like a tasty snack", value: 3, correct: false },
    ],
  },
  {
    text: "Which of the following keywords is used to define a variable?",
    answers: [
      { label: "var", value: 1, correct: false },
      { label: "let", value: 2, correct: false },
      { label: "Both of the above", value: 3, correct: true },
    ],
  },
  {
    text: "What keyword is used to check whether a given property is valid or not?",
    answers: [
      { label: "in", value: 1, correct: true },
      { label: "exists", value: 2, correct: false },
      { label: "is in", value: 3, correct: false },
    ],
  },
  {
    text: "What keyword is used to check whether a given property is valid or not?",
    answers: [
      { label: "in", value: 1, correct: true },
      { label: "exists", value: 2, correct: false },
      { label: "is in", value: 3, correct: false },
    ],
  },
  {
    text: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    answers: [
      { label: "Boolean", value: 1, correct: false },
      { label: "Undefined", value: 2, correct: false },
      { label: "Object", value: 3, correct: true },
    ],
  },
  {
    text: "What does the Javascript “debugger” statement do?",
    answers: [
      { label: "Debug all errors in the program", value: 1, correct: false },
      { label: "Acts as a breakpoint in a program", value: 2, correct: true },
      { label: "Debug error in current statement", value: 3, correct: false },
    ],
  },
  {
    text: "Which function is used to serialize an object into a JSON string in Javascript",
    answers: [
      { label: "stringify()", value: 1, correct: true },
      { label: "parse()", value: 2, correct: false },
      { label: "convert()", value: 3, correct: false },
    ],
  },
  {
    text: "'function' and 'var' are known as:",
    answers: [
      { label: "Keywords", value: 1, correct: false },
      { label: "Declarations", value: 2, correct: true },
      { label: "Prototypes", value: 3, correct: false },
    ],
  },
  {
    text: "Which of the following type of a variable is volatile?",
    answers: [
      { label: "Mutable variable", value: 1, correct: true },
      { label: "Dynamic variable", value: 2, correct: false },
      { label: "Immutable variable", value: 3, correct: false },
    ],
  },
  {
    text: "Which one of the following is an ternary operator:",
    answers: [
      { label: "?", value: 1, correct: true },
      { label: ":", value: 2, correct: false },
      { label: "-", value: 3, correct: false },
    ],
  },
];

export default ModalQuestion;
