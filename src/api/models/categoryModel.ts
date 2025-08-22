import mongoose from 'mongoose';
import {Category} from '../../types/Category';

const CategorySchema = new mongoose.Schema<Category>({
  category_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
  },
});

export default mongoose.model<Category>('Category', CategorySchema);
