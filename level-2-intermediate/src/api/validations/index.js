module.exports = {
  checkRequireLogin: (req, res, next) => {
    const {username, password} = req.body;
    if(!username) {
      return [{error: 'username missing...'}, null]
    }
    next();
  }
}