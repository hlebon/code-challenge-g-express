export function paginationMiddleware(req, _, next) {
  let { page = 1, limit = 10 } = req.query;

  page = Math.max(1, parseInt(page));
  limit = Math.max(1, parseInt(limit));
  req.pagination = {
    page,
    limit,
    skip: (page - 1) * limit,
  };

  next();
}
