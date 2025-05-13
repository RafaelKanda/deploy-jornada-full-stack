import axios from "axios";
import dotenv from "dotenv";

const { NODE_ENV } = dotenv.config().parsed;

const URL = NODE_ENV === "development" ? "http://127.0.0.1:3000/api" : "/api";

// const URL = "https://deploy-jornada-full-stack-qlr9.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
