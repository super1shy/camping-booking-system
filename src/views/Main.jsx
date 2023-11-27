const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, places, user }) {
  return (
    <Layout title={title} user={user}>
      {/* here's object, have iterate */}
      {places}
    </Layout>
  );
};
