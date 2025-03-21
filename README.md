# KPI Dashboard Express

## Getting Started

Follow these steps to set up and run the project:

### Installation

1. Clone the repository:

   ```bash
   git clone repo_url kpi-dashboard-express
   cd kpi-dashboard-express
   ```

2. Copy the contents of the env-example file into a new .env file to configure your environment variables:

   ```env
   MONGODB_URL=your_mongodb_url
   PORT=your_port
   ```

3. Run Docker:

   ```bash
   docker-compose build
   docker-compose up
   ```

4. Seed the database with initial data:
   ```bash
   docker exec -it kpi-dashboard-express-app-1 yarn seed
   ```

Your application should now be running and accessible at `http://localhost:your_port`, It should be `3000`
