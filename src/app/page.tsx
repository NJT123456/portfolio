"use client";
import { useState, useEffect } from "react";
import Nav from "./components/nav";
import Homepage from "./components/home";

export default function Home() {
  return (
    <>
      <Nav />
      <Homepage />
    </>
  );
}
