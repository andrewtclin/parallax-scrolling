import React from "react";
import { Parallax } from "react-parallax";
import "./App.css";

const image1 =
  "https://images.unsplash.com/photo-1599941634517-31390cacc03f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: "#fff",
  opacity: "0.7",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div className="typewriter" style={inlineStyle}>
            <h1>Hello Universe Tech. My name is Andrew.</h1>
            <small>Please Scroll Down for my Github Repo.</small>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={image2} blur={{ min: -3, max: 7 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "hover",
                fontWeight: "1000",
              }}
              href="https://github.com/andrewtclin/"
              target="_blank"
            >
              My Github Repo: Click Here
            </a>

            <br />

            <h4>The followings are my Personal Projects:</h4>
            <div className="gitRepo">
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "hover",
                  fontWeight: "500",
                }}
                href="clone-27359.web.app/"
                target="_blank"
              >
                1. Amazon Clone - Click Me
              </a>
              <br />
              <small>
                Uses ReactJS, ContextAPI, Hooks, Firebase, Stripe Payment
              </small>
              <br />
              <br />
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "hover",
                  fontWeight: "500",
                }}
                href="https://andrewtclin.github.io/spotify-clone/"
                target="_blank"
              >
                2. Spotify Clone - Click Me
              </a>
              <br />
              <small>Uses ReactJS, ContextAPI, Hooks, Material UI</small>
              <br />
              <br />
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "hover",
                  fontWeight: "500",
                }}
                href="https://crwn-essentials.herokuapp.com/"
                target="_blank"
              >
                3. E-Commerce Website With Google Sign-in - Click Me
              </a>
              <br />
              <small>
                Uses ReactJS, Redux (Thunk+Saga), Firebase, Stripe Payment
              </small>
              <br />
              <br />
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "hover",
                fontWeight: "1000",
              }}
              href="https://tclin-andrew.netlify.app/"
              target="_blank"
            >
              Click Here for my Website and Portfolio
            </a>
          </div>
        </div>
      </Parallax>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `rgba(255,123,23, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${percentage * 5})`,
            }}
          ></div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <strong
              style={{
                position: "relative",
                overflow: "hidden",
                filter: "brightness(200%)",
              }}
            >
              Thank you for taking time.
            </strong>
          </div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
