import axios from "axios";
import { toast } from "react-toastify";
export async function get_balance() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "get-balance",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
}
export async function get_transactions() {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "get-transactions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function get_token_rate() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd"
    );
    return response.data["matic-network"]["usd"];
  } catch (err) {
    console.log(err);
    toast.error("Matic Rate unavailable!");
  }
}

export function timestampToDateTime(timestamp) {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day}`;
  return formattedDateTime;
}

export function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then((success) => toast.success("Copied!"))
    .catch((err) => console.log(err));
}

export const sortTransactions = async (_data) => {
  let token_hashes = _data.token_tranx.map((transaction) => transaction.hash);
  _data.usdt_tranx.map((transaction) => {
    token_hashes.push(transaction.hash);
    transaction.currency = "USDT";
    _data.token_tranx.push(transaction);
  });
  _data.native_tranx.map((transaction) => {
    if (!token_hashes.includes(transaction.hash)) {
      transaction.currency = "MATIC";
      _data.token_tranx.push(transaction);
    }
  });
  return [..._data.token_tranx].reverse();
};

export const sendOtp = async (email) => {
  try {
    if (!email) {
      toast.error("Invalid Email!");
      return;
    }
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "forget-password",
      {
        email,
      }
    );
    console.log(response);
    if (response.status == 200) {
      toast.success("Check your email!");
      localStorage.setItem("email", email);
      return true;
    }
  } catch (err) {
    toast.error("Something went wrong");
  }
};

export const handleLogout = () => {
  localStorage.setItem("token", '');
  return
}
