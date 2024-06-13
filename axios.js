import express from 'express';
import axios from 'axios';
const PORT = 3000;

const app = express()

app.get('/',async (req,res)=>{
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random")
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});





app.listen(PORT,()=>{
    console.log(`Server is running on port 3000`);
});