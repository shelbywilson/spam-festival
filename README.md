# SPAM New Media Festival

## Redirects

`netlify.toml` holds the routing. Besides the root redirect it maps every URL
that existed before the site was split by year, back when the root *was* the
2025 festival: `/2025.html`, `/main.css`, `/fonts/*`, `/logos/*`,
`/ascii-play/*`, `/assets/2025/*`, plus the poster, floor plans and video.

Test locally — this runs the real redirect engine, not a plain static server:

```
netlify dev --dir . --offline
```

## Credits

Hero animation uses ASCII play: https://github.com/ertdfgcvb/play.core / https://play.ertdfgcvb.xyz/
