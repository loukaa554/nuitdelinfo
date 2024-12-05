// -----------------------------------------------------

// -------------------- EMAIL VALID --------------------

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// -----------------------------------------------------

// -------------------- PHONE VALID --------------------

const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

// -----------------------------------------------------

// ------------------- DOMAINE VALID -------------------

const isValidDomain = (domain) => {
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(domain);
};

// -----------------------------------------------------

// ------------------- IPv4v6 VALID --------------------

const isValidIP = (ip) => {
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};

// -----------------------------------------------------

// --------------------- URL VALID ---------------------

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// -----------------------------------------------------

// ------------------- PASSWORD VALID ------------------

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// -----------------------------------------------------

// -------------------- JSON VALID ---------------------

const isValidJSON = (jsonString) => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
};

export {
  isValidEmail,
  isValidPhoneNumber,
  isValidDomain,
  isValidIP,
  isValidURL,
  isValidPassword,
  isValidJSON,
};
