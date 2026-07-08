renderers.orgbookings = () => {
  const myTemple = temples.find(t => t.id === state.currentOrganizer.templeId);
  const list = bookings.filter(b => b.templeName === myTemple.name);
  return `
  <div class="page-wrap container">
    <h2 class="page-title teal-title">Bookings</h2>
    ${list.length ? `
    <table class="data">
      <tr><th>Booking Id</th><th>Darshan</th><th>Devotee</th><th>Date</th><th>Timing</th><th>Qty</th><th>Price</th></tr>
      ${list.map(b => `<tr>
        <td class="mono">${esc(b.id)}</td><td>${esc(b.darshanName)}</td><td>${esc(b.userName)}</td>
        <td>${esc(b.date)}</td><td>${esc(b.timing)}</td><td>${b.qty}</td><td>₹${b.price}</td>
      </tr>`).join("")}
    </table>` : `<div class="empty-state"><h3>No bookings yet</h3><p>Bookings made for your temple will appear here.</p></div>`}
  </div>
  ${footerHTML()}
  `;
};
