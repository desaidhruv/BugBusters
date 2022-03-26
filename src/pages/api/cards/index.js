import { getSession } from "next-auth/react";
import Card from "../../../models/Card";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  const session = await getSession({ req });
  const id = session?.user?.id;

  switch (method) {
    // case "GET":
    //   try {
    //     const card = await Card.find({
    //       card_id: { $eq: id },
    //     });
    //     res.status(200).json({ success: true, data: card });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    case "POST":
      try {
        const card = await Card.create(req.body);
        /* create a new model in the database */
        res.status(201).json({ success: true, data: card });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
