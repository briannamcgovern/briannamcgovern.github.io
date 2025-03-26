class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="social-links">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p>&copy; 2024 Brianna McGovern. All rights reserved.</p>
                    <p class="attribution">Code by Cursor AI, Prompted by Brianna McGovern</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer); 