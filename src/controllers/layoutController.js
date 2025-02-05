import { Layout } from '../models/Layout.js';

export async function getLayout(req, res) {
  try {
    const { page, limit, skip } = req.pagination;

    const items = await Layout.find().skip(skip).limit(limit);
    const total = await Layout.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: items,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
}

export async function getLayoutById(req, res) {
  try {
    const response = await Layout.findById(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}
