import Nav from "@/components/nav";
import Homepage from "@/components/home";
import Project from "@/components/Project";

import { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default({
        reset: true,
        distance: "80px",
        duration: 2000,
        delay: 200,
      });
      sr.reveal(".home-content, .heading", { origin: "top" });
      sr.reveal(".project-box, .contact form", { origin: "bottom" });
    });


    const typed = new Typed('.text', {
      strings: ["Software Tester.", "Frontend Developer."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <>
      <Nav />
      <Homepage />
      <Project />
    </>
  );
}
