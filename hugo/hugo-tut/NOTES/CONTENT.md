## Content Types for "Contentful Space"
Description of types, options and relationships

### Page
  1. Title
    - Type: Short text
  2. Section Item
    - Type: References

### Author
  1. Name
    - Type: Short text
    - Required
    - Appearance: Single line
  2. Website
    - Type: Short text
    - Appearance: URL
  3. Profile Photo
    - Type: Media
    - Accept only: Image
  4. Biography
    - Type: Long text
    - Limit character: 0-1000
    - Appearance: Markdown
  5. Created Entries
    - Type: References, many
    - Accept only: Post
    - Appearance: Entry cards

### Category
  1. Title
    - Type: Short text
    - Field options: This field represents the Entry title
    - Required
    - Appearance: Single line
  2. Short description:
    - Type: Long text
    - Appearance: Multiple line

### Post
  1. Title: 
    - Type: Long Text
    - Field options: This field represents the Entry title
    - Required
    - Appearance: Single line
  2. Slug:
    - Type: Short text
    - Appearance: Slug 
  3. Author:
    - Type: References, many
    - Accept only: Author
    - Appearance: Entry cards
  4. Body:
    - Type: Long Text
    - Appearance: Markdown
  5. Category:
    - Type: References, many
    - Accept only: Category
    - Appearance: Entry links list
  6. Tags
    - Type: Short text, list
    - Appearance: List
  7. Featured image:
    - Type: Media
    - Accept only: Image
  8. Date:
    - Type: Date & time
