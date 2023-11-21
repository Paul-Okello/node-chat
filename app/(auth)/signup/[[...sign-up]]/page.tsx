import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <SignUp afterSignInUrl='/dashboard' redirectUrl='/dashboard' />
    </div>
  );
};

export default SignUpPage;
