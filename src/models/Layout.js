import { Schema, model } from 'mongoose';

export const LayoutSchema = new Schema({
  id: String,
  name: String,
  pages: Number,
  KPIsUsed: Array,
  preview: String,
  description: String,
});

export const Layout = model('Layout', LayoutSchema);
