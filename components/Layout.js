import { useSession, signIn, signOut } from "next-auth/react";

import Nav from "../components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
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
    );
  }
  return (
    <div className="flex bg-black min-h-screen text-black">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg">
        {children}
      </div>
    </div>
  );
}
