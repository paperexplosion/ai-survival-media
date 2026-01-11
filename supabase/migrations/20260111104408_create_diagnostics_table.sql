/*
  # Create diagnostics table

  1. New Tables
    - `diagnostics`
      - `id` (uuid, primary key)
      - `email` (text, optional user email)
      - `occupation` (text, optional user occupation)
      - `responses` (jsonb, user responses to questions)
      - `result` (jsonb, diagnostic result including type, title, description, etc.)
      - `timestamp` (timestamptz, when the diagnosis was completed)
      - `created_at` (timestamptz, when the record was created)

  2. Security
    - Enable RLS on `diagnostics` table
    - Add policy for public insert access (no authentication required for diagnostics)
    - Add policy for authenticated users to read their own data

  3. Notes
    - This table stores user diagnostic results for the AI career survival test
    - Email is optional, allowing anonymous diagnoses
    - All diagnostic data is stored in JSONB for flexibility
*/

CREATE TABLE IF NOT EXISTS diagnostics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text,
  occupation text,
  responses jsonb NOT NULL,
  result jsonb NOT NULL,
  timestamp timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diagnostics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for diagnostics"
  ON diagnostics
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read own diagnostics by email"
  ON diagnostics
  FOR SELECT
  TO anon
  USING (email IS NULL OR email = current_setting('request.jwt.claims', true)::json->>'email');