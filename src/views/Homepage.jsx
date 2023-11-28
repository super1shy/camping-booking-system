const React = require('react');
const Layout = require('./Layout');

module.exports = function Homepage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h3>here list</h3>
    </Layout>
  );
};
