import app from "./app.js";
import connectDB from "./data/database.js";



connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.PORT} ON ${process.env.NODE_ENV}. Subhadip the link is: http://localhost:${process.env.PORT}`);
});
