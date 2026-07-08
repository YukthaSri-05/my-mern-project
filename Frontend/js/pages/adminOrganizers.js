renderers.adminorgs = () => `
  <div class="page-wrap container">
    <h2 class="page-title teal-title">Organizers</h2>
    <table class="data">
      <tr><th>sl/no</th><th>UserId</th><th>User name</th><th>Email</th><th>Operation</th></tr>
      ${organizers.map((o, i) => `<tr>
        <td>${i + 1}</td><td class="mono">${esc(o.id)}</td><td>${esc(o.name)}</td><td>${esc(o.email)}</td>
        <td><button class="op-btn edit">Edit</button><button class="op-btn del">Del</button><button class="op-btn">View</button></td>
      </tr>`).join("")}
    </table>
  </div>
  ${footerHTML()}
`;
