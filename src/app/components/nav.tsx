import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import config from "@/app/data/data";

const Nav = () => {
  const [currentSection, setCurrentSection] = useState<string>("/#home");
  const [showLink, setShowLink] = useState<boolean>(false);
  const navbar = useRef<HTMLDivElement>(null);

  // scroll active of section
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

  // menuIcon
  const menuIcon = () => {
    setShowLink(!showLink);
    navbar.current?.classList.toggle("active");
  };

  // close the menu when a link is clicked
  const closeMenuIcon = () => {
    setShowLink(false);
    navbar.current?.classList.remove("active");
  };

  const handleLinkClick = (sectionId: string) => {
    sectionId = sectionId.replace(/^\/+/g, "");
    $("html,body").animate({
      scrollTop: $(sectionId).offset()?.top,
    });
  };

  return (
    <header className="header">
      <Link
        href="/#home"
        className="logo"
        onClick={() => {
          handleLinkClick("/#home");
          closeMenuIcon();
        }}
      >
        Portfolio
      </Link>

      <div
        className={`navbar__toggle md:hidden cursor-pointer ${
          showLink ? "is-active" : ""
        }`}
        id="bar"
        onClick={menuIcon}
      >
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
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
