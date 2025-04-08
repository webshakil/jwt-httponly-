"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouters_1 = __importDefault(require("./routes/userRouters"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Exact origin, no wildcard
    credentials: true, // Allow cookies
}));
app.use((0, cookie_parser_1.default)());
const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error("Please add your MongoDB URI to .env");
}
mongoose_1.default
    .connect(uri, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use('/api/v1/auth', userRouters_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
