import { Asset } from '../models/Asset.js';
import { DataViz } from '../models/DataViz.js';
import { Storyboard } from '../models/Storyboard.js';
import { Kpi } from '../models/Kpi.js';

export async function getLibrary(_, res) {
  try {
    // It should return from elastic search or another search engine
    // just for demonstration purposes.
    const [assets, dataviz, storyboard, kpi] = await Promise.all([
      Asset.find(),
      DataViz.find(),
      Storyboard.find(),
      Kpi.find(),
    ]);

    const combined = [...assets, ...dataviz, ...storyboard, ...kpi];

    res.json(combined);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching library items' });
  }
}
