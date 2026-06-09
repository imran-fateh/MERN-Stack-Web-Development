Multimedia & Embedding Notes

Learning Objective

Learn how to display images, videos, audio, and external content on a webpage using HTML multimedia elements.

---

Topics Covered

- img
- iframe
- video
- audio
- YouTube Embed
- HTML Entities
- footer

---

Concept Explanation

<img>Used to display images on a webpage.

Common Attributes:

- src → Specifies image path.
- alt → Alternative text if image cannot load.
- width → Sets image width.
- height → Sets image height.

---

<iframe>Embeds another webpage or external content inside the current webpage.

Common Attributes:

- src
- width
- height
- title

---

<video>Used to display video files on a webpage.

Common Attributes:

- controls
- autoplay
- loop
- muted

---

<audio>Used to play audio files.

Common Attributes:

- controls
- autoplay
- loop
- muted

---

YouTube Embed

YouTube videos are embedded using the iframe tag.

---

HTML Entities

Used to display special characters.

Examples:

© → ©
< → <

> → >
> & → &

---

<footer>Represents the footer section of a webpage.

Usually contains:

- Copyright Information
- Contact Details
- Social Media Links

---

Example Structure

<!-- Image --><img src="image.jpg" alt="Profile Image" width="300"><!-- Iframe --><iframe

    src="https://example.com"
    width="600"
    height="300">

</iframe><!-- Video --><video controls>
    <source src="video.mp4">
</video><!-- Audio --><audio controls>
    <source src="audio.mp3">
</audio><!-- Footer --><footer>
    <p>&copy; 2026 My Website</p>
</footer>---

Important Notes

1. img tag displays images.
2. Always use alt attribute with images.
3. iframe embeds external webpages.
4. video tag displays videos.
5. audio tag plays audio files.
6. controls attribute adds media controls.
7. autoplay starts media automatically.
8. muted is often required with autoplay.
9. HTML entities display special symbols.
10. footer is placed at the bottom of the webpage.
11. YouTube videos are embedded using iframe.
12. Multimedia makes websites more interactive and user-friendly.

---

Files

iframe.html

Purpose:

Multimedia & Embedding Practice

---

Real World Usage

- Portfolio Websites
- YouTube Video Embedding
- Google Maps Embedding
- Online Courses
- News Websites
- Blog Websites
- Business Websites
- Media Platforms
