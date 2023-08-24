import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "635b89d53eb64cd5b9bc3a1fce38158c",
  },
});
