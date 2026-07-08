/* ============ AUTH ACTIONS (demo) ============ */
function doLogin(role) {
  if (role === "user") { state.role = "user"; state.currentUser = users[0]; toast(`Welcome back, ${users[0].name}!`); go("home"); }
  if (role === "organizer") { state.role = "organizer"; state.currentOrganizer = organizers[0]; toast(`Welcome, ${organizers[0].name} organizer!`); go("orgdash"); }
  if (role === "admin") { state.role = "admin"; toast("Welcome, Admin!"); go("admindash"); }
}

function doSignup() {
  const name = document.getElementById("suName").value || "Devotee";
  const email = document.getElementById("suEmail").value || "devotee@example.com";
  const u = { id: genId(), name, email };
  users.push(u);
  state.role = "user"; state.currentUser = u;
  toast("Account created — welcome to DarshanEase!");
  go("home");
}

function saveTemple(id) {
  const t = temples.find(x => x.id === id);
  t.name = document.getElementById("edName").value;
  t.open = document.getElementById("edOpen").value;
  t.close = document.getElementById("edClose").value;
  t.location = document.getElementById("edAddr").value;
  t.description = document.getElementById("edDesc").value;
  toast("Temple details updated");
  go("orgtemple");
}

function createDarshan() {
  const name = document.getElementById("cdName").value.trim();
  if (!name) { toast("Please enter a darshan name"); return; }
  darshans.push({
    id: genId(), templeId: state.currentOrganizer.templeId,
    name, open: document.getElementById("cdOpen").value || "--", close: document.getElementById("cdClose").value || "--",
    normal: parseInt(document.getElementById("cdNormal").value) || 0,
    vip: parseInt(document.getElementById("cdVip").value) || null,
    description: document.getElementById("cdDesc").value || ""
  });
  toast("Darshan created");
  go("orgdarshans");
}
