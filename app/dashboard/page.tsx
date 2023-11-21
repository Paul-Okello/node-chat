import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

function DashboardPage({}: Props) {
  return (
    <div className='h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className=''>Dashboard Page</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}

export default DashboardPage;
