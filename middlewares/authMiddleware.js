module.exports = function authMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const { user } = req.session;
    if (!user) {
      res.redirect('/login');
    }
    next();
  } catch (error) {
    res.redirect('/login');
  }
};
