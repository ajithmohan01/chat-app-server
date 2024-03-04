import mongoose from "mongoose";
import { DB_URL } from "./variables";

const db = mongoose.connect(
    Db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('MongoDB connection error:', err);
    } else {
        console.log(DB_URl)
        console.log('DB up and running');
    }
}
)