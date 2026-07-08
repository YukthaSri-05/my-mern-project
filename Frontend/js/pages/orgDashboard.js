renderers.orgdash = () => {
  const org = state.currentOrganizer;
  const myTemple = temples.find(t => t.id === org.templeId);
  const myDarshans = darshans.filter(d => d.templeId === org.templeId);
  const myBookings = bookings.filter(b => b.templeName === myTemple.name);
  const max = Math.max(1, myDarshans.length, myBookings.length, 1);
  return `
  <div class="page-wrap container">
    <h2 class="page-title teal-title">Dashboard</h2>
    <div class="stats-row">
      <div class="stat-box" style="background:var(--teal)"><span>Temples</span><b>1</b></div>
      <div class="stat-box" style="background:var(--marigold);color:#3F1010"><span>Darshans</span><b>${myDarshans.length}</b></div>
      <div class="stat-box" style="background:#2E7D32"><span>Total Bookings</span><b>${myBookings.length}</b></div>
    </div>
    <div class="barchart">
      ${barCol("temples", 1, max, "#0F4C4F")}
      ${barCol("darshans", myDarshans.length, max, "#E8A33D")}
      ${barCol("bookings", myBookings.length, max, "#2E7D32")}
    </div>
  </div>
  ${footerHTML()}
  `;
};
