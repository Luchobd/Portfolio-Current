export interface PropsExperiences {
  mainInfo: string;
  company: string;
  title: string;
  subtitle: string;
  description: string;
  experiencesDate: ExperiencesInfo[];
}

export interface ExperiencesInfo {
  date: number;
  numberDot: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string;
}

export const experiences: PropsExperiences = {
  mainInfo: "Experience",
  company: "ITGlobers from 2022...",
  title: "Software Developer",
  subtitle: "Consulting",
  description:
    "ITGlobers is a leading company in technological solutions that specializes in custom software development, IT consulting, and digital transformation services. Its mission is to help businesses optimize their processes and improve their competitiveness in the market. Currently, I am part of the ITGlobers team as a developer. In this position, I work closely with talented professional groups to design and develop technological solutions that meet the specific needs of our clients. In summary, at ITGlobers, I have the opportunity to grow professionally while contributing to the development of solutions that positively impact our clients and the market.",
  experiencesDate: [
    {
      date: 2024,
      numberDot: 4,
      title: "Developer Web and Mobile",
      subtitle: "Cencosud",
      description:
        "I participate in the maintenance and improvement of the web platforms and in the refactoring of the mobile applications for Cencosud stores, working as a developer in both areas. My work includes optimizing the code, improving the efficiency and structure of the applications to ensure their performance and scalability. Additionally, I focus on implementing new functionalities, making UI/UX interface adjustments, and fixing bugs, ensuring a smooth user experience aligned with the company's business needs. Thanks to my work, the platforms have remained up-to-date and in line with business objectives.",
      technologies:
        "HTML, CSS, JavaScript, TypeScript, React, React Native, VTEX IO, Git, Scrum.",
    },
    {
      date: 2023,
      numberDot: 3,
      title: "Developer Web VTEX IO",
      subtitle: "BoxTool",
      description:
        "I participated in the initiation of the creation of the Boxtool MX website as a frontend developer. I collaborated closely with the design and development team to build a functional and attractive platform focused on user experience. I was responsible for implementing interactive interfaces using frontend technologies, ensuring smooth navigation and a responsive design adapted to different devices.",
      technologies: "HTML, CSS, VTEX IO, Git, Scrum.",
    },
    {
      date: 2023,
      numberDot: 2,
      title: "Developer Web",
      subtitle: "Group Elektra and Italika",
      description:
        "I collaborated as a frontend developer in the maintenance and customization of the web platforms for Elektra and Italika. During my time on these projects, I worked on implementing adjustments and improvements requested by the client, following the guidelines of the work team. Ensuring that the platforms maintained their performance and adaptability.",
      technologies:
        "HTML, CSS, JavaScript, TypeScript, React, VTEX IO, Git, Scrum.",
    },
    {
      date: 2022,
      numberDot: 1,
      title: "Frontend VTEX IO",
      subtitle: "Daviplata Marketplace",
      description:
        "I participated in the creation of the marketplace application for Daviplata, working as a Frontend Developer. I collaborated with a multidisciplinary team to develop an efficient and user-friendly platform that allows users to make online purchases with their Daviplata accounts. I was responsible for implementing user interfaces that offered a clear and seamless experience. To manage the logic, functionality, and client-side information, I worked on the VTEX APIs integrated into the marketplace. I contributed to the successful delivery of the application within the scheduled time frame, meeting the requirements of the end user.",
      technologies:
        "HTML, CSS, JavaScript, TypeScript, React, React Native, VTEX IO, Git, Scrum.",
    },
  ],
};
