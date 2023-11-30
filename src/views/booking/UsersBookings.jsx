const React = require('react');
const Layout = require('../Layout');

module.exports = function UsersBookings({ title, user, currenUsersBookings }) {
  return (
    <Layout title={title} user={user}>
      <div className="container places-container">
        {currenUsersBookings.map((booking) => (
          <div className="card">
            <img
              className="card-img-top"
              src={
                booking.Place.images
                  ? `/img/${booking.Place.images[0]}`
                  : '/img/splash.jpg'
              }
              alt="Card image cap"
            />

            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h3 className="card-title">{booking.Place.name}</h3>
                  <i className="bi bi-geo-alt">
                    {booking.Place.Location.fullAddress}
                  </i>
                  <div className="star-score">
                    <span>Check In Date: {booking.checkInDate}</span>
                    <br />
                    <span>Check Out Date: {booking.checkOutDate}</span>
                  </div>
                </div>
                <div className="col-4">
                  <h3 className="card-title place-price">
                    Full Price: ${booking.Place.price}
                  </h3>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="place-btn-group">
                  <button className="btn book-btn">
                    <a href="#">Details</a>
                  </button>
                  <button
                    className="btn book-btn cancel-btn"
                    data-id={booking.id}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn book-btn booking-btn"
                    data-id={booking.id}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
