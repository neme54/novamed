# Development notes

## If you see "Cannot find module './XXX.js'" (e.g. 948.js, 682.js)

This means the `.next` build cache is stale or corrupted. **Delete it and restart:**

1. Stop the dev server (Ctrl+C).
2. From project root: `Remove-Item -Recurse -Force .next` (PowerShell) or `rm -rf .next` (Mac/Linux).
3. Run `npm run dev` again.

## If you see 404 for webpack.js, main.js, react-refresh.js, _app.js or _error.js

These usually mean the browser or a cached page is requesting **old Next.js (Pages Router) chunk URLs**. This project uses the **App Router** only.

**Do this:**

1. **Stop the dev server** (Ctrl+C).
2. **Delete the build cache:**  
   From the project root run:
   - Windows (PowerShell): `Remove-Item -Recurse -Force .next`
   - Mac/Linux: `rm -rf .next`
3. **Restart:** `npm run dev`
4. **Hard refresh the browser:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac). Or open the site in an incognito/private window.

After this, menus, Book a Pharmacist, and client-side navigation should work. If 404s persist, try a different browser or disable extensions that inject scripts.

## WhatsApp number

Set in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=2348108217791
```

(Nigeria: 234 + number without leading 0.)

## Maps (Contact & About)

Maps use **Leaflet** and **OpenStreetMap** tiles. No API key or cloud sign-up is required. They work as soon as you run the app.
