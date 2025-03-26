# Brianna McGovern's Portfolio Website

*This code is written by Cursor AI, prompted by Brianna McGovern*

This is my personal portfolio website built with HTML, CSS, and JavaScript. The site includes a blog section where I share my thoughts and experiences in technology.

## Adding a New Blog Post

To add a new blog post, follow these steps:

1. **Create the Blog Post File**:
   - Copy `blog/template.html` to a new file in the `blog` directory
   - Name the file descriptively (e.g., `my-new-post.html`)
   - Update the following in the new file:
     - Title in the `<title>` tag
     - Tags in the `blog-tags` div
     - Blog post title
     - Date
     - Content in the `blog-content` div

2. **Add to Blog Grid**:
   - Open `blog.html`
   - Add a new article in the `blog-grid` section following this structure:
   ```html
   <article class="blog-post" data-tags="your,tags,here">
       <div class="blog-image" style="background-color: var(--primary-color);">
           <i class="fas fa-your-icon"></i>
       </div>
       <div class="blog-content">
           <div class="blog-tags">
               <span class="tag">Your Tag 1</span>
               <span class="tag">Your Tag 2</span>
           </div>
           <h2>Your Blog Post Title</h2>
           <p class="blog-date">Your Date</p>
           <p class="blog-excerpt">A brief excerpt of your blog post...</p>
           <a href="blog/your-new-post.html" class="read-more">Read More</a>
       </div>
   </article>
   ```

3. **Update Tags** (if needed):
   - If you're using new tags, add them to the tag filter buttons at the top of `blog.html`

## Available Tags
- Technology
- Career
- Personal
- Projects

## Running the Site Locally
To view the site locally, run:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## File Structure
```
.
├── index.html          # Main portfolio page
├── blog.html          # Blog listing page
├── styles.css         # Main styles
├── blog.css          # Blog-specific styles
├── script.js         # Main JavaScript
├── blog.js           # Blog-specific JavaScript
├── images/           # Image assets
└── blog/             # Individual blog posts
    ├── template.html  # Template for new posts
    └── *.html        # Individual blog post files
```
