import { Schema, model } from 'mongoose';

export const StoryboardSchema = new Schema({
  id: String,
  name: String,
  coupledKPIs: Array,
  applicableAffiliates: Array,
  requestAccess: Boolean,
  description: String,
});

export const Storyboard = model('Storyboard', StoryboardSchema);
