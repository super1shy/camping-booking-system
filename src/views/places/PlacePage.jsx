const React = require('react');
const Layout = require('../Layout');

module.exports = function PlacePage({ title, user, place }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-fluid places-container">
        <div className="place-info-container">
          <div className="column">
            <div className="row">
              <div className="col-8">
                <h3 className="card-title">{place.name}</h3>
                <br />
                <i className="bi bi-geo-alt">{place.Location.fullAddress}</i>
                <br />
                <div className="star-score">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <br />
                  <span>432 reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column place-group-btn">
            <h3 className="card-title place-price">
              ${place.price}
              <span>/nigth</span>
            </h3>
            {place.Favourites.filter((el) => el.user_id === user.id).length >
            0 ? (
              <button data-id={place.id} className="btn like-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="salmon"
                  color="salmon"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </button>
            ) : (
              <button data-id={place.id} className="btn like-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="salmon"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </button>
            )}{' '}
            {'  '}
            <button data-id={place.id} className="btn like-btn share-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-share"
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
                  <a href="/booking">See your bookings</a>
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
