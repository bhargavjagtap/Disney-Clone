import Image from 'next/image'
import React from 'react'
import {HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon,} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  return (
    //   sticky header 
    <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
        <Image className="cursor-pointer" src="/images/logo.svg" height={80} width={80} onClick={() => router.push("/")}/>
        {/* hidden on mobile screen space of 6 between each link */}
        {session && (
            <div className="hidden md:flex items-center space-x-6 ml-10">
                <a className="header-link group" href="/">
                    <HomeIcon className="h-4 "/>
                    <span className="span">Home</span>
                </a>
                <a className="header-link group" href="/">
                    <SearchIcon className="h-4 "/>
                    <span className="span">Search</span>
                </a>
                <a className="header-link group" href="/">
                    <PlusIcon className="h-4 "/>
                    <span className="span">Watchlist</span>
                </a>
                <a className="header-link group" href="/">
                    <StarIcon className="h-4 "/>
                    <span className="span">Originals</span>
                </a>
                <a className="header-link group" href="/">
                    <img src="/images/movie-icon.svg" alt="" className="h-5" />
                    <span className="span">Movies</span>
                </a>
                <a className="header-link group" href="/">
                    <img src="/images/series-icon.svg" alt="" className="h-5" />
                    <span className="span">Series</span>
                </a>
            </div>
        )}
        {!sesssion ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
        ) : (
            <img
          src={session.user.image}
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          onClick={signOut}
          />
        )}
    </div>
  )
}

export default Header