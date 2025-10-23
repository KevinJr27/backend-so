import express from "express";
import cors from 'cors';
import { config } from "./core/config";
import { bookRouter } from "./books/infraestructure/routes/Book_routes";

const app = express()
const PORT = config.PORT || 5000;

app.use(express.json())

// domains for cors
const allowedDomains = config.AVAILABLE_DOMAINS
  ? config.AVAILABLE_DOMAINS.split(',').map(domain => domain.trim())
  : [];

console.log("Allowed domains")
console.log(allowedDomains)

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedDomains.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));

app.use(cors({
  origin: '*',
  credentials: true
}));


app.get('/morales-perez', (req, res) => {
  res.send('Hola, Kevin Jimmy Morales Pérez');
});

// resources
app.use("/books", bookRouter);

app.listen(PORT,() => { console.log("Server running on http://localhost:" + PORT )});