/*
# Create trip_requests table

Stores trip planning / contact requests submitted from the Trip2Djib website
contact form. This is a single-tenant public website with no user accounts;
visitors submit requests anonymously.

1. New Tables
   - `trip_requests`
     - `id` (uuid, primary key)
     - `name` (text, required) - visitor full name
     - `email` (text, required) - visitor email address
     - `phone` (text) - optional phone number
     - `preferred_date` (text) - optional desired travel date
     - `travelers` (text) - optional number of travelers
     - `experience_type` (text) - optional type of experience wanted
     - `message` (text) - optional free-form message
     - `created_at` (timestamptz) - submission timestamp

2. Security
   - Enable RLS on `trip_requests`.
   - Allow anonymous and authenticated visitors to INSERT their own request
     (public contact form).
   - No SELECT / UPDATE / DELETE policies: submissions are write-only from the
     public site to protect the personal information of submitters. Staff read
     submissions through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS trip_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  preferred_date text DEFAULT '',
  travelers text DEFAULT '',
  experience_type text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trip_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_trip_requests" ON trip_requests;
CREATE POLICY "anon_insert_trip_requests" ON trip_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);
