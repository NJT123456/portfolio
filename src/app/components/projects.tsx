import config from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
export const Projects = () => {
  return (
    <section id="project" className="project">
      <h2 className="heading">Projects</h2>

      {config.projects.map((pro, idx) => (
        <div key={idx}>
          <div key={`nameProject-${idx}`} className="nameProject">
            {pro.nameProject}
          </div>
          <div className="project-container">
            {pro.Project.map((proj, id) => (
              <div className="project-box-img project-box" key={id}>
                {proj.img ? (
                  <>
                    <Image
                      src={`${proj.img}`}
                      alt=""
                      fill
                      className="static!"
                    />
                    <div className="project-layer">
                      <h4>{proj.name}</h4>
                      <p className="line-clamp-3">{proj.desc}</p>
                      <Link href={`${proj.url}`} target="_blank">
                        <i className="fa fa-external-link"></i>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-box project-box-no-img">
                      <h4>{proj.name}</h4>
                      <p>{proj.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
