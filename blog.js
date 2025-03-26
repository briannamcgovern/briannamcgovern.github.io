// Tag filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing blog functionality...');
    
    const tagButtons = document.querySelectorAll('.tag-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    console.log('Found tag buttons:', tagButtons.length);
    console.log('Found blog posts:', blogPosts.length);

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Tag button clicked:', button.getAttribute('data-tag'));
            
            // Remove active class from all buttons
            tagButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const selectedTag = button.getAttribute('data-tag');
            console.log('Selected tag:', selectedTag);

            blogPosts.forEach(post => {
                const postTags = post.getAttribute('data-tags');
                console.log('Post tags:', postTags);
                
                if (selectedTag === 'all' || postTags.includes(selectedTag)) {
                    post.classList.remove('hidden');
                    console.log('Showing post:', post.querySelector('h2').textContent);
                } else {
                    post.classList.add('hidden');
                    console.log('Hiding post:', post.querySelector('h2').textContent);
                }
            });
        });
    });

    // Intersection Observer for blog post animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all blog posts
    blogPosts.forEach(post => {
        observer.observe(post);
    });
}); 