const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


const portfolioData = {
    name: "ABU KASHIF ANSARI",
    title: "Full Stack Developer",
    projects: [
        { title: "Project 1", description: "GardenBot.", link: "#" },
        { title: "Project 2", description: "FUTURE", link: "#" }
    ],
    skills: ["JavaScript", "HTML", "CSS", "C"],
    contact: { email: "kashifabu04@gmail.com ", phone: "+91 9628074174" }
};

app.get('/api/portfolio', (req, res) => {
    res.json(portfolioData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
