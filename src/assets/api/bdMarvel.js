import axios from "axios";

export const instance = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e063a4fd8a7523a587fe7f77c5979cba&hash=25ffd61fd217a6e91a7d343b5ee3f6b0",
});