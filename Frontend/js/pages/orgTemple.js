renderers.orgtemple = () => {
  const t = temples.find(x => x.id === state.currentOrganizer.templeId);
  return `
  <div class="page-wrap container">
    <div class="top-actions"><button class="link-btn" onclick="go('orgedit')">Edit Temple</button></div>
    <h2 class="page-title teal-title">My Temple</h2>
    <div class="card" style="max-width:520px;margin:0 auto">
      <div class="temple-art" style="background:${t.accent};height:190px;margin:-26px -26px 18px">${gopuramSVG("#fbf3e7", 120)}</div>
      <h3 style="color:var(--maroon-dark)">${esc(t.name)}</h3>
      <div class="badge-row"><span><b>Open:</b> ${esc(t.open)}</span><span><b>Close:</b> ${esc(t.close)}</span></div>
      <p class="desc" style="display:block"><b>Location:</b> ${esc(t.location)}</p>
      <p class="desc" style="display:block"><b>Description:</b> ${esc(t.description)}</p>
    </div>
  </div>
  ${footerHTML()}
  `;
};

renderers.orgedit = () => {
  const t = temples.find(x => x.id === state.currentOrganizer.templeId);
  return `
  <div class="page-wrap container">
    <div class="form-card" style="max-width:560px">
      <h2>Update Temple</h2>
      <div class="field"><label>Temple Name</label><input id="edName" value="${esc(t.name)}"></div>
      <div class="field" style="display:flex;gap:12px">
        <div style="flex:1"><label>Open</label><input id="edOpen" value="${esc(t.open)}"></div>
        <div style="flex:1"><label>Close</label><input id="edClose" value="${esc(t.close)}"></div>
      </div>
      <div class="field"><label>Address</label><input id="edAddr" value="${esc(t.location)}"></div>
      <div class="field"><label>Description</label><textarea id="edDesc">${esc(t.description)}</textarea></div>
      <button class="btn-solid" onclick="saveTemple('${t.id}')">Update</button>
    </div>
  </div>
  ${footerHTML()}
  `;
};
