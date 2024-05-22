import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const About = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-5xl mb-8 font-bold">About me</h1>
      <h1 className="text-2xl mb-4 font-semibold">Links</h1>
      <div className="space-x-10 mb-10 ">
        <Link href="">
          <FacebookIcon color="primary" fontSize="large"></FacebookIcon>
        </Link>
        <Link href="">
          <InstagramIcon color="warning" fontSize="large"></InstagramIcon>
        </Link>
        <Link href="">
          <GitHubIcon fontSize="large"></GitHubIcon>
        </Link>
        <Link href="">
          <LinkedInIcon color="primary" fontSize="large"></LinkedInIcon>
        </Link>
      </div>
      <>
        <h1 className="text-2xl mb-4 font-semibold ">Bio</h1>
        <p className="text-lg mb-10">
          I am Arun Dhungana,a Bsc.CSIT student from Nepal,with a passion for
          web development.
          <br></br>
          <br></br>
          My ambition is to evolve into a full-stack developer, adept at both
          front-end and back-end development, enabling me to craft powerful and
          versatile web applications.{" "}
        </p>
        <h1 className="text-2xl mb-4 font-semibold">Education</h1>
        <p className="mb-6 text-lg text-gray-600">
          <span className="font-medium text-black  dark:text-white">
            School :
          </span>
          <br></br>
          Little Stars Academy
          <br></br>(2005-2018)
        </p>

        <p className="mb-6 text-lg  text-gray-600">
          <span className="font-medium  text-black dark:text-white">
            High School :
          </span>
          <br></br>Science<br></br>Trinity Internaonal Secondary School
          <br></br>
          (2018-2020)
        </p>
        <p className="mb-6 text-lg  text-gray-600">
          <span className="font-medium text-black  dark:text-white">
            {" "}
            Undergraduate :
          </span>
          <br></br>Bsc.CSIT<br></br> Patan Multiple Campus <br></br>
          (2021-present)😃
        </p>
      </>
    </div>
  );
};

export default About;
