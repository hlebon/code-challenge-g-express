import { Schema, model } from 'mongoose';

export const KpiSchema = new Schema({
  id: String,
  name: String,
  businessQuestions: Array,
  metricID: String,
  description: String,
  calculation: String,
  visuals: Array,
  applicableAffiliates: Array,
});

export const Kpi = model('Kpi', KpiSchema);
