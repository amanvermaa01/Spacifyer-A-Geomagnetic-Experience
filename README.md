🛰️ Spacifyer – A Geomagnetic Experience

A modern, interactive web application built for the NASA Space Apps Challenge 2024, designed to help users experience, visualize, and understand geomagnetic storms and auroras through engaging UI/UX, scientific insights, and historical space weather data.








🌌 Overview

Spacifyer transforms complex space weather and geomagnetic data into an immersive digital experience, helping users learn:

What causes auroras

How solar storms interact with Earth

The levels of geomagnetic disturbances

Where and when auroras are more likely visible

This application serves as a learning tool and simulation platform rather than a forecast system.

🌟 Key Features

🎯 Aurora Visibility Zone Map

🌍 Real-time geomagnetic activity visualization

🔭 Educational modules: Solar wind, CMEs, Magnetosphere

📈 Kp-Index History and Live Tracking

✨ Aurora Simulation Interface (UI-Based Experience)

📱 Responsive and Mobile-Friendly

🧠 Engaging, gamified learning experience

🧩 Challenge Purpose

This project addresses the NASA Space Apps theme of making Earth–space relationships more understandable and accessible, especially regarding geomagnetic storms and auroras—a natural phenomenon rarely experienced by many.

🚀 Quick Start Guide
Prerequisites

Ensure the following are installed:

Node.js 16+

npm or yarn

(Optional) Figma for editing UI design

Installation

Clone the repository

git clone [https://github.com/amanvermaa01/spacifyer-geomagnetic-experience.git](https://github.com/amanvermaa01/Spacifyer-A-Geomagnetic-Experience)
cd spacifyer-geomagnetic-experience


Install dependencies

npm install


Run the development server

npm start

🛠️ Tech Stack
Layer	Technology
Frontend	React + TypeScript
UI/UX Design	Figma
Visualization	Leaflet / D3 (optional future enhancement)
APIs	NASA DONKI, NOAA KP-Index API (if integrated)
Styling	TailwindCSS / Custom CSS
📊 Data Methodology

Spacifyer interprets and visualizes geomagnetic activity using:

Kp Index Levels

Solar Wind Speed

Geomagnetic Disturbance Metrics

Solar Flares & CME Reports (NASA/NOAA sources)

If live data isn't available, simulated demo data ensures full functionality.

🎨 User Interface Approach

🌈 Aurora-inspired gradients

🪩 Glass-morphism panels

🧭 Earth-themed geospatial layout

🧪 Optimized visual hierarchy for engagement over raw numbers

Screens:

Landing Page

Aurora Activity Dashboard

Educational Experience Section

Interactive Simulation

🔧 Configuration

Create an optional .env file:

REACT_APP_NASA_API_URL=https://api.nasa.gov
REACT_APP_NOAA_KP_API=https://services.swpc.noaa.gov

🧪 Testing
npm test


Manual checklist:

 Map interactions

 Aurora activity animation

 API Responses / Demo Mode

 Mobile responsive view

 Accessibility and UI transitions

🌐 Browser Support
Browser	Supported
Chrome	✅
Firefox	✅
Safari	✅
Edge	✅
🤝 Contributing

We welcome improvements!

fork → create feature branch → commit → PR

📄 License

This project is licensed under the MIT License.

🙏 Acknowledgments

NASA Space Apps Challenge Team

NASA DONKI / CDAWeb

NOAA Space Weather Prediction Center

React Community + Open Source Libraries

✨ Built with creativity, curiosity, and space-inspired passion for NASA Space Apps Challenge 2024.
Not for operational forecasting or real-time space safety usage.
