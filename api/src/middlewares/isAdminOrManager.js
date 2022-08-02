const isAdminOrManager = (req, res, next) => {
  if (req.userRole !== "admin" && req.userRole!=='manager' )
    return res.status(401).json({ msg: "Unauthorized" });
  next();
};

module.exports = isAdminOrManager;
