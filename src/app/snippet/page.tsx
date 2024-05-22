import Link from "next/link";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
const Snippet = () => {
  return (
    <div className=" items-center p-2">
      <div className="flex flex-col items-center text-start">
        <h1 className="text-5xl font-semibold mb-10 ">Code Snippets</h1>
        <p className="text-start  mb-10 text-xl">
          These are few random code snippets i have made and used in past .
        </p>
      </div>
      <div className="grid grid-cols-4  gap-4  ">
        <div className="  border border-slate-400 col-span-4 md:col-start-2 md:col-span-2 lg:col-start-1  lg:col-span-2 rounded-lg p-3 pt-1">
          <Link href="snippet/button">
            <SmartButtonIcon fontSize="large"></SmartButtonIcon>
            <p className="text-lg">Button component.</p>
            <p>A multi-purpose component </p>
          </Link>
        </div>
        <div className=" border  border-slate-400 col-span-4  md:col-start-2 md:col-span-2  lg:col-span-2  rounded-lg p-3 pt-1">
          <Link href="snippet/button">
            <SmartButtonIcon fontSize="large"></SmartButtonIcon>
            <p className="text-lg">Button component.</p>
            <p>A multi-purposecomponent </p>
          </Link>
        </div>
        <div className=" border  border-slate-400 col-span-4 md:col-start-2 md:col-span-2  rounded-lg p-3 pt-1">
          <Link href="snippet/button">
            <SmartButtonIcon fontSize="large"></SmartButtonIcon>
            <p className="text-lg">Button component.</p>
            <p>A multi-purposecomponent </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Snippet;
