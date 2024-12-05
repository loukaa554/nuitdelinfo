const express = require("express");
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const analytics = require("firebase-analytics");
const { validateEmail, fetchData } = require("./function");

const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Configuration CORS
const corsOptions = {
  origin: true, // Autoriser tous les domaines
  methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
  allowedHeaders: ["Content-Type", "Authorization"], // En-têtes autorisés
  credentials: true, // Permettre les informations d'identification
};

// Appliquer CORS globalement avant les routes
app.use(cors(corsOptions));

// Initialiser Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// --------------------- EMAIL ---------------------

app.post("/send-email", async (req, res) => {
  const { site, firstName, lastName, email, message } = req.body;

  if (!site || !firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required fields." });
  }

  if (!validateEmail(email)) {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid email address." });
  }

  try {
    await admin
      .firestore()
      .collection("mail")
      .add({
        to: "louka.mourrier@gmail.com",
        message: {
          subject: `${site} - Nouveau message de ${firstName} ${lastName}`,
          text: `${message}\n\n${email}\n\n${site}\n\n${firstName} ${lastName}`,
        },
      });

    res.json({ status: "success", message: "Email sent!" });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ status: "error", message: "Failed to send email." });
  }
});

// Déployez votre application Express en tant que Firebase Cloud Function v2
exports.apiV2 = onRequest(app);
