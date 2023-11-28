const React = require('react');
const Layout = require('./Layout');

module.exports = function Homepage({ title, user, places }) {
  return (
    <Layout title={title} user={user}>
      <div className="container places-container">
        {places.map((place) => (
          <div class="card">
            <img
              class="card-img-top"
              src="/img/splash.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href={`/places/${place.id}`} class="btn btn-primary">
                View place
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
