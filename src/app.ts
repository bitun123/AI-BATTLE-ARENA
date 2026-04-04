import  express from "express"
import  runGraph  from "./ai/graph.ai.js";

const app = express();

app.use(express.json());


app.post("/", async (req, res) => {

  try {
    const result = await runGraph("write a palindrome in javascript");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});


export default app