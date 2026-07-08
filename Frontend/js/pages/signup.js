renderers.signup = () => `
  <div class="page-wrap container">
    <div class="form-card">
      <h2>Create your account</h2>
      <div class="field"><label>Full name</label><input id="suName" placeholder="Your name"></div>
      <div class="field"><label>Email address</label><input id="suEmail" placeholder="Email address"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="Password"></div>
      <button class="btn-solid" onclick="doSignup()">Create account</button>
      <div class="switch-link">Already have an account? <a onclick="go('login')">Log in</a></div>
    </div>
  </div>
  ${footerHTML()}
`;
