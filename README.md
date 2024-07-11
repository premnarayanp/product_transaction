Backend (Node.js and Express)
1. Project Setup
Initialize the project:
sh
Copy code
mkdir product_transaction
cd product_transaction
npm init -y
npm install express mongoose axios
npm install nodemon --save-dev
2. Project Structure
lua
Copy code
product_transaction/
├── src/
│   ├── config/
│   │   └── mongoose.js
│   ├── features/
│   │   └── product/
│   │       ├── product.schema.js
│   │       ├── product.controller.js
│   │       ├── product.repository.js
│   │       └── product.routes.js
├── server.js
└── package.json

4.dependancy:-    
{
    "name": "company_repository_api",
    "version": "1.0.0",
    "type": "module",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "jest",
        "start": "nodemon index.js"
    },
    "devDependencies": {
        "@babel/preset-env": "^7.2.0",
        "@babel/runtime": "7.13.8",
        "babel-cli": "^6.26.0",
        "babel-preset-env": "^1.7.0",
        "jest": "^29.5.0",
        "nodemon": "^2.0.22",
        "superagent": "^8.0.9",
        "supertest": "^6.3.3",
        "typescript": "4.1.3"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "axios": "^1.7.2",
        "cors": "^2.8.5",
        "dotenv": "^16.1.4",
        "express": "^4.18.2",
        "mongoose": "^7.1.2"
    }
}

5. MongoDB Configuration
src/config/mongoose.js: Connect to MongoDB.
6 Product Schema
src/features/product/product.schema.js: Define the schema for products.
7. Product Controller
src/features/product/product.controller.js:
Initialize the database with transactions from an external JSON.
Fetch transactions based on month, search criteria, and pagination.
Fetch statistics for the selected month.
Fetch bar chart data for price ranges and number of items.
8. Product Routes
src/features/product/product.routes.js: Define the routes for initializing the database, fetching transactions, statistics, and bar chart data.
9. Server Setup
server.js: Set up Express server, connect to MongoDB, and define API routes.






Frontend (React and Redux)
1. Project Setup
Create the React project:
sh
Copy code
npx create-react-app client
cd client
npm install redux react-redux axios chart.js react-chartjs-2



3. Project Structure
css
Copy code
client/
├── src/
│   ├── api/
│   │   └── index.js
│   ├── components/
│   │   ├── Searchbar.js
│   │   ├── TransactionsTable.js
│   │   ├── TransactionsStatistics.js
│   │   └── TransactionsBarChart.js
│   ├── pages/
│   │   └── Home.js
│   ├── redux/
│   │   ├── actions/
│   │   │   ├── actionType.js
│   │   │   └── ProductActions.js
│   │   ├── reducers/
│   │   │   ├── rootReducer.js
│   │   │   └── productReducer.js
│   │   └── store/
│   │       └── configureStore.js
│   ├── styles/
│   └── constants/
├── package.json

4. package.json:-  

{
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@reduxjs/toolkit": "^2.2.6",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "ajv": "^8.16.0",
        "axios": "^1.7.2",
        "chart.js": "^3.6.0",
        "react": "^18.3.1",
        "react-chartjs-2": "^3.0.0",
        "react-dom": "^18.3.1",
        "react-redux": "^9.1.1",
        "react-scripts": "5.0.1",
        "react-toast-notifications": "^2.5.1",
        "redux": "^5.0.1",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}

5. API Definitions
src/api/index.js: Define API calls to fetch transactions, statistics, and bar chart data.
6. Redux Setup
src/redux/actions/actionType.js: Define action types.
src/redux/actions/ProductActions.js: Define action creators for fetching transactions, statistics, and bar chart data.
src/redux/reducers/productReducer.js: Define the reducer to handle actions.
src/redux/reducers/rootReducer.js: Combine all reducers.
src/redux/store/configureStore.js: Configure and create the Redux store.
7. Components
src/components/Searchbar.js:

Search for transactions based on the input.
Update the displayed transactions list based on the search input.
src/components/TransactionsTable.js:

Display a paginated table of transactions.
Fetch and display transactions based on the selected month, search input, and current page.
src/components/TransactionsStatistics.js:

Display total amount of sale, total sold items, and total unsold items for the selected month.
src/components/TransactionsBarChart.js:

Display a bar chart showing price ranges and the number of items in those ranges for the selected month.
6. Page
src/pages/Home.js:
Integrate the search bar, transactions table, statistics, and bar chart components.
Handle state management for the selected month and search input.
7. Store Setup
Configure the Redux store in src/redux/store/configureStore.js.
