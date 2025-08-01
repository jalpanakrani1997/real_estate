const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');
const connectDB = require("./config/db");

// Routes
const videoRoutes = require('./Routes/videoRoutes');
const Projectrouter = require('./Routes/Projectroutes');
const brochurerouter = require('./Routes/brochureRequestRoutes');
const Contactrouter = require('./Routes/contactRoutes');
const uploadRoutes = require("./Routes/uploadRoutes");
const imageRoutes = require("./Routes/imageRoutes");
const mediaRoutes = require("./Routes/mediaRouter");
const sliderRoutes = require("./Routes/sliderRouter");
const teamRoutes = require("./Routes/teamRouter");
const inquiryRoutes = require("./Routes/inquiryRoutes");
const serchingRoutes = require("./Routes/serchingRoutes");
const blogRouter = require("./Routes/blogRouter");
const plottingFloralRoutes = require("./Routes/plottingFloralRoutes");
const plottingRouter = require("./Routes/plottingRouter");
const pricingRequestRoutes = require("./Routes/pricingRequestRoutes");

// Chatbot
const { getChat, handleChat } = require('./chatbot');

// App setup
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Make uploads folder public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ API Routes
app.use('/api', videoRoutes);
app.use('/api', Projectrouter);
app.use('/api', brochurerouter);
app.use('/api', Contactrouter);
app.use('/api', uploadRoutes);
app.use('/api', imageRoutes);
app.use('/api', mediaRoutes);
app.use('/api', sliderRoutes);
app.use('/api', teamRoutes);
app.use('/api', inquiryRoutes);
app.use('/api', serchingRoutes);
app.use('/api', blogRouter);
app.use('/api', plottingFloralRoutes);
app.use('/api', plottingRouter);
app.use('/api', pricingRequestRoutes);

// ✅ Chatbot Routes
app.get('/api/chat', getChat);
app.post('/api/chat', handleChat);

// ✅ Start Server
app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});
