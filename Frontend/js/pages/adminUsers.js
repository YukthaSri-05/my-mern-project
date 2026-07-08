renderers.adminusers = () => `
  <div class="page-wrap container">
    <h2 class="page-title teal-title">Users</h2>
    <table class="data">
      <tr><th>sl/no</th><th>UserId</th><th>User name</th><th>Email</th><th>Operation</th></tr>
      ${users.map((u, i) => `<tr>
        <td>${i + 1}</td><td class="mono">${esc(u.id)}</td><td>${esc(u.name)}</td><td>${esc(u.email)}</td>
        <td><button class="op-btn edit">Edit</button><button class="op-btn del">Del</button><button class="op-btn">View</button></td>
      </tr>`).join("")}
    </table>
  </div>
  ${footerHTML()}
`;
