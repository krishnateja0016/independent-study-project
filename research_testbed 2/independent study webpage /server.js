// server.js - FIXED VERSION
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// AI User-Agent patterns
const aiPatterns = [
    /chatgpt/i, /gptbot/i, /anthropic/i, /claude/i,
    /cohere-ai/i, /openai/i, /huggingface/i,
    /googlebot/i, /bingbot/i, /facebookexternalhit/i,
    /twitterbot/i, /linkedinbot/i, /discordbot/i,
    /slackbot/i, /whatsapp/i, /telegrambot/i
];

function isAIAgent(req) {
    const userAgent = req.headers['user-agent'] || '';
    return aiPatterns.some(pattern => pattern.test(userAgent));
}

// Serve static files
app.use(express.static(path.join(__dirname)));

// Explicit mounts so relative assets like ./style.css resolve under these bases
const ironmanDir = path.join(__dirname, 'public/ironman/ironman webpage');
const batmanDir = path.join(__dirname, 'public/batman/batman webpage');
app.use('/ironman', express.static(ironmanDir));
app.use('/batman', express.static(batmanDir));

// Route handling
app.get('/', (req, res) => {
    if (isAIAgent(req)) {
        console.log('🤖 AI Agent detected - Redirecting to /batman/');
        return res.redirect(302, '/batman/');
    }
    console.log('👤 Human visitor - Redirecting to /ironman/');
    return res.redirect(302, '/ironman/');
});

// Direct access routes for testing
// Ensure trailing slashes so relative URLs resolve as expected
app.get('/ironman', (req, res) => res.redirect(302, '/ironman/'));
app.get('/batman', (req, res) => res.redirect(302, '/batman/'));

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`👤 Humans: Iron Man | 🤖 AI: Batman`);
    console.log(`🔗 Test: /ironman and /batman`);
});