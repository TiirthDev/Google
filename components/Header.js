import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
          alt=""
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5 items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            value={router.query.term}
            type="text"
            ref={searchInputRef}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3 
                transition-duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer 
                border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer " />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://cv-one-rho.vercel.app/logo.png"
        />
      </div>
    </header>
  );
}

export default Header;
