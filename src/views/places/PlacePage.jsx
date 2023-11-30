const React = require('react');
const Layout = require('../Layout');

module.exports = function PlacePage({ title, user, place }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-fluid places-container">
        <div className="place-info-container">
          <div className="column">
            <div>Name: {place.name}</div>
            <div>Capacity: {place.capacity}</div>
            <div>Address: {place.Location.fullAddress}</div>
          </div>
          <div className="column">
            <div>Price: {place.price}</div>
            <button data-id={place.id} className="btn like-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </button>{' '}
            {'  '}
            <button data-id={place.id} className="btn like-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </button>{' '}
            {'  '}
            <button className="btn book-btn" href="#booking">
              <a href="#booking">Book Now</a>
            </button>
          </div>
        </div>

        <div className="main-place-info-container">
          <div className="images-container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <img
                    src={`/img/${place.images[0]}`}
                    alt=""
                    className="img-1"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <img
                      src={`/img/${place.images[1]}`}
                      alt=""
                      className="img-2"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={`/img/${place.images[2]}`}
                      alt=""
                      className="img-3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img src={`/img/${place.images[3]}`} alt="" className="img-4" />
              </div>
            </div>
          </div>

          <div className="additional-info">
            <div className="row">
              <div className="col-3">4.3 Review(500)</div>
              <div className="col-3">edassa</div>
              <div className="col-3">ewcazsc</div>
              <div className="col-3">edwscwde</div>
            </div>
          </div>

          <div className="card overview-card">
            <div className="card-body">
              <div className="card-title">Overview</div>
              <div className="card-text">{place.overview}</div>
            </div>
          </div>

          <div className="card booking-card" id="booking">
            <div className="card-body booking-card-body">
              <form method="post" className="booking-form" data-id={place.id}>
                <div className="row">
                  <div className="col">
                    <label className="form-label">Check In Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Check Out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <button
                    className="btn book-btn booking-btn"
                    type="submit"
                    data-id={place.id}
                  >
                    Book Now
                  </button>
                </div>
              </form>

              <div className="line-container">
                <button className="btn book-btn payment-btn" type="submit">
                  Pay Now
                </button>
                {'    '}
                <button className="btn book-btn">
                  <a href={`/booking/${user.id}`}>See your bookings</a>
                </button>
              </div>
            </div>
          </div>
          <span className="error-feedback text-center">
            Please, check dates again. There must be a mistake
          </span>

          <div className="row">
            <span>Location/Map</span>
            <button>View on google maps</button>
          </div>
        </div>
      </div>
      <script src="/js/booking.js" />
    </Layout>
  );
};
