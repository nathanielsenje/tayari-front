# HiDoc - Healthcare Connection Platform

HiDoc is a comprehensive healthcare connection platform designed to bridge the gap between patients and healthcare professionals. Focusing on women's health, children's psychology, and mental health, HiDoc provides a user-friendly interface for booking appointments, accessing health resources, and participating in community forums.

## Features

- Doctor profiles and appointment booking system
- User authentication and profile management
- Health articles and resources
- Community forums for health discussions
- Responsive design for mobile and desktop use

## Technical Stack

- Frontend: React.js with Hooks
- UI Framework: Now UI Kit React (based on Bootstrap 4)
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0 or later)

## Installation and Setup

To get HiDoc running locally, follow these steps:

1. Clone the repository:   ```
   git clone https://github.com/yourusername/hidoc.git
   cd hidoc   ```

2. Install dependencies:   ```
   npm install   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:   ```
   REACT_APP_API_URL=http://localhost:5000
   MONGODB_URI=mongodb://localhost:27017/hidoc
   JWT_SECRET=your_jwt_secret_here   ```

4. Start the development server:   ```
   npm start   ```

5. Open your browser and visit `http://localhost:3000`

## Database Schema

The application uses the following main collections in MongoDB:

- doctors
- users
- bookings
- forumPosts
- forumReplies
- articles

For detailed schema information, refer to the `schema.json` file in the project root.

## API Endpoints

- `/api/doctors`: CRUD operations for doctors
- `/api/users`: User registration and authentication
- `/api/bookings`: Appointment booking and management
- `/api/forums`: Forum post and reply management
- `/api/articles`: Health article management

Detailed API documentation is available in the `/docs` directory.

## Contributing

Contributions to HiDoc are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/hidoc](https://github.com/yourusername/hidoc)

## Acknowledgements

- [Now UI Kit React](https://demos.creative-tim.com/now-ui-kit-react/#/index)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
