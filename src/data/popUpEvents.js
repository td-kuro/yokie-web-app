// Local pop-up market calendar. Firestore documents in the `popUpEvents` collection use the same shape.
// `date` is "YYYY-MM-DD"; `tagTone` is one of: green, brand, rose.
export const popUpEvents = [
  {
    id: 'melbourne-makers-market',
    title: "Melbourne Maker's Market",
    date: '2026-10-18',
    location: 'Carlton Gardens',
    timeRange: '10:00 AM - 4:00 PM',
    tag: 'Walk-in Scent Bar Available',
    tagTone: 'green',
  },
  {
    id: 'pilates-breathe-pop-up',
    title: 'Pilates & Breathe Studio Pop-Up',
    date: '2026-11-02',
    location: 'South Yarra',
    timeRange: '1:00 PM - 5:00 PM',
    tag: 'Special Mind & Scent Session',
    tagTone: 'brand',
  },
  {
    id: 'christmas-twilight-market',
    title: 'Christmas Twilight Night Market',
    date: '2026-12-12',
    location: 'Docklands Pier',
    timeRange: '5:00 PM - 9:30 PM',
    tag: 'Holiday Gifting Station',
    tagTone: 'rose',
  },
];
