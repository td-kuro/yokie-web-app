// Local pop-up event calendar. Firestore documents in the `popUpEvents` collection use the same shape.
// `date` is "YYYY-MM-DD"; `tagTone` is one of: green, brand, rose.
export const popUpEvents = [
  {
    id: 'melbourne-makers-market',
    title: "Melbourne Maker's Market",
    date: '2026-10-18',
    location: 'Melbourne CBD',
    timeRange: '10:00 AM - 4:00 PM',
    tag: 'Details coming soon',
    tagTone: 'brand',
  },
  {
    id: 'pilates-breathe-pop-up',
    title: 'Pilates & Breathe Studio Pop-Up',
    date: '2026-11-02',
    location: '344 City Road, Southbank',
    timeRange: '1:00 PM - 5:00 PM',
    tag: 'Details coming soon',
    tagTone: 'brand',
  },
  {
    id: 'christmas-twilight-market',
    title: 'Christmas Twilight Night Market',
    date: '2026-12-12',
    location: 'Melbourne CBD',
    timeRange: '5:00 PM - 9:30 PM',
    tag: 'Details coming soon',
    tagTone: 'brand',
  },
];
