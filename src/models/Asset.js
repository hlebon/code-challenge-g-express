import { Schema, model } from 'mongoose';

export const AssetSchema = new Schema({
  id: String,
  name: String,
  type: String,
  description: String,
  favorite: Boolean,
  copyLink: String,
  relatedAssets: Array,
});

export const Asset = model('Asset', AssetSchema);
