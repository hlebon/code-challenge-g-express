import { Asset } from '../models/Asset.js';

export async function getAssets(req, res) {
  try {
    const { page, limit, skip } = req.pagination;

    const items = await Asset.find().skip(skip).limit(limit);
    const total = await Asset.countDocuments();

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: items,
    });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}

export async function getAssetsByid(req, res) {
  try {
    const response = await Asset.findById(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}
