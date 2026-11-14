// Local pop-up event calendar. Firestore documents in the `popUpEvents` collection use the same shape.
// `date` is "YYYY-MM-DD"; `tagTone` is one of: green, brand, rose. Leave `date`, `location` or `timeRange`
// as null while it isn't confirmed: the card shows "TBC" / "coming soon" instead.
export const popUpEvents = [
  {
    id: 'melbourne-makers-market',
    title: "Melbourne Maker's Market",
    date: null,
    location: 'Melbourne CBD',
    timeRange: '10:00 AM - 4:00 PM',
  },
  {
    id: 'pilates-breathe-pop-up',
    title: 'Pilates & Breathe Studio Pop-Up',
    date: null,
    location: '344 City Road, Southbank',
    timeRange: '1:00 PM - 5:00 PM',
  },
  {
    id: 'christmas-twilight-market',
    title: 'Christmas Twilight Night Market',
    date: null,
    location: 'Melbourne CBD',
    timeRange: '5:00 PM - 9:30 PM',
  },
];
