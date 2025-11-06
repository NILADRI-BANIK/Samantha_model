import React from "react";
import Hero from "../component/Hero/Hero";
import Intro from "../component/Intro/intro";
import Studies from "../component/Studies/Studies";
import Recent from "../component/Recent/Recent";
import Message from "../component/Message/Message";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Studies />
      <Recent />
      <Message />
    </>
  );
}

export default Home;
