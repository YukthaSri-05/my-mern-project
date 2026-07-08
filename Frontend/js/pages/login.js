renderers.login = () => `
  <div class="page-wrap container">
    <div class="form-card">
      <h2>Login to DarshanEase</h2>
      <div class="demo-note" style="background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.4);color:#eafaf8">Demo shortcuts — pick a role to sign in instantly:</div>
      <div class="field"><label>Email address</label><input id="loginEmail" placeholder="Email address"></div>
      <div class="field"><label>Password</label><input type="password" id="loginPass" placeholder="Password"></div>
      <button class="btn-solid" onclick="doLogin('user')">Log in as Devotee</button>
      <button class="btn-solid" style="background:transparent;border:1.5px solid var(--marigold);color:var(--marigold);margin-top:10px" onclick="doLogin('organizer')">Log in as Organizer</button>
      <button class="btn-solid" style="background:transparent;border:1.5px solid var(--marigold);color:var(--marigold);margin-top:10px" onclick="doLogin('admin')">Log in as Admin</button>
      <div class="switch-link">Don't have an account? <a onclick="go('signup')">Create one — Signup</a></div>
    </div>
  </div>
  ${footerHTML()}
`;
