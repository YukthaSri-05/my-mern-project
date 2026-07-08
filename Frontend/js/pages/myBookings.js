renderers.mybookings = () => {

    const mine = bookings.filter(
        b => b.userName === (state.currentUser?.name || "")
    );

    return `
    <div class="page-wrap container">

        <h2 class="page-title teal-title">
            My Bookings
        </h2>

        ${
            mine.length
                ? mine.map(b => bookingCardHTML(b)).join("")
                :
                `
                <div class="empty-state">
                    <h3>No bookings yet</h3>

                    <p>
                        Your booked darshans will appear here
                        with a QR entry pass.
                    </p>

                    <button
                        class="link-btn"
                        style="margin-top:15px"
                        onclick="go('temples')">

                        Browse Temples

                    </button>

                </div>
                `
        }

    </div>

    ${footerHTML()}
    `;
};