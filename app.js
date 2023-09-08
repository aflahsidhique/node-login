const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Predefined username and password (insecure, for demo purposes only)
const predefinedUser = {
    username: 'demo',
    password: 'password123',
};

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === predefinedUser.username && password === predefinedUser.password) {
        res.render('home', { username });
    } else {
        res.render('error', { message: 'Invalid username or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
