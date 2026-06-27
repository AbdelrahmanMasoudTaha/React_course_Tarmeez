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
            <PostComponent title="title " body="body one">
              <p>this is a test for children </p>
            </PostComponent>
            <PostComponent title="title two" body="body two" />
            <PostComponent title="title three" body="body three" />
            <PostComponent title="title four" body="body four" />
            <PostComponent title="title five" body="body five" />
            <PostComponent title="title six" body="body six" />
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
