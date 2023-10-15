import React from "react";
import config from "@/data/config";
import Link from "next/link";

export default function Project() {
  return (
    <section id="project" className="project">
      <h2 className="heading">Project</h2>

      {config.projects.map((pro, idx) => (
        <div key={idx}>
          <div key={`nameProject-${idx}`} className="nameProject">{pro.nameProject}</div>
          <div className="project-container">
            {pro.Project.map((proj, id) => (
              <div className="project-box" key={id}>
                <img src={`${proj.img}`} alt="" />
                <div className="project-layer">
                  <h4>{proj.name}</h4>
                  <p>{proj.desc}</p>
                  <Link href={`${proj.url}`} target="_blank">
                    <i className="fa fa-external-link"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
