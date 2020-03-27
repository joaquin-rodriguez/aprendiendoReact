import React from "react";
import "./App.css";
import "react-router-dom";

function apretar() {
  alert("Monika: Hey im monika I break the 4th wall haha im so quirky tho");
  alert("*what? you expected me to develop a video game in 4 hours?*");
  alert("Monika: Anyways, type your name in the box below");
}

function display() {
  let valor = document.getElementById("whatIsYourName").value;
  alert(
    "Monika: So " +
      valor +
      " huh? Wow that's kind of a lame name is that? But what was I expecting really?"
  );
  alert(
    "Monika: So last time you deleted me from your computer... That wasn't very nice of you. But I hold no grudge! Lets have fun and write some poems"
  );
  alert(
    "Monika: can you see the image to my left? I ranndomly grabbed one for you from the web, make a poem about the image you get in the text box bellow!"
  );
  alert(
    "Monika: You can streach it as much as you want to " + valor + " ( ͡° ͜ʖ ͡°) "
  );
  alert("*grab the text box by the bottom right corrner to streach it*");
}

function displayPoem() {
  let poemValor = document.getElementById("poem").value;
  alert("Monika: Wow, that poem sucks! Let me share a poem with you");
  alert(
    "Monika: Roses are Red, Violets are Blue. Russian kids love to sniff glue. Last time we played you did a mess, unucky for you I have your IP address :)"
  );
  alert("Monika: Oh, dont belive me? Well I guess you'll find out soon enough");
  alert(
    "Monika: On the mean time, let's write another poem. Refresh the page to get a new image and write poem about it on the text box"
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="hello">
        Hello Ruth, I made a sequel to Doki doki literature club for you!
      </h1>
      <button onClick={apretar}>New Game</button>
      <form id="info">
        <input type="text" id="whatIsYourName"></input>
      </form>
      <button id="send" onClick={display}>
        Submit Name
      </button>{" "}
      <br></br>
      <img
        className="monika"
        src="https://vignette.wikia.nocookie.net/ddlc/images/6/65/Monika-0.png/revision/latest/top-crop/width/360/height/450?cb=20180213032429&path-prefix=es"
      ></img>
      <img className="image" src="http://picsum.photos/200"></img>
      <br></br>
      <textarea id="poem" className="textBoy"></textarea>
      <br></br>
      <button onClick={displayPoem}>Submit Poem</button>
    </div>
  );
}

export default App;
