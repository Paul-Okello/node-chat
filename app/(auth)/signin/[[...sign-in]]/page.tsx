import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen  bg-stone-300/60'>
      <SignIn />
    </div>
  );
};

export default SignInPage;
