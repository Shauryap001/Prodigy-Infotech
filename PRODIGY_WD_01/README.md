<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gaming Console Hub</title>
  <link rel="stylesheet" href="style.css" />
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

