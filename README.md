## Overview
UW-Found provides a centralized platform for managing lost-and-found items for university students

## Technologies

- Next.js
- JavaScript
- Tailwind CSS
- Supabase (Authentication, PostgreSQL Database)
- Vercel (Deployment)

## How it works

1. Users authenticate using Supabase Auth
2. Posters upload lost items with relevant details
3. Items appear publicly as Unclaimed
4. Other students submit claims
5. Posters review claims and accept or reject them
6. Students are notified of claim outcomes and any follow-up details supplied by the poster.

## How to run locally

Clone the repository and install the dependencies:
```
git clone https://github.com/Theni1/CarDetect.git
cd CarDetect
npm install
```
Create a local `.env.local` file with the following:
```
NEXT_PUBLIC_SUPABASE_URL=your_api_key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_api_key
```
Set up Supabase (Auth + Database)

1. Create a new Supabase project.
2. Enable **Email/Password authentication**.
3. Create the required tables:
   - `lost_items`
   - `claims`

Start the development server:
```
npm run dev
```




