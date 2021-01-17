module.exports = (db) => (req, res, next) => {
  req.db = db;
  next();
};
