This is a fully responsive e-commerce application built with **Next.js App Router** and **TypeScript**, styled using **Tailwind CSS**. The app covers essential e-commerce features using native and built-in solutions — without any UI libraries.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Jest + React Testing Library**
- **Fake Store API**
- **LocalStorage** for shopping cart persistence

## Installation & Running the App

Clone the repository:

```bash
git clone https://github.com/upesic/ecommerce-challenge.git
cd ecommerce-challenge

```
Install dependencies:

```bash
npm install
```
Before running the app, rename the provided .example-env file to .env:
```bash
mv .example-env .env
```
Run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

To run tests:
```bash
npm run test
```
Tests are written using **Jest** and **React Testing Library**.
Test coverage includes both server and client components, with mocks for API calls and localStorage behavior.