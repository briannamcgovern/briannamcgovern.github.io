class Navigation extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-content">
                    <div class="logo">BAM</div>
                    <ul class="nav-links">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../index.html#about">About</a></li>
                        <li><a href="../index.html#skills">Skills</a></li>
                        <li><a href="../index.html#experience">Experience</a></li>
                        <li><a href="../index.html#contact">Contact</a></li>
                        <li><a href="../blog.html">Blog</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-component', Navigation); 