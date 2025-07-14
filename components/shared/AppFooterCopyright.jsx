import ContactCopyright from "../contact/ContactCopyright";
import logoLight from "../../public/images/logo-light.svg";
import logoDark from "../../public/images/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

function AppFooterCopyright() {
  return (
    <>
      <div className="font-general-regular flex justify-center items-center text-center flex">
        <div className="text-lg text-ternary-dark dark:text-ternary-light flex-center">
          <Link
            href="/"
            target="__blank"
            className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500 text-right flex-baseline"
          >
            WEBDEV 
          </Link>
          &nbsp;{new Date().getFullYear()}
          &nbsp;&copy;&nbsp;
          <a
            href="https://stoman.me"
            target="__blank"
            className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500 text-right flex-baseline"
          >
            STOMAN
          </a>
        </div>
      </div>
    </>
  );
}

export default AppFooterCopyright;
