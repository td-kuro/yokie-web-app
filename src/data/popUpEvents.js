// Local pop-up event calendar. Firestore documents in the `popUpEvents` collection use the same shape.
// `date` is "YYYY-MM-DD"; `tagTone` is one of: green, brand, rose. Leave `date`, `location` or `timeRange`
// as null while it isn't confirmed: the card shows "TBC" / "coming soon" instead.
export const popUpEvents = [
  {
    id: 'melbourne-makers-market',
    title: "Melbourne Maker's Market",
    date: null,
    location: null,
    timeRange: null,
  },
  {
    id: 'pilates-breathe-pop-up',
    title: 'Pilates & Breathe Studio Pop-Up',
    date: null,
    location: null,
    timeRange: null,
  },
  {
    id: 'christmas-twilight-market',
    title: 'Christmas Twilight Night Market',
    date: null,
    location: null,
    timeRange: null,
  },
];
