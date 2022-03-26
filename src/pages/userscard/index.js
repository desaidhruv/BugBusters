import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, signOut, useSession } from "next-auth/react";
import CreateDigiCard from "../../components/CreateDigiCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import dbConnect from "../../lib/dbConnect";
import Card from "../../models/Card";

const Usercard = ({ Cards }) => {
  return (
    <>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Card" />
      </Head>
      <>
        <CreateDigiCard />

        <button onClick={signOut}>sign out</button>
        {Cards &&
          Cards.map(
            (res, i) => (
              <div key={i}>
                <div>Card {i + 1} </div>
                <div>{res.firstname}</div>
                <div>{res.card_id}</div>
                <div>{res.lastname}</div>
                <div>{res.phoneno}</div>
                <div>Object ID {res._id}</div>
                <Link href="card/[cardId]" as={`card/${res._id}`}>
                  <button>View</button>
                </Link>

                <div>------------------</div>
              </div>
            )
            // session?.user?.id === res.card_id &&
          )}
      </>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  await dbConnect();
  const cards = await Card.find({
    card_id: { $eq: session?.user?.id },
  }).exec();
  const data = JSON.parse(JSON.stringify(cards));

  return {
    props: {
      Cards: data,
    },
  };
}
export default Usercard;
