import { ACCESS_TOKEN } from "./axios";

const assignJWT = async (token) => { localStorage.setItem(ACCESS_TOKEN, token) }

export default assignJWT;