//http request
import https from 'https';
import express from 'express';

const app = express()
const PORT = 3000;

//route
app.get('/',(req,res)=>{
    const options = {
        hostname: 'bored-api.appbrewery.com',
        path: '/random',
        method: 'GET',
      };
      //Call the api

      const request = https.request(options,(response)=>{
        let data = "";
        response.on("data",(chunk)=>{
            data +=chunk;
        })

        response.on("end",()=>{
            try {
                const result = JSON.parse(data)
                console.log(result);
            } catch (error) {
                console.log(error.message);
            }
        })

      })

      request.on("error",(error)=>{
        console.log(error.message);
        res.status(500).json({error:'Failed'});
      })

      request.end();

});







app.listen(PORT,()=>{
    console.log(`Server is running on port 3000`);
});













