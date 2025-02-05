# KPI Dashboard Express

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Node.js installed
- Yarn package manager installed
- MongoDB instance running

### Installation

1. Clone the repository:

   ```bash
   git clone repo_url kpi-dashboard-express
   cd kpi-dashboard-express
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   MONGODB_URL=your_mongodb_url
   PORT=your_port
   ```

4. Seed the database with initial data:
   ```bash
   node seed.js
   ```

### Running the Project

Start the server:

```bash
yarn start
```

Your application should now be running and accessible at `http://localhost:your_port`.
