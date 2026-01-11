/*
  # Fix RLS Security Issues

  1. Performance Fix
    - Replace auth function calls with subquery for better performance
    - Use (select auth.uid()) pattern instead of direct auth.uid() calls

  2. Security Fix
    - Replace overly permissive INSERT policy (WITH CHECK true)
    - Add validation to ensure required fields are present
    - Restrict data size to prevent abuse

  3. Changes
    - Drop existing policies
    - Create new optimized policies with proper validation
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public insert for diagnostics" ON diagnostics;
DROP POLICY IF EXISTS "Users can read own diagnostics by email" ON diagnostics;

-- Create optimized SELECT policy with subquery pattern
CREATE POLICY "Users can read own diagnostics by email"
  ON diagnostics
  FOR SELECT
  TO anon
  USING (
    email IS NULL OR 
    email = (SELECT current_setting('request.jwt.claims', true)::json->>'email')
  );

-- Create restrictive INSERT policy with validation
CREATE POLICY "Allow validated public insert for diagnostics"
  ON diagnostics
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are present and not empty
    responses IS NOT NULL AND
    jsonb_array_length(responses) > 0 AND
    jsonb_array_length(responses) <= 50 AND
    result IS NOT NULL AND
    result ? 'type' AND
    result ? 'title' AND
    timestamp IS NOT NULL AND
    -- Ensure email is valid format if provided
    (email IS NULL OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$') AND
    -- Limit occupation length if provided
    (occupation IS NULL OR length(occupation) <= 200)
  );