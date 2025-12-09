"use client";
import Nav from "./components/nav";
import Homepage from "./components/home";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <Homepage />
      <Projects />
    </>
  );
}
