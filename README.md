# MernShop eCommerce Platform

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

![1](https://user-images.githubusercontent.com/87519278/233793828-2981cdc5-ff6d-4efc-959d-b874825c9267.png) ![2](https://user-images.githubusercontent.com/87519278/233793841-07f8199a-2ea4-43b0-b3d1-6b19f9c6acf7.png)
![3](https://user-images.githubusercontent.com/87519278/233793845-8a4c5cfe-fce7-49f3-a35a-b0bb5647db91.png) ![4](https://user-images.githubusercontent.com/87519278/233793848-d22a40b2-618c-4a61-b09e-4dd0b873a603.png)
![5](https://user-images.githubusercontent.com/87519278/233793850-a62482df-d07d-4400-b0e6-65e749cf4fa6.png) ![6](https://user-images.githubusercontent.com/87519278/233793852-16ca9819-70ab-4ed3-9ce3-0d75eb67c41d.png)
![7](https://user-images.githubusercontent.com/87519278/233793854-997f4117-2838-4da1-8a49-e9718a365ba7.png) ![8](https://user-images.githubusercontent.com/87519278/233793855-14b2deb6-8c76-4e50-9605-85ef1bb74fd1.png)



### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

tom@example.com (Customer)
123456
```
