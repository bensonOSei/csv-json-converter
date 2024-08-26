import App from "./src/App";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;


App.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
})
