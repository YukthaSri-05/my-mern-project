/* ============ NAV RENDERING ============ */
function renderNav() {
  const topbar = document.getElementById("topbar");
  const navLinks = document.getElementById("navLinks");
  const roleTag = document.getElementById("roleTag");
  topbar.classList.remove("teal");
  let html = "";
  if (state.role === "guest") {
    roleTag.textContent = "Book your visit";
    html = `
      <a onclick="go('home')" class="${navActive('home')}">Home</a>
      <a onclick="go('temples')" class="${navActive('temples')}">Temples</a>
      <a onclick="go('about')" class="${navActive('about')}">About</a>
      <a onclick="go('services')" class="${navActive('services')}">Services</a>
      <a onclick="go('contact')" class="${navActive('contact')}">Contact us</a>
      <a class="pill-btn" onclick="go('login')">Login</a>`;
  } else if (state.role === "user") {
    topbar.classList.add("teal"); roleTag.textContent = "Devotee dashboard";
    html = `
      <a onclick="go('home')" class="${navActive('home')}">Home</a>
      <a onclick="go('temples')" class="${navActive('temples')}">Temples</a>
      <a onclick="go('mybookings')" class="${navActive('mybookings')}">My Bookings</a>
      <a onclick="logout()">Logout</a>
      <span class="user-chip">${esc(state.currentUser?.name || "Devotee")}</span>`;
  } else if (state.role === "organizer") {
    topbar.classList.add("teal"); roleTag.textContent = "Organizer console";
    html = `
      <a onclick="go('orgdash')" class="${navActive('orgdash')}">Dashboard</a>
      <a onclick="go('orgtemple')" class="${navActive('orgtemple')}">My Temple</a>
      <a onclick="go('orgdarshans')" class="${navActive('orgdarshans')}">Darshans</a>
      <a onclick="go('orgbookings')" class="${navActive('orgbookings')}">Bookings</a>
      <a onclick="logout()">Logout</a>
      <span class="user-chip">${esc(state.currentOrganizer?.name || "")}</span>`;
  } else if (state.role === "admin") {
    topbar.classList.add("teal"); roleTag.textContent = "Admin console";
    html = `
      <a onclick="go('admindash')" class="${navActive('admindash')}">Dashboard</a>
      <a onclick="go('adminusers')" class="${navActive('adminusers')}">Users</a>
      <a onclick="go('adminorgs')" class="${navActive('adminorgs')}">Organizers</a>
      <a onclick="logout()">Logout</a>
      <span class="user-chip">Elf</span>`;
  }
  navLinks.innerHTML = html;
}

function navActive(v) {
  return state.view === v ? "active" : "";
}

function logout() {
  state.role = "guest"; state.currentUser = null; state.currentOrganizer = null;
  toast("Signed out"); go("home");
}

/* ============ ROUTER ============ */
function go(view, payload) {
  state.view = view;
  if (payload) Object.assign(state, payload);
  renderNav();
  const app = document.getElementById("app");
  app.innerHTML = renderers[view] ? renderers[view]() : `<div class="page-wrap container">Not found</div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
