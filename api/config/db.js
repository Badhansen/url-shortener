import { set, connect } from 'mongoose';
import dotenv from 'dotenv';

set('strictQuery', true);

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;
