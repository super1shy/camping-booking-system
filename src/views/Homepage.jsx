const React = require('react');
const Layout = require('./Layout');

module.exports = function Homepage({ title, user, places }) {
  return (
    <Layout title={title} user={user}>
      <div className="container places-container">
        {places.map((place) => (
          <div className="card">
            <img
              className="card-img-top"
              src={place.images ? `/img/${place.images[0]}` : '/img/splash.jpg'}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.overview}</p>
              <a href={`/places/${place.id}`} className="btn btn-primary">
                View place
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
