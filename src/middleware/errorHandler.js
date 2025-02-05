export function errorHanlder(err, _req, res, _next) {
  res.status(err.status || 500);
  res.send(err.message);
}
