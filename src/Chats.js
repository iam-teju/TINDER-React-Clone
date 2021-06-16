import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Irina Shayk"
        message="Hey! how are you 😊"
        timestamp="20 minutes ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/54d/47e/abf97d3b9f09a58953b502453f2e77fe6a-11-irina-shayk.rsocial.w1200.jpg"
      />

      <Chat
        name="Rosie Huntington"
        message="Whats up ❤"
        timestamp="55 minutes ago"
        profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1146732462.jpg?crop=0.668xw:1.00xh;0.114xw,0&resize=480:*"
      />

      <Chat
        name="Alicia Vikander"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alicia_Vikander_-_Tokyo_International_Film_Festival_2019_%2849013506278%29_%28cropped%29.jpg/1200px-Alicia_Vikander_-_Tokyo_International_Film_Festival_2019_%2849013506278%29_%28cropped%29.jpg"
      />

      <Chat
        name="Elizabeth Debicki"
        message="Oops there he is...😍"
        timestamp="1 week ago"
        profilePic="https://resizing.flixster.com/s1GfGRPwMHLsFoJSIabtiD6jOoM=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/669281/669281_v9_bb.jpg"
      />
    </div>
  );
}

export default Chats;
