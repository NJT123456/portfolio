// data/portfolio.ts
import type { Portfolio } from "@/types/data";

const portfolio: Portfolio = {
  email: "jinjutha.namnjt@gmail.com",

  socialMedia: [
    { name: "github", url: "https://github.com/NJT123456" },
    { name: "linkedin", url: "www.linkedin.com/in/jinjutha-njt" },
  ],

  navLinks: [
    { name: "Home", url: "/#home" },
    { name: "Project", url: "/#project" },
  ],

  projects: [
    {
      nameProject: "Testing",
      Project: [
        {
          name: "Test Web Application for Cloud Cover Estimation and Nowcasting",
          url: "https://github.com/NJT123456/test_senior_project",
          desc: "Test the system with Robot Framework that used the SeleniumLibrary library for testing.",
          img: "./picture/cc.jpg",
        },
        {
          name: "Test Swag Labs from SauceDemo.com",
          url: "https://github.com/NJT123456/test-for-https-www.saucedemo.com-",
          desc: "Test the system with Robot Framework that used the SeleniumLibrary library for testing.",
          img: "./picture/sauce.jpg",
        },
        {
          name: "Test Web Application for React-SKYAIRs",
          url: "https://github.com/NJT123456/React-SKYAIRs",
          desc: "Test the system with Robot Framework that used the SeleniumLibrary and OperatingSystem library for testing",
          img: "./picture/React-Skyairs.jpg",
        },
      ],
    },
    {
      nameProject: "Web Application",
      Project: [
        {
          name: "Fight reservation system",
          url: "https://github.com/NJT123456/SKYAIRs",
          desc: "Design business logic and UI for frontend using Django framework and PostgresSQL",
          img: "./picture/Skyairs.jpg",
        },
        {
          name: "Real-time chat web application",
          url: "https://github.com/NJT123456/webchat_channel",
          desc: "Design business logic and UI for frontend using Django framework and PostgresSQL, Redis and WebSocket.",
          img: "./picture/Chat-web.jpg",
        },
        {
          name: "React-SKYAIRs",
          url: "https://github.com/NJT123456/React-SKYAIRs",
          desc: "MySQL, Node.js, and Next.js are the tools used to develop the new fight booking system project.",
          img: "./picture/React-Skyairs.jpg",
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
          img: "./picture/cc.jpg",
        },
      ],
    },
  ],
};

export default portfolio;
