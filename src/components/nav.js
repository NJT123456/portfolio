import config from "@/data/config";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";

export default function Nav() {
  const [currentSection, setCurrentSection] = useState("/#home");
  const [showLink, setShowLink] = useState(false);
  const navbar = useRef(null);

  // * scroll active of section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;

      if (scrollPosition >= offset && scrollPosition < offset + height) {
        setCurrentSection("/#" + sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // *menuIcon
  const menuIcon = () => {
    setShowLink(!showLink);
    navbar.current.classList.toggle("active");
  };

  // *close the menu when a link is clicked
  const closeMenuIcon = () => {
    setShowLink(false);
    navbar.current.classList.remove("active");
  };

  const handleLinkClick = (sectionId) => {
    sectionId = sectionId.replace(/^\/+/g, "");
    $("html, body").animate(
      {
        scrollTop: $(sectionId).offset().top,
      },
      1000 // Adjust the duration as needed for your desired scrolling speed
    );
  };

  return (
    <header className="header">
      <Link
        href="/#home"
        className="logo"
        onClick={() => {
          handleLinkClick("/#home");
          closeMenuIcon();
        }}>
        Portfolio
      </Link>

      <div
        className={`navbar__toggle md:hidden cursor-pointer ${
          showLink ? "is-active" : ""
        }`}
        id="bar"
        onClick={menuIcon}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className="navbar" ref={navbar}>
        {config.navLinks.map((link, idx) => (
          <Link
            href={link.url}
            key={idx}
            className={currentSection === link.url ? "active" : ""}
            onClick={() => {
              handleLinkClick(link.url);
              closeMenuIcon();
            }}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
