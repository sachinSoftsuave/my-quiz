export const modes = ['HARD', 'MEDIUM', 'EASY'];

export const questions = [ 
  {
    questionText: "Commonly used data types DO NOT include:",
    options: [
      { id: "1", value: "strings" },
      { id: "2", value: "booleans" },
      { id: "3", value: "alerts" },
      { id: "4", value: "numbers" },
    ],
    answer: { id: "3", value: "alerts" },
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      { id: "1", value: "numbers and strings" },
      { id: "2", value: "other arrays" },
      { id: "3", value: "booleans" },
      { id: "4", value: "all of the above" },
    ],
    answer: { id: "4", value: "all of the above" },
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: [
      { id: "1", value: "commas" },
      { id: "2", value: " curly brackets" },
      { id: "3", value: "quotes" },
      { id: "4", value: "parentheses" },
    ],
    answer: { id: "3", value: "quotes" },
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      { id: "1", value: "JavaScript" },
      { id: "2", value: "terminal/bash" },
      { id: "3", value: "for loops" },
      { id: "4", value: "console.log" },
    ],
    answer: { id: "4", value: "console.log" },
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: [
      { id: "1", value: "break" },
      { id: "2", value: "stop" },
      { id: "3", value: "halt" },
      { id: "4", value: "exit" },
    ],
    answer: { id: "1", value: "break" },
  },
  {
    questionText:
       "In React.js which one of the following is used to create a class for Inheritance ?",
       options: [
        { id: "1", value: "Create" },
        { id: "2", value: "Extends" },
        { id: "3", value: "Inherits" },
        { id: "4", value: "Delete" },
      ],
      answer: { id: "2", value: "Extends" },
  },
  {
    questionText:
       "Which of the following is a way to handle data in React.js ?",
       options: [
        { id: "1", value: "State & Props" },
        { id: "2", value: "Services & Components" },
        { id: "3", value: "State & Services" },
        { id: "4", value: "State & Component" },
      ],
      answer: { id: "1", value: "State & Props" },
  },
  {
    questionText:
       "Which of the following is must for the API in React.js ?",
       options: [
        { id: "1", value: "SetinitialComponent" },
        { id: "2", value: "renderComponent" },
        { id: "3", value: "render" },
        { id: "4", value: "All of the above" },
      ],
      answer: { id: "2", value: "renderComponent" },
  },
  {
    questionText:
       "In React.js, how we can pass the data from one component to another in React.js ?",
       options: [
        { id: "1", value: "SetState" },
        { id: "2", value: "Render with arguments" },
        { id: "3", value: "Props" },
        { id: "4", value: "PropTypes" },
      ],
      answer: { id: "3", value: "Props" },
  },
  {
    questionText:
       "Which of the following function is true about changing the state in React.js ?",
       options: [
        { id: "1", value: "this.State{}" },
        { id: "2", value: "this.setState" },
        { id: "3", value: "this.setChangeState" },
        { id: "4", value: "All of the above" },
      ],
      answer: { id: "2", value: "this.setState" },
  },
  {
    questionText:
       "What is the correct command to create a new React project?",
       options: [
        { id: "1", value: "npx create-react-app appname" },
        { id: "2", value: "npm install create-react-app" },
        { id: "3", value: "npx install create-react-app -g" },
        { id: "4", value: "install - l create-react-app" },
      ],
      answer: { id: "1", value: "npx create-react-app appname" },
  },
  {
    questionText:
       "What is the default port number in which the application run ?",
       options: [
        { id: "1", value: "3000" },
        { id: "2", value: "8080" },
        { id: "3", value: "5000" },
        { id: "4", value: "3030" },
      ],
      answer: { id: "1", value: "3000" },
  },
  {
    questionText:
       "Which of the following valid component return type of React ?",
       options: [
        { id: "1", value: "2" },
        { id: "2", value: "5" },
        { id: "3", value: "1" },
        { id: "4", value: "3" },
      ],
      answer: { id: "3", value: "1" },
  },
  {
    questionText:
       "Which of the following method is true about referring parent class in React.js ?",
       options: [
        { id: "1", value: "self()"},
        { id: "2", value: "inherits()" },
        { id: "3", value: "this()" },
        { id: "4", value: "super()" },
      ],
      answer: { id: "4", value: "super()" },
  },
  {
    questionText:
       "React is mainly for building ...........",
       options: [
        { id: "1", value: "Database" },
        { id: "2", value: "Connectivity" },
        { id: "3", value: "Design platform" },
        { id: "4", value: "User interface" },
      ],
      answer: { id: "4", value: "User interface" },
  },
  {
    questionText:
       "Babel is a __________",
       options: [
        { id: "1", value: "interpreter" },
        { id: "2", value: "compiler" },
        { id: "3", value: "transpiler" },
        { id: "4", value: "Both b & c" },
      ],
      answer: { id: "4", value: "Both b & c" },
  },
  {
    questionText:
       "Webpack command act as a _____________",
       options: [
        { id: "1", value: "module bundler" },
        { id: "2", value: "transpiler to transpile all javascript into 1 file" },
        { id: "3", value: "runs local dev server" },
        { id: "4", value: "none" },
      ],
      answer: { id: "1", value: "module bundler" },
  },
  {
    questionText:
       "React Js is developed by",
       options: [
        { id: "1", value: "Google" },
        { id: "2", value: "Microsoft" },
        { id: "3", value: "Facebook" },
        { id: "4", value: "None of above" },
      ],
      answer: { id: "3", value: "Facebook" },
  },
  {
    questionText:
       "JSX is acronym for ",
       options: [
        { id: "1", value: "Java Server eXtension" },
        { id: "2", value: "JavaScript eXtension" },
        { id: "3", value: "Java Script Extender" },
        { id: "4", value: "None of above" },
      ],
      answer: { id: "2", value: "JavaScript eXtension" },
  },
  {
    questionText:
       "How many stages are there in React js life cycle",
       options: [
        { id: "1", value: "1" },
        { id: "2", value: "2" },
        { id: "3", value: "3" },
        { id: "4", value: "0" },
      ],
      answer: { id: "3", value: "3" },
  },
];
