module.exports = {
  isLoggedIn: (req, res, next) => {
    if(req.user) {
      next()
    } else {
      res.send(401, 'Unauthorized')
    }
  },
  addNewHeader: (req, res, next) => {
    res.setHeader('X-New-Policy', 'Success');
    next();
  }
}