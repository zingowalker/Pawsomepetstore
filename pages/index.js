import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <Head>
          <title>The Pawsome store | Pet shop in UT Leh - Ladakh</title>
          <meta
            name="description"
            content="Dogs for sale and adopting, dog and cat accessories and toys"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="bg-black text-white w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button
              onClick={() => signIn("google")}
              className="py-4 bg-white text-black hover:bg-slate-300 px-4 rounded-lg"
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      Signed in as {session.user.email} <br />
    </div>
  );
}
