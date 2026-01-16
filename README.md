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

1. git clone https://github.com/Theni1/UW-Found.git
2. npm install
3. Create a local file named .env.local with:
   NEXT_PUBLIC_SUPABASE_URL=your_api_key
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_api_key
4. Set up Supabase (auth + database)
5. npm run dev





