const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define schema and model
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    date: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
});

app.delete('/api/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
