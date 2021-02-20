import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function saveOrder(payLoad: OrderPayLoad) {
    return axios.post(`${API_URL}/orders`, payLoad);
}