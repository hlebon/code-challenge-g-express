import { Storyboard } from '../models/Storyboard.js';

export async function getStoryboard(req, res) {
  try {
    const { page, limit, skip } = req.pagination;

    const items = await Storyboard.find().skip(skip).limit(limit);
    const total = await Storyboard.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: items,
    });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: `Error fetching data ${error.message}` });
  }
}

export async function getStoryboardById(req, res) {
  try {
    const response = await Storyboard.findById(req.params.id);

    res.status(200).json({ data: response });
  } catch (error) {
    req.log.error({ error });
    res.status(500).json({ message: 'Error fetching data', error });
  }
}
