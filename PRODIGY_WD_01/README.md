<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gaming Console Hub</title>
  <link rel="stylesheet" href="style.css" />
  <style>/* Reset & base */
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family: "Segoe UI", sans-serif; color:#fff; background:#0f0f13; line-height:1.6; }
img { max-width:100%; display:block; }

/* Navbar */
.navbar { display:flex; justify-content:space-between; align-items:center; padding:1rem 2rem; background:#16161d; position:sticky; top:0; z-index:10; }
.logo { font-size:1.8rem; }
.logo span { color:#ff4654; }
.nav-links { display:flex; gap:1.5rem; list-style:none; }
.nav-links a { color:#fff; text-decoration:none; transition:color .3s; }
.nav-links a:hover { color:#ff4654; }
.hamburger { display:none; font-size:1.8rem; background:none; border:none; color:#fff; cursor:pointer; }

/* Hero */
.hero { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; padding:2rem; }
.hero-content { max-width:600px; }
.hero-content h2 { font-size:2.5rem; margin-bottom:.5rem; }
.cta-btn { display:inline-block; margin-top:1rem; padding:.8rem 2rem; background:#ff4654; color:#fff; text-decoration:none; border-radius:4px; }

/* Sections */
.section-title { text-align:center; font-size:2rem; margin-bottom:1.5rem; }
.features, .catalog, .reviews, .contact { padding:3rem 1rem; }

/* Feature cards */
.feature-grid { display:grid; gap:1.5rem; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); }
.card { background:#1d1d26; padding:1.5rem; border-radius:6px; text-align:center; }
.card h3 { margin-bottom:.5rem; }

/* Products */
.product-grid { display:grid; gap:2rem; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); }
.product { background:#1d1d26; padding:1rem; border-radius:6px; text-align:center; }
.product h3 { margin:.8rem 0 .3rem; }
.buy-btn { margin-top:.5rem; padding:.6rem 1.2rem; background:#ff4654; border:none; color:#fff; border-radius:4px; cursor:pointer; }

/* Reviews */
.review-slider { max-width:700px; margin:0 auto; position:relative; }
blockquote { background:#1d1d26; padding:1.5rem 2rem; border-left:4px solid #ff4654; margin-bottom:1rem; border-radius:6px; }
blockquote span { display:block; margin-top:.8rem; color:#ccc; }

/* Contact */
#newsletter { display:flex; justify-content:center; gap:.5rem; flex-wrap:wrap; }
#newsletter input { padding:.8rem 1rem; border:none; border-radius:4px; min-width:220px; }
#newsletter button { padding:.8rem 1.4rem; border:none; background:#ff4654; color:#fff; border-radius:4px; cursor:pointer; }

/* Footer */
.footer { text-align:center; padding:1rem; background:#16161d; }

/* Responsive */
@media (max-width:768px){
  .nav-links { display:none; flex-direction:column; background:#16161d; position:absolute; top:60px; right:0; width:200px; padding:1rem; }
  .nav-links.show { display:flex; }
  .hamburger { display:block; }
  .hero { text-align:center; justify-content:center; }
  .hero-img { margin-top:2rem; }
}
</style>
</head>
<body>
  <header class="navbar">
    <h1 class="logo">Console<span>Hub</span></h1>
    <nav>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="hamburger" id="hamburger">&#9776;</button>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Level-Up Your Gaming Experience</h2>
      <p>Discover next-gen consoles, accessories, and exclusive bundles—all in one place.</p>
      <a href="#catalog" class="cta-btn">Shop Now</a>
    </div>
    <img src="https://i.imgur.com/UrXJj5r.png" alt="Gaming Console" class="hero-img" />
  </section>

  <section id="features" class="features">
    <h2 class="section-title">Why ConsoleHub?</h2>
    <div class="feature-grid">
      <div class="card">
        <h3>Best Prices</h3>
        <p>We monitor the market daily to guarantee the lowest prices.</p>
      </div>
      <div class="card">
        <h3>Fast Shipping</h3>
        <p>Get your console at your doorstep in under 48 hours.</p>
      </div>
      <div class="card">
        <h3>Warranty & Support</h3>
        <p>Extended 2-year warranty and 24/7 technical support.</p>
      </div>
    </div>
  </section>

  <section id="catalog" class="catalog">
    <h2 class="section-title">Top Sellers</h2>
    <div class="product-grid">
      <div class="product">
        <img src="https://i.imgur.com/3J8zDgA.png" alt="NextBox X" />
        <h3>NextBox X</h3>
        <p>₹49,999</p>
        <button class="buy-btn">Buy</button>
      </div>
      <div class="product">
        <img src="https://i.imgur.com/x68ggF5.png" alt="PlayMate 5" />
        <h3>PlayMate 5</h3>
        <p>₹54,999</p>
        <button class="buy-btn">Buy</button>
      </div>
      <div class="product">
        <img src="https://i.imgur.com/kLEWAqZ.png" alt="Switch-Go" />
        <h3>Switch-Go</h3>
        <p>₹29,999</p>
        <button class="buy-btn">Buy</button>
      </div>
    </div>
  </section>

  <section id="reviews" class="reviews">
    <h2 class="section-title">Player Reviews</h2>
    <div class="review-slider" id="slider">
      <blockquote>“The fastest delivery ever! Loving my new console.”<span>—Riya P.</span></blockquote>
      <blockquote>“Great customer support; they helped me set everything up.”<span>—Arjun S.</span></blockquote>
      <blockquote>“ConsoleHub bundles are unbeatable in value.”<span>—Sara M.</span></blockquote>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2 class="section-title">Stay in the Game</h2>
    <form id="newsletter">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </section>

  <footer class="footer">
    <p>©2025 ConsoleHub. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

