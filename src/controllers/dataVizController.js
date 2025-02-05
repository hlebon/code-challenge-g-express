import { DataViz } from '../models/DataViz.js';

export async function getDataViz(req, res) {
  try {
    const { page, limit, skip } = req.pagination;

    const items = await DataViz.find().skip(skip).limit(limit);
    const total = await DataViz.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: items,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching data ${error.message}!`, error });
  }
}

export async function getDataVizById(req, res) {
  try {
    const response = await DataViz.findById(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}
