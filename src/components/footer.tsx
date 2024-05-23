import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DownloadIcon from "@mui/icons-material/Download";
const Footer = () => {
  return (
    <footer className="mt-auto ">
      <hr className=" w-full border-gray-200 border-[2px] my-5"></hr>
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-evenly text-gray-600 ">
        <div className=" flex flex-col justify-center space-y-4">
          <span className="hover:text-blue-700 ">
            <DownloadIcon fontSize="large" className="pe-2"></DownloadIcon>
            <Link href="/cv.pdf" download="arun's CV" target="_blank">
              <button type="button" className="">
                Download CV
              </button>
            </Link>
          </span>
          <Link
            title="Send Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=a.d.since03@gmail.com"
            target="_blank"
            className="hover:text-green-200"
          >
            <AttachEmailIcon
              fontSize="large"
              className="pe-2"
            ></AttachEmailIcon>
            Send Email
          </Link>
        </div>
        <hr className="block md:hidden"></hr>

        <hr className="block md:hidden"></hr>
        <div className="flex flex-col space-y-4">
          <Link
            href="/guestbook"
            className="hover:text-gray-800 dark:hover:text-gray-300"
          >
            Guestbook
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-800  dark:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-800  dark:hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            href="/Snippets"
            className="hover:text-gray-800  dark:hover:text-gray-300"
          >
            Snippets
          </Link>
        </div>
        <hr className="block md:hidden"></hr>

        <hr className="block md:hidden"></hr>
        <div className="flex flex-col justify-center space-y-4">
          <Link
            href="https://github.com/Arun-Dhungana"
            className="hover:text-gray-800 dark:hover:text-gray-100"
          >
            <span className="flex items-center ">
              Github<GitHubIcon fontSize="small"></GitHubIcon>
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/arun-dhungana-151047229/"
            className="hover:text-blue-400"
          >
            <span className="flex items-center ">
              Linkedin
              <LinkedInIcon fontSize="small"></LinkedInIcon>
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100036034421587"
            className="hover:text-blue-800"
          >
            <span className="flex items-center ">
              Facebook<FacebookIcon fontSize="small"></FacebookIcon>
            </span>
          </Link>
          <Link
            href="https://www.instagram.com/_arundhungana/"
            className="hover:text-pink-800"
          >
            <span className="flex items-center ">
              Instagram<InstagramIcon fontSize="small"></InstagramIcon>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
