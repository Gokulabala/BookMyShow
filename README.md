📖 Overview
This project is a fully functional BookMyShow clone, developed using the MERN stack – MongoDB, Express.js, React, and Node.js. It includes complete features like movie listing, theatre management, show scheduling, seat booking, user authentication, and a simulated payment flow.

The application is structured into two main layers:

Frontend: built with React, Redux, and Tailwind CSS

Backend: built with Node.js, Express, and MongoDB (Mongoose ODM)

✨ Features
🔐 User Authentication
Login and registration with JWT

Role-based access control (admin/user)

🎬 Movie & Theatre Management (Admin)
Add, update, delete movies and theatres

Schedule shows for specific dates and times

Manage theatre-to-movie associations

🪑 Seat Booking & Checkout (User)
Browse movies and available shows

Real-time seat selection

Booking confirmation

Simulated payment flow (ready for Razorpay/Stripe integration)

📅 Booking Management
Users can view their past bookings

Admin can view booking records

🗂️ Project Structure
bash
Copy
Edit
BookMyShow/
├── client/                       # React frontend
│   ├── public/                  
│   ├── src/
│   │   ├── apiCalls/            # API abstraction layer
│   │   ├── pages/
│   │   │   ├── Admin/           # Admin dashboard: Movies, Theatres
│   │   │   ├── Home/            # Home page (movie listings)
│   │   │   ├── Login/           # Login page
│   │   │   ├── Profile/         # User profile and booking history
│   │   │   ├── Shows/           # Show listing & seat selection
│   │   │   ├── BookShow.js      # Booking component
│   │   ├── components/          # Shared UI components (e.g., Button.js)
│   │   ├── redux/               # Redux slices (user, loader)
│   │   ├── stylesheets/         # Tailwind CSS custom styles
│   │   ├── ProtectedRoute.js    # Route guard for auth
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                      # Express backend
│   ├── config/                  # DB connection config
│   ├── middleware/             # Auth middleware
│   ├── models/                 # Mongoose schemas (User, Movie, Booking, etc.)
│   ├── routes/                 # Express routers
│   │   ├── bookingRoute.js
│   │   ├── movieRoute.js
│   │   ├── theatreRoute.js
│   │   └── userRoute.js
│   ├── server.js               # Entry point
│   └── .env
├── README.md

⚙️ Getting Started
✅ Prerequisites
Node.js (v16+)

MongoDB installed locally or use Atlas

(Optional) Razorpay/Stripe account for future payment integration

🔧 Installation
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Gokulabala/BookMyShow.git
cd BookMyShow
2. Backend Setup
bash
Copy
Edit
cd server
npm install
cp .env.example .env  # Fill with your Mongo URI and JWT secret
.env file example:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookmyshow
JWT_SECRET=your_jwt_secret
Run the backend:

bash
Copy
Edit
npm start
3. Frontend Setup
bash
Copy
Edit
cd ../client
npm install
npm start
Frontend runs on: http://localhost:3000

🔐 API Overview
Method	Endpoint	Description
POST	/api/users/login	User login
POST	/api/users/register	User registration
GET	/api/movies	Get all movies
POST	/api/movies	Add a new movie (admin)
GET	/api/theatres	Get all theatres
POST	/api/theatres	Add theatre (admin)
POST	/api/shows	Add new show schedule (admin)
GET	/api/bookings/:id	View booking by user
POST	/api/bookings	Make a booking

🖼️ UI Pages (React)
/ – Home page (list all movies)

/login – Login page

/profile – Booking history

/admin/movies – Admin movie dashboard

/admin/theatres – Admin theatre dashboard

/book-show/:showId – Book seats for a specific show

📌 Highlights
Fully modular MVC architecture

JWT Auth + Role-based access

Responsive UI using Tailwind CSS

Centralized Redux state for user/session handling

Scalable MongoDB models

📈 Future Enhancements
Real payment integration (Stripe/Razorpay)

Email notifications (Nodemailer)

Redis-based seat locking (to avoid overbooking)

Unit + integration testing

Docker setup for containerization

CI/CD pipeline for deployment

🤝 Contributing
We welcome contributions!

Fork the repo

Create your branch: git checkout -b feature/new-feature

Commit changes: git commit -m "Add new feature"

Push to your fork

Open a PR

Thanks