import express from "express";
import cors from "cors";
import supabase from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select();

  if (error) {
  console.log(error);
  res.status(500).json(error);
} else {
  console.log(data);
  res.json(data);
}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
