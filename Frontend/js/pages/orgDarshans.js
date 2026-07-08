renderers.orgdarshans = () => {
  const list = darshans.filter(d => d.templeId === state.currentOrganizer.templeId);
  return `
  <div class="page-wrap container">
    <div class="top-actions"><button class="link-btn" onclick="go('orgcreate')">Create Darshan</button></div>
    <h2 class="page-title teal-title">My Darshans</h2>
    <div class="grid grid-3">
      ${list.map(d => `
        <div class="darshan-card">
          <h4>Darshan Name: ${esc(d.name)}</h4>
          <div class="row"><span>Open</span><b>${esc(d.open)}</b></div>
          <div class="row"><span>Close</span><b>${esc(d.close)}</b></div>
          <div class="row"><span>Normal Darshan</span><b>${d.normal === 0 ? "Free" : d.normal}</b></div>
          <div class="row"><span>Vip Darshan</span><b>${d.vip ? d.vip : "N/A"}</b></div>
          <p class="d">Description: ${esc(d.description)}</p>
        </div>`).join("")}
    </div>
  </div>
  ${footerHTML()}
  `;
};

renderers.orgcreate = () => `
  <div class="page-wrap container">
    <div class="form-card" style="max-width:560px">
      <h2>Create Darshan</h2>
      <div class="field"><label>Darshan Name</label><input id="cdName" placeholder="Darshan Name"></div>
      <div class="field" style="display:flex;gap:12px">
        <div style="flex:1"><label>Open</label><input id="cdOpen" placeholder="--:-- --"></div>
        <div style="flex:1"><label>Close</label><input id="cdClose" placeholder="--:-- --"></div>
      </div>
      <div class="field" style="display:flex;gap:12px">
        <div style="flex:1"><label>Normal Price</label><input id="cdNormal" placeholder="Normal Price"></div>
        <div style="flex:1"><label>Vip Price</label><input id="cdVip" placeholder="Vip Price"></div>
      </div>
      <div class="field"><label>Description</label><textarea id="cdDesc" placeholder="Description"></textarea></div>
      <button class="btn-solid" onclick="createDarshan()">Create</button>
    </div>
  </div>
  ${footerHTML()}
`;
