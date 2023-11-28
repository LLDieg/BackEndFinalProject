export const isAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else if (
    req.user._id.toString() === req.params.id ||
    req.user.orders.includes(req.param.id)
  ) {
    next();
  } else {
    res.status(401).send({ msg: "unauthorized access!" });
  }
};
