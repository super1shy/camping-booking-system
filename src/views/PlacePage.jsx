const React = require('react');
const Layout = require('./Layout');

module.exports = function PlacePage({ title, user, place }) {
  return (
    <Layout title={title} user={user}>
      <div className="container places-container">
        <div>Capacity: {place.capacity}</div>
        <div>Price: {place.price}</div>
        <div class="w-100">
          <form method="post" class="booking-form" data-id={place.id}>
            <label>Start date:</label>
            <input
              type="date"
              name="checkInDate"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
            <label>End date:</label>
            <input
              type="date"
              name="checkOutDate"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
            <button type="submit" className="book-btn" data-id={place.id}>
              Book now
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
