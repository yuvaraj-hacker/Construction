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
  



export const updateBlog = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  Blog.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      res.json(blog);
    })
    .catch(err => res.status(400).json({ error: err.message }));
};




export const deleteBlog = (req, res) => {
  const { id } = req.params;

  Blog.findByIdAndDelete(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      res.status(200).json({ message: 'Blog post deleted successfully' });
    })
    .catch(err => res.status(400).json({ error: err.message }));
};



