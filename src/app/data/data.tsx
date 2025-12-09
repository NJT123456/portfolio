// data/portfolio.ts
import type { Portfolio } from "@/types/data";

const portfolio: Portfolio = {
  email: "jinjutha.namnjt@gmail.com",

  socialMedia: [
    { name: "github", url: "https://github.com/NJT123456" },
    { name: "linkedin", url: "https://www.linkedin.com/in/jinjutha-njt/" },
  ],

  navLinks: [
    { name: "Home", url: "/#home" },
    { name: "Projects", url: "/#project" },
  ],

  projects: [
    {
      nameProject: "Company Testing Projects",
      Project: [
        {
          name: "Keyspace Web Application",
          desc: "Conducted manual and automated testing with Cypress, increasing regression coverage and reducing repetitive manual effort",
        },
        {
          name: "Smart Lockers Application",
          desc: "Executed manual functional and usability testing, ensuring secure locker assignment and smooth user experience",
        },
        {
          name: "Meeting Room Booking Application",
          desc: "Performed manual testing to verify reservation workflows, conflict detection, and system stability",
        },
      ],
    },
    {
      nameProject: "Academic & Personal Testing Projects",
      Project: [
        {
          name: "Cloud Cover Estimation & Nowcasting Web",
          url: "https://github.com/NJT123456/test_senior_project",
          desc: "Automated testing with Robot Framework using SeleniumLibrary, validating data accuracy and UI workflows",
          img: "picture/cc.jpg",
        },
        {
          name: "Swag Labs (SauceDemo.com)",
          url: "https://github.com/NJT123456/test-for-https-www.saucedemo.com-",
          desc: "Automated functional and regression testing with Robot Framework and SeleniumLibrary",
          img: "picture/sauce.jpg",
        },
        {
          name: "React-SKYAIRs Web Application",
          url: "https://github.com/NJT123456/React-SKYAIRs",
          desc: "Automated testing with Robot Framework using SeleniumLibrary and OperatingSystem library, ensuring system reliability across environments",
          img: "picture/React-Skyairs.jpg",
        },
      ],
    },

    {
      nameProject: "Web Applications",
      Project: [
        {
          name: "Fight reservation system",
          url: "https://github.com/NJT123456/SKYAIRs",
          desc: "Design business logic and UI for frontend using Django framework and PostgresSQL",
          img: "picture/Skyairs.jpg",
        },
        {
          name: "Real-time chat web application",
          url: "https://github.com/NJT123456/webchat_channel",
          desc: "Design business logic and UI for frontend using Django framework and PostgresSQL, Redis and WebSocket.",
          img: "picture/Chat-web.jpg",
        },
        {
          name: "React-SKYAIRs",
          url: "https://github.com/NJT123456/React-SKYAIRs",
          desc: "MySQL, Node.js, and Next.js are the tools used to develop the new fight booking system project.",
          img: "picture/React-Skyairs.jpg",
        },
      ],
    },
    {
      nameProject: "Machine Learning",
      Project: [
        {
          name: "Predict Cloud Cover Nowcasting",
          url: "https://github.com/NJT123456/senior_project_cc",
          desc: "Predicting Cloud Cover Nowcasting with Prophet and LSTM model to predict cloud cover from data and compared their results. Design web application to deploy model using Django framework (Senior Project).",
          img: "picture/cc.jpg",
        },
      ],
    },
  ],
};

export default portfolio;
