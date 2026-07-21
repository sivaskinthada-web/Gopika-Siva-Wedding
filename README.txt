Gopika & Siva Wedding Website — Version 1.4 Clean QR Strategy

QR CODE 1 — WEDDING INVITATION
The QR code printed on the invitation should point only to the published
wedding website homepage.

QR CODE 2 — WEDDING VENUE
The separate QR code displayed at the venue should point directly to the
Google Form used for guest photo and video uploads. This Google Form is not
linked from the website.

WEBSITE CONTENT
- Wedding information
- Countdown
- Event schedule
- Venue details and maps
- Calendar downloads
- Contact information
- Future Wedding Memories album

WEDDING MEMORIES LINK
Open index.html and find this object near the beginning of the JavaScript:

const LINKS = {
  weddingAlbum: "YOUR_WEDDING_ALBUM_LINK"
};

After the wedding, replace YOUR_WEDDING_ALBUM_LINK with the shared Google
Photos or Google Drive album URL. Until then, the button remains visible but
disabled.

The website design, hero, colours, typography, events, maps, contacts,
calendar files and animations remain unchanged.
