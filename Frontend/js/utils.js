/* ============ UTIL ============ */
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

function esc(s) {
  return (s + "").replace(/[<>&]/g, c => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;"
  }[c]));
}

function genId() {
  return Math.random().toString(16).slice(2, 12);
}

function gopuramSVG(accent, size = 140) {
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}">
    <polygon points="50,4 58,16 66,16 66,26 74,26 74,38 84,38 84,52 94,52 94,96 6,96 6,52 16,52 16,38 26,38 26,26 34,26 34,16 42,16" fill="${accent}" opacity="0.92"/>
    <circle cx="50" cy="8" r="3.4" fill="#E8A33D"/>
    <rect x="30" y="70" width="40" height="26" fill="#fff" opacity="0.14"/>
  </svg>`;
}

function heroGopuram() {
  return `<svg viewBox="0 0 320 320" class="gopuram">
    <defs>
      <linearGradient id="gopgrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C9600E"/>
        <stop offset="100%" stop-color="#6B1E1E"/>
      </linearGradient>
    </defs>
    <polygon points="160,10 176,34 194,34 194,54 212,54 212,78 232,78 232,104 254,104 254,134 280,134 280,300 40,300 40,134 66,134 66,104 88,104 88,78 108,78 108,54 126,54 126,34 144,34" fill="url(#gopgrad)"/>
    <circle cx="160" cy="18" r="7" fill="#E8A33D"/>
    <rect x="90" y="220" width="140" height="80" fill="#3F1010" opacity="0.35"/>
    <rect x="140" y="240" width="40" height="60" fill="#FBF3E7" opacity="0.9"/>
  </svg>`;
}

/* ============ SHARED UI PIECES ============ */

function templeCard(t) {
  return `
  <div class="temple-card">

    <img
      src="${t.image}"
      alt="${esc(t.name)}"
      class="temple-image"
      onerror="this.src='images/default-temple.jpg'">

    <div class="body">

      <h3>${esc(t.name)}</h3>

      <div class="badge-row">
        <span>🕘 Open ${esc(t.open)}</span>
        <span>🌙 Close ${esc(t.close)}</span>
      </div>

      <p class="desc">${esc(t.description)}</p>

      <button
        class="link-btn"
        onclick="go('templeDetail',{templeDetailId:'${t.id}'})">
        View Temple
      </button>

    </div>

  </div>`;
}

function bookingCardHTML(b) {

    const qrData = encodeURIComponent(
        `DarshanEase|${b.id}|${b.templeName}|${b.darshanName}`
    );

    return `
    <div class="booking-card">

        <div class="booking-thumb">

            <img
                src="${b.templeImage || 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Kashi_Vishwanath_Temple.jpg'}"
                alt="${esc(b.templeName)}"
                class="booking-temple-img">

        </div>

        <div class="qr-box">

            <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qrData}"
                alt="QR">

        </div>

        <div class="booking-info">

            <div>
                <b>BOOKING ID</b><br>
                ${esc(b.id)}
            </div>

            <div>
                <b>TEMPLE NAME</b><br>
                ${esc(b.templeName)}
            </div>

            <div>
                <b>DARSHAN NAME</b><br>
                ${esc(b.darshanName)}
            </div>

            <div>
                <b>BOOKING DATE</b><br>
                ${esc(b.date)}
            </div>

            <div>
                <b>DARSHAN TIMING</b><br>
                ${esc(b.timing)}
            </div>

            <div>
                <b>NO OF TICKETS</b><br>
                ${b.qty}
            </div>

            <div>
                <b>TOTAL PRICE</b><br>
                ₹${b.price}
            </div>

        </div>

        <button
            class="link-btn small"
            onclick="downloadTicket('${b.id}')">

            ⬇ Download

        </button>

    </div>
    `;
}

function downloadTicket(id) {

    const booking = bookings.find(b => b.id === id);

    if (!booking) {
        toast("Booking not found");
        return;
    }

    const ticket = `
DARSHANEASE TICKET

Booking ID : ${booking.id}

Temple : ${booking.templeName}

Darshan : ${booking.darshanName}

Date : ${booking.date}

Timing : ${booking.timing}

Tickets : ${booking.qty}

Amount : ₹${booking.price}

Devotee : ${booking.userName}

Thank you for booking with DarshanEase.
`;

    const blob = new Blob([ticket], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = `${booking.templeName}-Ticket.txt`;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    toast("Ticket downloaded successfully.");
}

function footerHTML() {
  return `
  <footer class="site-footer">
    <div class="container">
      <p class="quote">
        "Embark on a spiritual journey, one darshan at a time — seamless temple darshan ticket booking at your fingertips."
      </p>

      <div class="foot-grid">

        <div>
          <h4>DarshanEase</h4>
          <p>
            A trusted companion for planning temple visits,
            reserving darshan slots and skipping the queue —
            all from your phone.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <p>Temples<br>About<br>Services</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            Call at: 127-865-586-67<br>
            hello@darshanease.app
          </p>
        </div>

      </div>

      <div class="foot-bottom">
        Copyright © 2024 By DarshanEase. All Rights Reserved.
      </div>

    </div>
  </footer>`;
}