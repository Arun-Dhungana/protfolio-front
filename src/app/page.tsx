import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
export default function Home() {
  return (
    <main className="p-5 flex flex-col mx-auto mt-10 w-[100%] ">
      <section>
        <div className="flex md:flex-row-reverse justify-center flex-col mb-12 md:mb-32 ">
          <div>
            <Image
              className=" block object-cover rounded-[50%] aspect-square col-start-4 col-span-1 mb-5 md:mb-0"
              src="/profile.jpeg"
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <div className=" pe-5  flex flex-col justify-center">
            <h1 className="font-extrabold text-4xl">Arun Dhungana</h1>
            <p className="text-xl ">Web Developer</p>
            <br></br>
            <br />
            <p className="overflow-ellipsis">
              I am Arun Dhungana,a Bsc.CSIT student from Nepal,with a passion
              for <span className="hidden lg:block"></span>
              web development.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="flex flex-col mb-10">
          <p className="  font-semibold text-2xl ">Projects</p>

          <div className="flex flex-col md:flex-row border border-l-gray-700 p-3 my-5 items-center bg-slate-300 hover:bg-slate-400 justify-between dark:bg-slate-800 dark:hover:bg-slate-700">
            <h4 className="mb-5 md:mb-0 font-bold ">Protfolio website</h4>
            <p className="md:mx-3 mb-5 md:mb-0">
              Protfolio website made using nextjs,mysql and express.
            </p>
            <div className="flex gap-4 ">
              <Link href="https://jobhub-nu.vercel.app/" target="_blank">
                <HomeOutlinedIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-blue-600"
                ></HomeOutlinedIcon>
              </Link>
              <Link href="https://jobhub-nu.vercel.app/ " target="_blank">
                <GitHubIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-[#8D6346]"
                ></GitHubIcon>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border border-l-gray-700 p-3 my-5 items-center bg-slate-300 hover:bg-slate-400 justify-between dark:bg-slate-800 dark:hover:bg-slate-700">
            <h4 className="mb-5 md:mb-0 font-bold ">Protfolio website</h4>
            <p className="md:mx-3 mb-5 md:mb-0">
              Protfolio website made using nextjs,mysql and express.
            </p>
            <div className="flex gap-4 ">
              <Link href="https://jobhub-nu.vercel.app/" target="_blank">
                <HomeOutlinedIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-blue-600"
                ></HomeOutlinedIcon>
              </Link>
              <Link href="https://jobhub-nu.vercel.app/ " target="_blank">
                <GitHubIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-[#8D6346]"
                ></GitHubIcon>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row border border-l-gray-700 p-3 my-5 items-center bg-slate-300 hover:bg-slate-400 justify-between dark:bg-slate-800 dark:hover:bg-slate-700 ">
            <h4 className="mb-5 md:mb-0 font-bold ">Job Portal</h4>
            <p className="md:mx-3 mb-5 md:mb-0">
              Job portal made using MERN stack,so it takes some time to
              <span className="hidden md:block"></span> render jobs.
            </p>
            <div className="flex gap-4 ">
              <Link href="https://jobhub-nu.vercel.app/" target="_blank">
                <HomeOutlinedIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-blue-600"
                ></HomeOutlinedIcon>
              </Link>
              <Link href="https://jobhub-nu.vercel.app/ " target="_blank">
                <GitHubIcon
                  fontSize="large"
                  className="hover:cursor-pointer hover:text-[#8D6346]"
                ></GitHubIcon>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <h1 className=" font-semibold text-2xl mb-4">Experience</h1>
        <span className="w-36 h-32 md:h-56 md:w-60">
          <iframe
            src="https://www.youtube-nocookie.com/embed/lBkfdN73Lu8?si=d2fmhHQa9DS9fpv_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-presentation"
            style={{
              width: "100%",
              height: "315px",
            }}
          ></iframe>
        </span>
      </section>
    </main>
  );
}
