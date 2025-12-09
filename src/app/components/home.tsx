import React from "react";
import Link from "next/link";
import config from "@/app/data/data";

const Homepage = () => {
  const pdf_url =
    "https://njt123456.github.io/portfolio/files/QA_Resume_Jinjutha.pdf";

  const downLoad = () => {
    fetch(pdf_url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob); // ใช้ blob ตรง ๆ
        const fileName = "QA_Resume_Jinjutha.pdf";
        const link = document.createElement("a");
        link.href = blobURL;
        link.download = fileName;
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
          And I&apos;m a <span className="text">Software Tester</span>
        </h3>
        <p>
          Experienced QA tester specializing in web applications, automated
          testing, and Android applications. Proficient in developing,
          maintaining, and executing automated tests using Cypress and Robot
          Framework
        </p>
        <div className="social-media">
          {config.socialMedia.map((link, idx) => (
            <Link href={link.url} key={idx} target="_blank">
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
};

export default Homepage;
