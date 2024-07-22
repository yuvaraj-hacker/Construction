import mongoose from 'mongoose';
import db from '../config/db/db.js';


const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: String
});

const Blog = db.model('Blog', blogSchema);

export default Blog;
