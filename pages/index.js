import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>GOOGLE | BY TIIRTH</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <a href="https://about.google/">
            <p className="link">About</p>
          </a>
          <a href="https://store.google.com/in/?hl=en-GB">
            <p className="link">Store</p>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://gmail.com">
            <p className="link">Gmail</p>
          </a>
          <a href="https://www.google.co.in/imghp?hl=en-GB&tab=ri&authuser=0&ogbl">
            <p className="link">Images</p>
          </a>
          <a href="https://workspace.google.com/">
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          </a>
          <a href="https://accounts.google.com">
            <Avatar url="https://tiirth-deora-com.vercel.app/logo.png" />
          </a>
        </div>
      </header>

      <form className="flex flex-col items-center pt-20 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
          className="cursor-pointer"
          alt=""
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
         max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
         sm:max-w-xl
         lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500 cursor-pointer" />
          <input
            ref={searchInputRef}
            className="focus:outline-none flex-grow px-2"
            type="text"
          />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="button">
            Google Search
          </button>
          <button onClick={search} className="button">
            I&#39;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
