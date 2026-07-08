/* ============ BOOKING MODAL ============ */

let pendingBooking = null;

function openBooking(templeId, darshanId) {

    const t = temples.find(temp => temp.id === templeId);
    const d = darshans.find(ds => ds.id === darshanId);

    if (state.role !== "user") {
        toast("Please log in as a devotee to book.");
        go("login");
        return;
    }

    pendingBooking = { t, d };

    document.getElementById("bookingModalRoot").classList.remove("hidden");
    document.getElementById("bmTitle").textContent =
        `Book ${d.name} — ${t.name}`;
}

function closeBooking() {
    document.getElementById("bookingModalRoot").classList.add("hidden");
}

function confirmBooking() {

    const { t, d } = pendingBooking;

    const type = document.getElementById("bmType").value;

    const qty = parseInt(document.getElementById("bmQty").value) || 1;

    const date =
        document.getElementById("bmDate").value ||
        new Date().toLocaleDateString();

    const unitPrice =
        type === "vip"
            ? (d.vip || 0)
            : (d.normal || 0);

    const booking = {

        id: genId(),

        templeId: t.id,

        templeName: t.name,

        templeImage: t.image,

        darshanName: d.name,

        date: date,

        timing: `${d.open} – ${d.close}`,

        qty: qty,

        price: unitPrice * qty,

        userName: state.currentUser.name,

        accent: t.accent
    };

    bookings.unshift(booking);

    closeBooking();

    toast("Darshan booked successfully!");

    go("mybookings");
}

function bookingModalHTML() {

    return `
<div id="bookingModalRoot"
     class="hidden"
     style="
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.55);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:1000;
">

    <div class="card" style="max-width:420px;width:92%;">

        <h3 id="bmTitle"
            style="margin-bottom:18px;color:var(--maroon-dark)">
        </h3>

        <div class="field">

            <label>Darshan Type</label>

            <select id="bmType">
                <option value="normal">Normal Darshan</option>
                <option value="vip">VIP Darshan</option>
            </select>

        </div>

        <div class="field">

            <label>Date</label>

            <input
                id="bmDate"
                type="date">

        </div>

        <div class="field">

            <label>Number of Tickets</label>

            <input
                id="bmQty"
                type="number"
                min="1"
                value="1">

        </div>

        <div style="
            display:flex;
            gap:12px;
            margin-top:20px;
        ">

            <button
                class="btn-ghost"
                style="flex:1"
                onclick="closeBooking()">

                Cancel

            </button>

            <button
                class="btn-primary"
                style="flex:1"
                onclick="confirmBooking()">

                Confirm Booking

            </button>

        </div>

    </div>

</div>
`;
}