1️⃣ Authentication Redirect Issue (Production)

When I deployed the project to production, Google OAuth was not redirecting properly after login. The problem was that the production redirect URL was different from the local development URL.

To solve this, I updated the redirect URL in the Supabase authentication settings. I debugged the issue step by step using AI assistance and checked the environment variables carefully. After correcting the redirect configuration, authentication started working properly in production.

2️⃣ Working with Supabase for the First Time

This was my first time working with Supabase, so I faced some difficulty in understanding how to design the database schema and create relationships between tables.

To solve this, I read the official Supabase documentation carefully and watched YouTube tutorials to understand how relationships and foreign keys work. After learning the basics, I was able to design the schema correctly and connect it with my application.
