const express = require('express');

const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();


const OpenAI = require("openai")
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                // {
                //     "role": "user",
                //     "content": ""
                // },
                // {
                //     "role": "assistant",
                //     "content": "what is india famous for\n"
                // },
                // {
                //     "role": "assistant",
                //     "content": "India is famous for a variety of things, including its rich history and culture, vibrant festivals, diverse cuisine, traditional art forms, architectural marvels such as the Taj Mahal, ancient temples and monasteries, yoga and meditation practices, Bollywood film industry, cricket, and contributions to science, mathematics, and spirituality. India is also renowned for its natural beauty, from the stunning landscapes of the Himalayas and beaches of Goa to the backwaters of Kerala and the Thar Desert."
                // }
                {
                    role: "assistant",
                    content: prompt
                }
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        res.send(response.choices[0].message.content);

    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = router;

