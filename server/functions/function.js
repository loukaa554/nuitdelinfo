const axios = require("axios");

// -----------------------------------------------------

// -------------------- FETCH DATA ---------------------

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

// -----------------------------------------------------

// ------------------ GENERATION UUID ------------------

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

// -----------------------------------------------------

// -------------------- FORMAT DATE --------------------

const formatDate = (date, format) => {
  const d = new Date(date);
  if (isNaN(d)) throw new Error("Invalid date");

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear());
  const shortYear = year.slice(-2);

  return format
    .replace(/dd/g, day)
    .replace(/mm/g, month)
    .replace(/yyyy/g, year)
    .replace(/yy/g, shortYear);
};

// -----------------------------------------------------

// ----------------------- EXPORT ----------------------

export { fetchData, generateUUID, formatDate };
