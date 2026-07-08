renderers.templeDetail = () => {
  const t = temples.find(x => x.id === state.templeDetailId);
  if (!t) return `<div class="page-wrap container">Temple not found.</div>`;
  const list = darshans.filter(d => d.templeId === t.id);
  return `
  <div class="page-wrap container">
    <div class="two-col-grid" style="margin-bottom:40px">
      <div class="card">
        <h3 style="color:var(--maroon-dark);font-size:22px">Description</h3>
        <p style="color:var(--ink-soft);margin-top:10px">${esc(t.description)}</p>
      </div>
      <div class="card">
        <h3 style="color:var(--maroon-dark);font-size:22px">Info</h3>
        <div class="info-list" style="margin-top:10px">
          <div><span>Open</span><b>${esc(t.open)}</b></div>
          <div><span>Close</span><b>${esc(t.close)}</b></div>
          <div><span>Organizer</span><b>${esc(t.organizer)}</b></div>
          <div><span>Address</span><b style="text-align:right;max-width:60%">${esc(t.location)}</b></div>
        </div>
      </div>
    </div>
    <h2 class="page-title" style="font-size:26px">Darshans</h2>
    <div class="grid grid-3">
      ${list.map(d => `
        <div class="darshan-card">
          <h4>${esc(d.name)}</h4>
          <div class="row"><span>Timing</span><b>${esc(d.open)} – ${esc(d.close)}</b></div>
          <div class="row"><span>Normal Darshan</span><b>${d.normal === 0 ? "Free" : "₹" + d.normal}</b></div>
          <div class="row"><span>VIP Darshan</span><b>${d.vip ? "₹" + d.vip : "N/A"}</b></div>
          <p class="d">${esc(d.description)}</p>
          <button class="link-btn" style="width:100%;text-align:center" onclick="openBooking('${t.id}','${d.id}')">Book Now</button>
        </div>`).join("")}
    </div>
  </div>
  ${footerHTML()}
  ${bookingModalHTML()}
  `;
};
