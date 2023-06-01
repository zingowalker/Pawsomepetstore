import { useSession } from "next-auth/react";

import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Head>
        <title>The Pawsome store | Pet shop in UT Leh - Ladakh</title>
        <meta
          name="description"
          content="Dogs for sale, adoption, accessories and toys"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="300" />
      </Head>
      <Layout>
        <div className="flex justify-between m-4">
          <h3>Hello, <b>{session?.user?.name}</b></h3>
          <div className="flex gap-1 items-center">
            <img
              src={session?.user?.image}
              alt="profile pic"
              className="w-8 h-8"
            />
            {session?.user?.name}
          </div>
        </div>
      </Layout>
    </>
  );
}
