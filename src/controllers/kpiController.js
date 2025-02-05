import { Kpi } from '../models/Kpi.js';

export async function getKPI(req, res) {
  try {
    const { page, limit, skip } = req.pagination;

    const items = await Kpi.find().skip(skip).limit(limit);
    const total = await Kpi.countDocuments();

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

export async function getKPIById(req, res) {
  try {
    const response = await Kpi.findById(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}
