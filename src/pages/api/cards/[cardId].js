import dbConnect from "../../../lib/dbConnect";
import Card from "../../../models/Card";

export default async function handler(req, res) {
  const {
    query: { cardId },
    method,
  } = req;
  console.log(cardId);
  await dbConnect();

  switch (method) {
    // case "PUT" /* Edit a model by its ID */:
    //   try {
    //     const pet = await Pet.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //       runValidators: true,
    //     });
    //     if (!pet) {
    //       return res.status(400).json({ success: false });
    //     }
    //     res.status(200).json({ success: true, data: pet });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedCard = await Card.deleteOne({ _id: cardId });
        if (!deletedCard) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
