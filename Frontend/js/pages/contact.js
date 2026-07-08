renderers.contact = () => `
  <div class="page-wrap container" style="max-width:520px">
    <h2 class="page-title">Contact us</h2>
    <div class="card">
      <div class="field"><label>Name</label><input placeholder="Your name"></div>
      <div class="field"><label>Email</label><input placeholder="you@example.com"></div>
      <div class="field"><label>Message</label><textarea placeholder="How can we help?"></textarea></div>
      <button class="btn-solid" onclick="toast('Message sent — we will get back to you soon.')">Send message</button>
    </div>
  </div>
  ${footerHTML()}
`;
