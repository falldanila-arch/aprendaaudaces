
-- Allow insert/update/delete for blog_posts (admin operations)
-- Since we don't have auth users managing posts, we use anon access with app-level password protection
CREATE POLICY "Allow insert for blog admin"
ON public.blog_posts FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow update for blog admin"
ON public.blog_posts FOR UPDATE
USING (true);

CREATE POLICY "Allow delete for blog admin"
ON public.blog_posts FOR DELETE
USING (true);

-- Also allow select of all posts (including unpublished) for admin listing
CREATE POLICY "Allow select all posts for admin"
ON public.blog_posts FOR SELECT
USING (true);

-- Drop the old restrictive select policy
DROP POLICY "Published posts are viewable by everyone" ON public.blog_posts;
