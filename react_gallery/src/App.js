import React from "react";
import "./assets/css/style.css";
import Images from "../src/components/images";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Hello React 2!!", isShowing: false };
  }

  handleClick = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <button
              className="p-10 bg-blue-700 rounded-md text-white my-2"
              onClick={this.handleClick}
            >
              Toggle Image
            </button>
          </div>
          {this.state.isShowing ? <Images /> : null}
        </div>
      </section>
    );
  }
}

// function App({ title }) {
//   return <div className="bg-gray-600 text-white p-10">{title}</div>;
// }

export default App;
