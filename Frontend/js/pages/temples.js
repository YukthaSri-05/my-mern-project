renderers.temples = () => `
  <div class="page-wrap container">
    <h2 class="page-title">Temples</h2>
    <div class="grid grid-3">
      ${temples.map(t => templeCard(t)).join("")}
    </div>
  </div>
  ${footerHTML()}
`;
