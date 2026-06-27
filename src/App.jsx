import { useState } from "react";
import Header from "./header_component";
//1import MyHeader from "./my_header";
import "./App.css";
import PostComponent from "./post_component";
import TagButton from "./tag_button_component";
import MyHeader from "./my_header";

import SideMenu from "./side_menu";

function App() {
  // 1. Outer wrapper centers everything on the screen
  const mainWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    //width: "60%",
    // padding: "30px 20px",
    // boxSizing: "border-box",
    // gap: "30px",
  };

  return (
    <>
      {/* <Header /> */}
      <MyHeader />
      <main style={mainWrapperStyle}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <PostComponent title="20 " body="body one">
              <p>بوست من الابن </p>
            </PostComponent>
            <PostComponent
              title="Hello World"
              body="This is hello world post"
            />
            <PostComponent
              title="title three"
              body="body three"
            ></PostComponent>
            <PostComponent />
          </div>
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
