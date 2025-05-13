import axios from "axios";

const VITE_NODE_ENV = import.meta.env.VITE_NODE_ENV;

const URL =
  VITE_NODE_ENV === "development" ? "http://127.0.0.1:3000/api" : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
