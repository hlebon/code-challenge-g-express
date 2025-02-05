import { connect } from 'mongoose';

export const connectDB = async (db) => {
  try {
    await connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};
