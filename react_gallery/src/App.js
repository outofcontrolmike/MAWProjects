import React from "react";
import "./assets/css/styles.css";

function App() {
  return <div className="box">Hello from functional component</div>;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "Hello React from the state" };
//   }

//   render() {
//     let el = <div>{this.state.title}</div>;
//     return el;
//   }
// }

export default App;
