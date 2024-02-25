import { useState } from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Account = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <header className="relative bg-black">
        <figure className="h-screen w-screen bg-account bg-cover bg-[center_-100px]"></figure>

        <main className="absolute h-fit w-fit top-0 bottom-0 my-auto left-0 right-0 mx-auto font-serif">
          <section className="rounded-lg bg-white space-y-5 p-5 pt-6">
            {signIn ? (
              <SignIn setSignIn={setSignIn} />
            ) : (
              <SignUp setSignIn={setSignIn} />
            )}
          </section>
        </main>
      </header>
    </>
  );
};

export default Account;
