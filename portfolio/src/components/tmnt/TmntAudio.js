import React, { Component } from 'react';
import AudioPlayer from 'react-audio-element';

//Audio Component
export default class TmntAudio extends Component {
    render() {
        return (
            <div className="ui container" style={{width: "30rem", textAlign: "center"}}>
                <iframe src="" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
                <AudioPlayer id="tmntAudio"
                    src="img/tmnt/TMNT4Select.mp3"
                    colors={{ sliderTrack: "black", slider: "green", timestamps: "red"}}/>
            </div>
 
        )
    }
}