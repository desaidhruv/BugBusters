import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  card_id: {
    type: String,
  },
  Name: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  address: {
    type: String,
  },
  designation: {
    type: String,
  },
  tagline: {
    type: String,
  },
  bio: {
    type: String,
  },
  website: {
    type: String,
  },
  // soical: {
  //   instagram: {
  //     type: String,
  //   },
  //   facebook: {
  //     type: String,
  //   },
  //   whatsapp: {
  //     type: String,
  //   },
  //   linkedin: {
  //     type: String,
  //   },
  //   twitter: {
  //     type: String,
  //   },
  // },
  ytVideo: {
    type: String,
  },
  paymentLink: {
    type: String,
  },
});

export default mongoose.models.Card ||
  mongoose.model("Card", CardSchema, "digicards");
