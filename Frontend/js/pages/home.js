renderers.home = () => `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">Temple darshan, simplified</div>
        <h1>Skip the queue.<br>Keep the <em>faith</em>.</h1>
        <p class="lead">DarshanEase lets you reserve darshan slots across India's most visited temples in a few taps — no more standing in line before sunrise.</p>
        <div class="hero-cta">
          <button class="btn-primary" onclick="go('temples')">Browse Temples</button>
          <button class="btn-ghost" onclick="go('about')">How it works</button>
        </div>
        <div class="hero-stats">
          <div><b>${temples.length}</b><span>Temples listed</span></div>
          <div><b>${darshans.length}</b><span>Darshan types</span></div>
          <div><b>${bookings.length}</b><span>Darshans booked</span></div>
        </div>
      </div>
      <div class="hero-image">
  <img
    src="images/tirumala-banner.jpg"
    alt="Tirumala Temple"
    class="hero-temple-img"
  >
</div>
    </div>
  </section>

  <div class="ticker-strip"><div class="ticker-inner">🪔 Book your temple darshan now — limited slots available, don't miss the divine experience &nbsp;&nbsp;&nbsp;&nbsp; 🪔 New: Kasi Vishwanath Rudrabhishek slots open for this week &nbsp;&nbsp;&nbsp;&nbsp; 🪔 Seeghra Darshanam at Tirumala fills up fast — reserve early</div></div>
  <div class="garland"></div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <h2>Featured Temples</h2>
        <p>A curated set of pilgrimage destinations, each with live darshan slots managed directly by temple organizers.</p>
      </div>
      <div class="grid grid-3">
        ${temples.map(t => templeCard(t)).join("")}
      </div>
    </div>
  </section>

  <div class="garland dark"></div>

  <section class="section" style="background:var(--ivory-deep)">
    <div class="container">
      <div class="section-head">
        <h2>How DarshanEase works</h2>
        <p>Three simple steps stand between you and your next darshan.</p>
      </div>
      <div class="steps">
        <div class="step"><div class="num">1</div><h4>Choose a temple</h4><p>Explore timings, location and details for each listed temple.</p></div>
        <div class="step"><div class="num">2</div><h4>Pick a darshan slot</h4><p>Select from Seeghra, Sarva, Divya or other darshan types with clear pricing.</p></div>
        <div class="step"><div class="num">3</div><h4>Book & carry your QR pass</h4><p>Get an instant booking ID and QR code — show it at the gate, no printing needed.</p></div>
      </div>
    </div>
  </section>

  ${footerHTML()}
`;
