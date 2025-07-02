import React from "react";
// To import video files, you need a file loader in your build setup (e.g., Webpack's file-loader or asset modules).
// If using Create React App, this should work out of the box.
// Otherwise, ensure your bundler is configured to handle media files.

const OurStory = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <h1 style={{ fontFamily: "Open Sans", fontSize: 64, fontStyle: "normal", fontWeight: 700, lineHeight: "normal", color: "#FFF" }}>
                    <span style={{ color: "#FFF" }}>Our</span>
                    <span style={{ color: "#D7FF75" }}> Story</span>
                </h1>
            </div>
            <div
                style={{
                    position: "relative",
                    zIndex: 0,
                    marginTop: "32px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: "16px", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
                ></iframe>
            </div>
        </div>
    );
};

export default OurStory;