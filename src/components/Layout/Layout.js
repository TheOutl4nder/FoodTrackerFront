import React from "react";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation></MainNavigation>
      <div>{props.children}</div>
    </>
  );
}
