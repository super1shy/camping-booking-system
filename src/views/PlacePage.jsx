const React = require('react');
const Layout = require('./Layout');

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
            <button>Like</button>
            <button>Share</button>
            <a className="btn book-btn" href="#booking">
              Book Now
            </a>
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

          <div className="card">
            <div className="card-body">
              <div className="card-title">Overview</div>
              <div className="card-text">{place.overview}</div>
            </div>
          </div>

          <div className="card" id="booking">
            <div className="card-body">
              <form method="post" className="booking-form" data-id={place.id}>
                <div className="row">
                  <div className="col-4">
                    <label className="form-label">Check In Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <label className="form-label">Check Out Date</label>
                    <input
                      type="date"
                      name="checkOutDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <button
                      className="btn book-btn booking-btn"
                      type="submit"
                      data-id={place.id}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

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
