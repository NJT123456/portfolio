import React from "react";
import config from "@/data/config";
import Link from "next/link";

export default function Homepage() {
  const pdf_url =
    "http://localhost:3000/Resume_Jinjutha.pdf" ||
    "https://njt123456.github.io/portfolio/Resume_Jinjutha.pdf";
  const downLoad = () => {
    fetch(pdf_url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = pdf_url.split("/").pop();
        const link = document.createElement("a");
        link.href = blobURL;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h3>Hello, My name is</h3>
        <h1>Jinjutha Thapanapoompong</h1>
        <h3>
          And I'm a <span className="text"></span>
        </h3>
        <p>
          Fresh Computer Engineering graduate student with intership experience
          in Web Developer and Test automation using Robot Framework. I'm
          looking for a Web Developer, Mobile Developer and Tester role to apply
          and enhance my skills.
        </p>
        <div className="social-media">
          {config.socialMedia.map((link, idx) => (
            <Link href={link.url} key={idx}>
              <i className={`fa fa-${link.name}`} />
            </Link>
          ))}
        </div>

        <a target="_blank" onClick={downLoad} className="btn">
          Download CV
        </a>
      </div>
    </section>
  );
}
