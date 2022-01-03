import React from "react";

export default function HikeGPS() {
  return (
    <div className="ui column">
      <h1>Google Maps will go here</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.147133743264!2d-93.23837038481076!3d36.86289687186768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf0da12ca8a9a3%3A0x74c5d4e47ac97d3f!2sBusiek%20State%20Forest%20and%20Wildlife%20Area!5e0!3m2!1sen!2sus!4v1641234844396!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
