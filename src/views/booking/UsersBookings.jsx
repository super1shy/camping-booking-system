const React = require('react');
const Layout = require('../Layout');

module.exports = function UsersBookings({ title, user, currenUsersBookings }) {
  return (
    <Layout title={title} user={user}>
      <div className="container booked-places-container">
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
                  {booking.status ? (
                    <h3 className="card-title place-price">
                      Paid: $
                      {parseInt(
                        (new Date(booking.checkOutDate) -
                          new Date(booking.checkInDate)) /
                          (1000 * 60 * 60 * 24),
                        10
                      ) * booking.Place.price}
                    </h3>
                  ) : (
                    <h3 className="card-title place-price">
                      To be paid: $
                      {parseInt(
                        (new Date(booking.checkOutDate) -
                          new Date(booking.checkInDate)) /
                          (1000 * 60 * 60 * 24),
                        10
                      ) * booking.Place.price}
                    </h3>
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="place-btn-group">
                  <button className="btn book-btn">
                    <a href="#">Details</a>
                  </button>
                  {booking.status ||
                  new Date(booking.createdAt).setHours(0, 0, 0, 0) !==
                    new Date().setHours(0, 0, 0, 0) ? (
                    <>
                      <button
                        className="btn book-btn cancel-btn"
                        data-id={booking.id}
                        disabled
                      >
                        Cancel
                      </button>
                      <button
                        className="btn book-btn booking-btn"
                        data-id={booking.id}
                        disabled
                      >
                        Pay Now
                      </button>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                  {/* <button
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
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
