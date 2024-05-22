import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
export default function NotFound() {
  return (
    <div className="  w-[100%] h-[500px]  flex flex-col items-center fle text-xl  justify-center ">
      <div className="text-center font-extrabold text-3xl  ">
        <h2 className="mb-5">404 || Not Found.</h2>
        <p>Could not find requested resource.</p>
      </div>
      <hr className="w-[100%] my-10"></hr>
      <div className="flex flex-row items-center  p-2 rounded-3xl bg-green-700 hover:cursor-pointer hover:bg-green-900">
        <WestIcon className="me-2"></WestIcon>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
