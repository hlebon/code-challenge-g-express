import { Schema, model } from 'mongoose';

export const DataVizSchema = new Schema({
  id: String,
  name: String,
  applicableKPIs: Array,
  context: String,
  chart: Object,
  description: String,
});

export const DataViz = model('DataViz', DataVizSchema);
