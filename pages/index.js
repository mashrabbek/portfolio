import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const Form = dynamic(() => import("../containers/Form"));
import { ToastContainer } from "react-nextjs-toast";

const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Mashrabbek Akbarov",
          description: "A passionate Full Stack Web Developer",
          image:
            "https://avatars.githubusercontent.com/u/28649999?s=400&u=48924129d7aa215e648d4a925a67d44d7fb3e30e&v=4",
          url: "https://mashrabbek.com",
          keywords: [
            "Mashrabbek",
            "Mashrabbek Akbarovr",
            "Portfolio",
            "Mashrabbek Portfolio ",
            "Mashrabbek Akbarov Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      {/* <Projects /> */}
      <Form />
      <GithubProfileCard prof={githubProfileData} />
      <ToastContainer align={"right"} position={"bottom"} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
