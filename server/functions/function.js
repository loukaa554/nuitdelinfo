const axios = require("axios");

// Renvoie un JSON de data
const fetchData =
  typeof fetch === "function"
    ? async function fetchData(url) {
        const response = await fetch(url);
        return await response.text();
      }
    : async function fetchData(url) {
        const { data } = await axios.get(url);
        return data;
      };

// Renvoie un boolean
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export { fetchData, validateEmail };
