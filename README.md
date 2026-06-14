<<<<<<< HEAD
# task
new task
=======
# Catering Search Platform

A small full-stack catering search platform built with an Express backend and a Next.js frontend. The app lets users browse caterers, search by name, filter by price per plate, and add new caterers through a REST API.

## Tech Stack

- Backend: Node.js, Express, CORS, dotenv
- Frontend: Next.js (App Router), React, TypeScript
- Storage: JSON file storage

## Project Structure

```text
backend/
  src/
    app.js
    server.js
    routes/
    controllers/
    services/
    models/
    middlewares/
    utils/
    data/
frontend/
  app/
  components/
  lib/
README.md
```

## Backend Setup

1. Go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create an environment file from the example:

```bash
copy .env.example .env
```

4. Start the backend in development mode:

```bash
npm run dev
```

The backend runs on `http://localhost:5000` by default.

## Frontend Setup

1. Go to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create an environment file from the example:

```bash
copy .env.example .env.local
```

4. Start the frontend:

```bash
npm run dev
```

The frontend runs on `http://localhost:3000` by default.

## Environment Variables

### Backend

```env
PORT=5000
API_BASE_URL=/api
```

### Frontend

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

## API Endpoints

### Health Check

- `GET /api/health`

### Caterers

- `GET /api/caterers`
- `GET /api/caterers/:id`
- `POST /api/caterers`

## Sample POST Request Body

```json
{
  "name": "Celebration Kitchen",
  "location": "Hyderabad",
  "pricePerPlate": 390,
  "cuisines": ["North Indian", "Italian"],
  "rating": 4.4
}
```

## cURL Examples

### Get health status

```bash
curl http://localhost:5000/api/health
```

### Get all caterers

```bash
curl http://localhost:5000/api/caterers
```

### Get caterer by id

```bash
curl http://localhost:5000/api/caterers/1
```

### Create caterer

```bash
curl -X POST http://localhost:5000/api/caterers \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Celebration Kitchen\",\"location\":\"Hyderabad\",\"pricePerPlate\":390,\"cuisines\":[\"North Indian\",\"Italian\"],\"rating\":4.4}"
```

## How to Run Locally

1. Start the backend from `backend/` using `npm run dev`
2. Start the frontend from `frontend/` using `npm run dev`
3. Open `http://localhost:3000/caterers`

## Deployment Notes

- Frontend can be deployed to Vercel by setting `NEXT_PUBLIC_API_BASE_URL` to the deployed backend URL.
- Backend can be deployed to Render, EC2, or any Node-compatible host by setting `PORT` and `API_BASE_URL`.
- If you move away from JSON storage in production, swap the model layer with a database-backed implementation.
>>>>>>> 67afc63 (Initial commit)
