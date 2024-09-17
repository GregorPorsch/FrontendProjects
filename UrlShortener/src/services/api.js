import axios from "axios";

const API_BASE_URL = "http://localhost:8080/https://cleanuri.com/api/v1/shorten";

export const shortenUrl = async (url) => {
  try {
    const encodedUrl = encodeURIComponent(url.trim());
    const response = await axios.post(API_BASE_URL, `url=${encodedUrl}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.result_url;
  } catch (error) {
    console.error("Error shortening URL: ", error);
    return null;
  }
};
