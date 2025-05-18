import React, { Component } from "react";

//Audio Component
export default class TmntAudio extends Component {
  render() {
    return (
      <div
        className="ui container"
        style={{ width: "30rem", textAlign: "center" }}
      >
        <iframe
          title="testing"
          allow="autoplay"
          id="audio"
          style={{ display: "none" }}
        ></iframe>
        {/* <AudioPlayer
          id="tmntAudio"
          src="img/tmnt/TMNT4Select.mp3"
          colors={{ sliderTrack: "black", slider: "green", timestamps: "red" }}
        /> */}
      </div>
    );
  }
}
