import React, { Component } from "react";

//Helper scroll to top component - > Credit to https://codesandbox.io/s/scroll-to-top-react-component-coderomeos-sep3f?from-embed=&file=/src/ScrollToTop.js
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <i class="mountain icon large" style={{color: "black"}}></i>
          </div>
        )}
      </div>
    );
  }
}
