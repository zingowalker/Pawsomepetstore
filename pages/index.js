import { useSession } from "next-auth/react";

import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return;
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
      <Layout>Hello, {session?.user?.name.toUpperCase()}!</Layout>
    </>
  );
}
