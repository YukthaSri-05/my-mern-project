renderers.admindash = () => {
  const totalBookings = bookings.length;
  const max = Math.max(1, users.length, organizers.length, temples.length, darshans.length, totalBookings);
  return `
  <div class="page-wrap container">
    <h2 class="page-title teal-title">Dashboard</h2>
    <div class="stats-row">
      <div class="stat-box" style="background:#7A2B8C"><span>Users</span><b>${users.length}</b></div>
      <div class="stat-box" style="background:var(--teal)"><span>Organizers</span><b>${organizers.length}</b></div>
      <div class="stat-box" style="background:var(--saffron)"><span>Temples</span><b>${temples.length}</b></div>
      <div class="stat-box" style="background:var(--marigold);color:#3F1010"><span>Darshans</span><b>${darshans.length}</b></div>
      <div class="stat-box" style="background:#2E7D32"><span>Total Bookings</span><b>${totalBookings}</b></div>
    </div>
    <div class="barchart">
      ${barCol("users", users.length, max, "#7A2B8C")}
      ${barCol("temples", temples.length, max, "#C9600E")}
      ${barCol("bookings", totalBookings, max, "#2E7D32")}
    </div>
  </div>
  ${footerHTML()}
  `;
};
