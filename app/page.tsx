import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className=''>Home Page</h1>
      <Link href='/signin'>
        <button className='p-3 bg-sky-700 text-slate-800' type='button'>
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
