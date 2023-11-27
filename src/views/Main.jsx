const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, places, user }) {
  return (
    <Layout title={title} user={user}>
      <h3>Hi</h3>
    </Layout>
  );
};
