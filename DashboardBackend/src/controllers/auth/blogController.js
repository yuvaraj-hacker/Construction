import Blog from "../../models/Blog.js";

export const BlogController = (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog.save()
    .then(blog => res.status(201).json(blog))
    .catch(err => res.status(400).json({ error: err.message }));
};

export const getBlogs = (req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json({ error: err.message }));
};
