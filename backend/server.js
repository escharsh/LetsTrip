// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 5000;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Travel App Backend');
});

app.post('/estimate-budget', (req, res) => {
    const { destination, duration, numPeople } = req.body;
    let budgetEstimate = 1000 * duration * numPeople;
    res.json({ budget: budgetEstimate });
});

app.post('/generate-prompt', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.json({ text });
    } catch (error) {
        console.error('Error generating prompt:', error);
        res.status(500).json({ error: 'Failed to generate prompt' });
    }
});

app.post('/holiday-ai', async (req, res) => {
    try {
        const geminiRecommendations = req.body.recommendations;
        const { optimalTime, travelPackages, budget } = await processRecommendations(geminiRecommendations);
        res.json({ optimalTime, travelPackages, budget });
    } catch (error) {
        console.error('Error generating holiday recommendations:', error);
        res.status(500).json({ error: 'Failed to generate holiday recommendations' });
    }
});

async function processRecommendations(recommendations) {
    const destinationMatch = recommendations.match(/destination\s+is\s+(.+?)\./i);
    const destination = destinationMatch ? destinationMatch[1] : null;

    if (!destination) {
        throw new Error("Could not extract destination from Gemini response.");
    }

    // Logic to generate responses based on the destination
    let optimalTime, travelPackages, budget;
    switch (destination.toLowerCase()) {
        case "paris":
            optimalTime = "Spring or Fall";
            travelPackages = [
                { name: "Romantic Paris Getaway", price: "$2500", link: "#" },
                { name: "Parisian Adventure Tour", price: "$1800", link: "#" },
            ];
            budget = "$1500 - $3000";
            break;
        case "tokyo":
            optimalTime = "Spring for cherry blossoms or Fall for vibrant colors";
            travelPackages = [
                { name: "Tokyo Cultural Immersion", price: "$2000", link: "#" },
                { name: "Tokyo Anime and Pop Culture Tour", price: "$1500", link: "#" },
            ];
            budget = "$1200 - $2500";
            break;
        case "hawaii":
            optimalTime = "Anytime for sunshine and beaches";
            travelPackages = [
                { name: "Relaxing Hawaiian Getaway", price: "$3000", link: "#" },
                { name: "Hawaiian Island Hopping Adventure", price: "$4500", link: "#" },
            ];
            budget = "$2500 - $5000";
            break;
        default:
            optimalTime = "Unknown";
            travelPackages = "Unknown";
            budget = "Unknown";
    }

    return { optimalTime, travelPackages, budget };
}

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:${port}`);
});