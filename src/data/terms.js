// Legal documents shown on the Terms & Conditions page (/terms/, src/pages/TermsPage.jsx).
// Keep in step with src/data/bookingPolicies.js and the Cal.com event settings.
//
// Each document has sections; each section has blocks:
//   { clause: '1.1', text: '…' }            a numbered clause (clause is optional; `lead` adds a bold opening)
//   { type: 'list', items: ['…'] }          a bulleted list; items may be { label: '(a)', text: '…' } instead
//   { type: 'table', head: [..], rows: [[..]] }
// Email addresses in text become links automatically.

export const legalDocuments = [
  {
    id: 'terms-and-conditions',
    title: 'Terms and Conditions of Service',
    lastUpdated: '15 November 2026',
    sections: [
      {
        heading: 'Introduction and definitions',
        blocks: [
          {
            clause: '1.1',
            text: 'These Terms and Conditions (“Terms”) govern your use of our website and your booking of, and attendance at, workshops supplied by the sole trader business operating as Yokie Scent, ABN 92 523 947 976 (“Yokie Scent”, “we”, “us” or “our”).',
          },
          {
            clause: '1.2',
            text: 'In these Terms, “you” means the person making a booking or purchase, and includes each guest on whose behalf you book. “Workshop” means any scent, candle or fragrance-making session we conduct. “Participant” means any person who attends a Workshop.',
          },
          {
            clause: '1.3',
            text: 'By making a booking, you confirm that you have read and accepted these Terms, our Refund Policy and our Privacy Policy, and that you are authorised to accept them on behalf of every Participant included in your booking.',
          },
        ],
      },
      {
        heading: 'Bookings',
        blocks: [
          {
            clause: '2.1',
            text: 'A booking is confirmed when we receive full payment and send you a confirmation email stating the Workshop, date, time, number of Participants and venue.',
          },
          { clause: '2.2', text: 'Places are limited and are allocated in the order that bookings are completed.' },
          {
            clause: '2.3',
            text: 'You must provide accurate and complete booking information, including a contact number and the details required by clause 6. We may decline or cancel a booking where information is materially inaccurate, and will refund you in full if we do so.',
          },
          {
            clause: '2.4',
            text: 'Workshops currently operate with a minimum of one (1) Participant. Refunds for missed Workshops and for Workshops that we cancel are set out in our Refund Policy.',
          },
          { clause: '2.5', text: 'Each Participant, including any adult who takes part, must be included in the booking.' },
        ],
      },
      {
        heading: 'Prices and payment',
        blocks: [
          {
            clause: '3.1',
            text: 'All prices are in Australian dollars (AUD) and are quoted per Participant. Yokie Scent is not currently registered for GST, and no GST is charged.',
          },
          {
            clause: '3.2',
            text: 'Payment in full is required at the time of booking and is processed by a third-party payment provider. We do not store your complete card details.',
          },
          {
            clause: '3.3',
            text: 'If we identify a pricing or listing error, we will notify you before your Workshop. You may then either accept the corrected price or cancel your booking and receive a full refund.',
          },
          {
            clause: '3.4',
            text: 'Promotional codes may be used once per booking, may not be combined with other offers unless we expressly state otherwise, and cannot be applied after payment has been made.',
          },
        ],
      },
      {
        heading: 'Cancellation, rescheduling and refunds',
        blocks: [
          {
            text: 'Cancellations, rescheduling and refunds are governed by our Refund Policy, which forms part of these Terms.',
          },
        ],
      },
      {
        heading: 'Workshop inclusions',
        blocks: [
          {
            clause: '5.1',
            text: 'Each Workshop includes the materials, tools and packaging required for the experience booked, together with Japanese tea and a light seasonal snack.',
          },
          {
            clause: '5.2',
            text: 'Items created in a Workshop are handmade. Colour, texture, appearance and fragrance may differ from images displayed on our website and social media.',
          },
          {
            clause: '5.3',
            text: 'We may vary the available fragrance range, venue or host. Where a variation materially alters the experience you booked, you may choose a reschedule at no charge or a full refund.',
          },
          {
            clause: '5.4',
            text: 'Workshops are recreational activities. They do not constitute professional, medical or cosmetic advice.',
          },
        ],
      },
      {
        heading: 'Ingredients, allergies and participant responsibility',
        blocks: [
          { clause: '6.1', lead: 'Ingredients.', text: 'Our Workshops use the following materials:' },
          {
            type: 'list',
            items: [
              'fragrance oils that comply with the standards of the International Fragrance Association (IFRA);',
              'wax, including beeswax and soybean or coconut wax;',
              'cosmetic-grade alcohol that meets Australian standards; and',
              'essential oils, both Australian-made and imported.',
            ],
          },
          {
            text: 'Ingredient information for the scents you select is available on request before or during your Workshop.',
          },
          {
            clause: '6.2',
            lead: 'Disclosure of allergies.',
            text: 'Fragrance oils, essential oils, wax and alcohol may cause allergic or adverse reactions in some people. Each Participant is solely responsible for identifying any allergy, sensitivity or medical condition (including asthma, skin conditions and pregnancy) that may be affected by these materials, and for informing us of it in writing, through the booking form or by message, before the Workshop begins. If you book for another person, you are responsible for obtaining that information and passing it on to us.',
          },
          {
            clause: '6.3',
            lead: 'Participant’s responsibility.',
            text: 'Participants who attend or use products made at a Workshop do so at their own risk. To the maximum extent permitted by law, Yokie Scent accepts no liability for any allergic or adverse reaction arising from an allergy, sensitivity or condition that was not disclosed to us before the Workshop, or from a Participant’s decision to use an ingredient after being informed of it. We encourage anyone with a known condition to seek medical advice before participating.',
          },
          {
            clause: '6.4',
            lead: 'Our assistance.',
            text: 'On receiving a disclosure under clause 6.2, we will take reasonable steps to guide the Participant towards suitable scents. We cannot guarantee that any product will be free of a particular allergen.',
          },
          {
            clause: '6.5',
            text: 'Nothing in this clause limits any right you have under the Australian Consumer Law that cannot lawfully be excluded (see clause 15).',
          },
        ],
      },
      {
        heading: 'Safety and use of finished items',
        blocks: [
          {
            clause: '7.1',
            text: 'Participants must follow the instructions of our host at all times, and we may require a Participant to stop an activity that is unsafe.',
          },
          {
            clause: '7.2',
            text: 'Perfume sprays are for external use only. Participants should patch-test on a small area of skin before use, avoid contact with the eyes, and stop using any product that causes irritation. Products containing alcohol are flammable and must be kept away from heat and naked flames.',
          },
          {
            clause: '7.3',
            text: 'A lit candle must never be left unattended. Candles must be placed on a stable, heat-safe surface away from children, pets and flammable materials, and the wick should be trimmed before each use.',
          },
          {
            clause: '7.4',
            text: 'Diffusers, oils and finished items must be kept out of reach of children and pets. Oils may damage polished or painted surfaces and fabrics.',
          },
          { clause: '7.5', text: 'No item made in a Workshop is intended for consumption.' },
          {
            clause: '7.6',
            text: 'For best results, finished items should be used within twelve (12) months and stored in a cool, dry place away from direct sunlight.',
          },
          {
            clause: '7.7',
            text: 'The duration and strength of a fragrance depends on the environment and the manner of use, and we do not warrant any particular result.',
          },
        ],
      },
      {
        heading: 'Intellectual property',
        blocks: [
          {
            clause: '8.1',
            text: 'Items you make in a Workshop belong to you, and you may keep them, use them or give them as gifts.',
          },
          {
            clause: '8.2',
            text: 'Our exclusive fragrance blends, formulas, recipes, designs, photographs, text and branding remain our property. You must not copy, reproduce, sell or distribute them, or sell items made using them, without our prior written consent.',
          },
          {
            clause: '8.3',
            text: 'Label and glass designs that you create yourself remain yours. You grant us the permission described in clause 10 to photograph them.',
          },
        ],
      },
      {
        heading: 'Age and conduct',
        blocks: [
          {
            clause: '9.1',
            text: 'A Participant under 16 years of age must be accompanied throughout the Workshop by a paying adult who is responsible for supervising them. We do not provide childminding.',
          },
          {
            clause: '9.2',
            text: 'Participants must behave respectfully towards our host, other Participants, the venue and our equipment. You are responsible for loss or damage caused by a Participant in your booking.',
          },
          {
            clause: '9.3',
            text: 'We may require a Participant to leave a Workshop where their conduct is unsafe or disruptive. Where we do so because of the Participant’s conduct, no refund is payable.',
          },
        ],
      },
      {
        heading: 'Photographs, reviews and social media',
        blocks: [
          {
            clause: '10.1',
            text: 'We may photograph or record Workshops and finished items for use on our website and social media channels. If you do not wish to appear, please tell us on the day or contact us afterwards, and we will not use the material or will remove it.',
          },
          { clause: '10.2', text: 'You are welcome to share your own photographs and to tag us.' },
          { clause: '10.3', text: 'We welcome honest reviews. We will not ask Participants to provide only favourable feedback.' },
          {
            clause: '10.4',
            text: 'Where you give us a review or testimonial for publication, you permit us to display it with your first name.',
          },
        ],
      },
      {
        heading: 'Booking confirmation, late cancellations, transfers and rebooking',
        blocks: [
          {
            clause: '11.1',
            text: 'A booking is confirmed when we have received full payment and issued a confirmation email in accordance with clause 2.1.',
          },
          {
            clause: '11.2',
            text: 'Where you cancel or request a change with at least 48 hours’ notice before the start time, our Refund Policy applies.',
          },
          {
            clause: '11.3',
            text: 'Where you cancel or request a change with less than 48 hours’ notice before the start time, no refund is payable. You may instead, by notifying us before the Workshop begins:',
          },
          {
            type: 'list',
            items: [
              { label: '(a)', text: 'transfer your place to another person, by providing their name and contact details; or' },
              {
                label: '(b)',
                text: 'rebook onto another Workshop of the same experience that is held within six (6) months of the original Workshop date, subject to availability.',
              },
            ],
          },
          {
            clause: '11.4',
            text: 'A transfer or rebooking may be made once per booking. If the new Workshop costs more than the original, the difference is payable. If it costs less, the difference is not refundable. A rebooked place cannot be exchanged for cash.',
          },
          {
            clause: '11.5',
            text: 'Where a Participant fails to attend without notifying us, no refund, transfer or rebooking is available.',
          },
          { clause: '11.6', text: 'Nothing in this clause limits your rights under the Australian Consumer Law.' },
        ],
      },
      {
        heading: 'Private and off-site events',
        blocks: [
          {
            clause: '12.1',
            text: 'Groups of seven (7) or more Participants, private events and Workshops held at a venue of your choice are arranged by written quote.',
          },
          {
            clause: '12.2',
            text: 'Payment in full is required to confirm the booking, in accordance with the quote. Set-up and travel fees, if applicable, will be stated in the quote.',
          },
          {
            clause: '12.3',
            text: 'For off-site events, you are responsible for obtaining all necessary permission to use the venue, including from a landlord, owners corporation or venue manager, and for providing safe access, adequate table space and, where requested, power and water.',
          },
          { clause: '12.4', text: 'Cancellations and refunds for these events are governed by our Refund Policy.' },
        ],
      },
      {
        heading: 'Use of our website',
        blocks: [
          {
            clause: '13.1',
            text: 'You must use our website lawfully. You must not attempt to gain unauthorised access to it, interfere with its operation, introduce malicious code, send unsolicited promotional material through it, or collect information about other users.',
          },
          {
            clause: '13.2',
            text: 'Content on our website, including text, photographs and branding, is owned by us or used with permission, and must not be reproduced without our written consent.',
          },
          {
            clause: '13.3',
            text: 'Our website may be unavailable from time to time for maintenance or for reasons beyond our control.',
          },
        ],
      },
      {
        heading: 'Third-party platforms',
        blocks: [
          {
            clause: '14.1',
            text: 'We use third-party services to take bookings and payments, and our website links to third-party platforms such as Instagram, TikTok and Google. Their own terms and privacy policies apply to your use of them.',
          },
          {
            clause: '14.2',
            text: 'We are not responsible for the content, availability or practices of third-party platforms. If a booking or payment platform fails while you are booking, please contact us and we will help you to complete your booking.',
          },
        ],
      },
      {
        heading: 'Australian Consumer Law',
        blocks: [
          {
            clause: '15.1',
            text: 'Our services and products come with guarantees that cannot be excluded under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010), including that services will be rendered with due care and skill and that goods will be of acceptable quality.',
          },
          {
            clause: '15.2',
            text: 'Nothing in these Terms excludes, restricts or modifies any right or remedy that you have under the Australian Consumer Law. For a major failure, you are entitled to a refund or compensation as the law provides, and for other failures to a repair, replacement or refund.',
          },
        ],
      },
      {
        heading: 'Limitation of liability',
        blocks: [
          {
            clause: '16.1',
            text: 'Subject to clause 15, and to the maximum extent permitted by law, we are not liable for any indirect or consequential loss, or for loss arising from a Participant’s failure to follow instructions, failure to disclose an allergy, sensitivity or medical condition, or events beyond our reasonable control.',
          },
          {
            clause: '16.2',
            text: 'Where the law does not permit us to exclude liability but does permit us to limit it, our liability is limited, at our option, to supplying the service or product again, paying the cost of doing so, or refunding the amount paid.',
          },
          {
            clause: '16.3',
            text: 'Nothing in these Terms excludes or limits liability for death or personal injury caused by our negligence.',
          },
        ],
      },
      {
        heading: 'Events beyond our control',
        blocks: [
          {
            text: 'We are not liable for any delay or failure to provide a Workshop caused by events beyond our reasonable control, including severe weather, natural disaster, fire, government restrictions, illness of our host, venue closure or loss of power. In that case, we will notify you as soon as reasonably practicable and offer you a reschedule at no charge or a full refund.',
          },
        ],
      },
      {
        heading: 'Complaints',
        blocks: [
          {
            clause: '18.1',
            text: 'If you are dissatisfied, please contact us at hello@createwithyokiescents.com with your name, the email address used for your booking, a description of the issue and the outcome you seek.',
          },
          {
            clause: '18.2',
            text: 'We will acknowledge your complaint within three (3) business days and aim to resolve it within fourteen (14) days. If we require more time, we will tell you why.',
          },
          {
            clause: '18.3',
            text: 'This clause does not limit your right to contact Consumer Affairs Victoria or any other relevant authority.',
          },
        ],
      },
      {
        heading: 'Privacy',
        blocks: [
          {
            text: 'We collect, use and disclose your personal information in accordance with our Privacy Policy. By making a booking, you consent to that handling.',
          },
        ],
      },
      {
        heading: 'Variation',
        blocks: [
          {
            text: 'We may amend these Terms from time to time. The version published on our website at the time of your booking applies to that booking. An amendment does not affect a confirmed booking unless the law requires it.',
          },
        ],
      },
      {
        heading: 'General',
        blocks: [
          {
            clause: '21.1',
            text: 'If any provision of these Terms is found to be unenforceable, the remaining provisions continue to apply.',
          },
          {
            clause: '21.2',
            text: 'These Terms, together with our Refund Policy and Privacy Policy, are the entire agreement between you and us in relation to your booking.',
          },
          {
            clause: '21.3',
            text: 'You may not transfer your booking to another person except as permitted by our Refund Policy.',
          },
        ],
      },
      {
        heading: 'Governing law and contact',
        blocks: [
          {
            clause: '22.1',
            text: 'These Terms are governed by the laws of Victoria, Australia, and the parties submit to the jurisdiction of the courts of Victoria. We encourage you to contact us first so that we can try to resolve any dispute directly.',
          },
          { clause: '22.2', text: 'Contact details:' },
          {
            type: 'list',
            items: [
              'Yokie Scent (sole trader)',
              'ABN: 92 523 947 976',
              'Email: hello@createwithyokiescents.com',
              'Instagram: @yokiehome_scentbar',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'refund-policy',
    title: 'Return and Refund Policy',
    lastUpdated: '15 November 2026',
    intro:
      'This policy sets out when you may reschedule, cancel or receive a refund. It forms part of our Terms and Conditions, and terms defined there have the same meaning here.',
    sections: [
      {
        heading: 'Workshop bookings',
        blocks: [
          { text: 'Payment in full is taken at the time of booking. The following applies to changes requested by you:' },
          {
            type: 'table',
            head: ['Circumstance', 'Outcome'],
            rows: [
              ['Reschedule with at least 48 hours’ notice', 'Permitted at no charge, once per booking'],
              ['Cancellation with at least 48 hours’ notice', 'Full refund to the original payment method'],
              [
                'Notice of less than 48 hours',
                'No refund. You may transfer your place to another person, or rebook within six (6) months, if you tell us before the Workshop begins',
              ],
              ['Failure to attend', 'No refund'],
              [
                'Arrival more than 30 minutes after the start time',
                'Treated as a failure to attend. No refund is payable, subject to section 6',
              ],
              ['Change of mind after the 48-hour period', 'No refund'],
            ],
          },
          {
            text: 'Subject to section 6, no refund is payable where a booking has not been cancelled with at least forty-eight (48) hours’ notice before the start time and the Participant does not arrive within thirty (30) minutes after the start time.',
          },
          {
            text: 'To reschedule or cancel, email hello@createwithyokiescents.com or message us on Instagram @yokiehome_scentbar with your name and booking date. Notice is measured from the time we receive your message.',
          },
        ],
      },
      {
        heading: 'Cancellation or change by us',
        blocks: [
          {
            clause: '2.1',
            text: 'If we cancel a Workshop, or it does not reach a minimum number of Participants that we have set for it, we will give you notice of at least 24 hours where practicable.',
          },
          {
            clause: '2.2',
            text: 'In that event, you may choose a reschedule at no charge, a credit for the full amount paid, or a full refund.',
          },
          {
            clause: '2.3',
            text: 'The same options apply if we make a change that materially alters the experience you booked.',
          },
          {
            clause: '2.4',
            text: 'Where we cancel a Workshop for any reason, we will offer you a reschedule at no cost or a full refund.',
          },
        ],
      },
      {
        heading: 'Events beyond our control',
        blocks: [
          {
            text: 'Where a Workshop cannot proceed because of severe weather, illness of our host, venue closure or another event beyond our reasonable control, you may choose a reschedule at no charge, a credit for the full amount paid, or a full refund.',
          },
        ],
      },
      {
        heading: 'Faults with items you have made',
        blocks: [
          {
            clause: '4.1',
            text: 'If an item you made has a fault, such as a defective wick, a leaking or cracked bottle or a damaged vessel, please tell us at the Workshop or within 7 days, with a photograph.',
          },
          { clause: '4.2', text: 'We will repair, replace or refund the item, depending on the nature of the fault.' },
          {
            clause: '4.3',
            text: 'Items are made by you with our guidance. We do not provide refunds for personal preference of scent, or for outcomes resulting from instructions not being followed.',
          },
        ],
      },
      {
        heading: 'Allergic and adverse reactions',
        blocks: [
          {
            clause: '5.1',
            text: 'If a Participant experiences a reaction, they should stop using the product immediately and seek medical advice where appropriate. Please let us know what occurred so that we can review the ingredients and assist.',
          },
          {
            clause: '5.2',
            text: 'A reaction arising from an allergy, sensitivity or condition that was not disclosed to us in accordance with clause 6 of our Terms and Conditions is not a fault in the product or service.',
          },
        ],
      },
      {
        heading: 'Late cancellations, transfers and rebooking',
        blocks: [
          {
            clause: '6.1',
            text: 'Where you cancel or request a change with less than 48 hours’ notice before the start time, no refund is payable.',
          },
          { clause: '6.2', text: 'In that case, you may instead, by notifying us before the Workshop begins:' },
          {
            type: 'list',
            items: [
              { label: '(a)', text: 'transfer your place to another person, by providing their name and contact details; or' },
              {
                label: '(b)',
                text: 'rebook onto another Workshop of the same experience that is held within six (6) months of the original Workshop date, subject to availability.',
              },
            ],
          },
          {
            clause: '6.3',
            text: 'A transfer or rebooking may be made once per booking. If the new Workshop costs more than the original, the difference is payable. If it costs less, the difference is not refundable.',
          },
          {
            clause: '6.4',
            text: 'Where a Participant fails to attend without notifying us, no refund, transfer or rebooking is available.',
          },
        ],
      },
      {
        heading: 'Group, private and off-site events',
        blocks: [
          {
            clause: '7.1',
            text: 'These events are arranged by written quote, and payment in full is required to confirm the booking. Payment is non-refundable within fourteen (14) days of the event.',
          },
          {
            clause: '7.2',
            text: 'If you cancel more than fourteen (14) days before the event, we will refund the amount paid less any costs we have already incurred, which we will itemise for you.',
          },
          {
            clause: '7.3',
            text: 'We will reschedule an event once, to a suitable date, if you give at least fourteen (14) days’ notice.',
          },
        ],
      },
      {
        heading: 'Your rights under the Australian Consumer Law',
        blocks: [
          {
            text: 'Our services and products come with guarantees that cannot be excluded under the Australian Consumer Law. If there is a major failure, you may choose a refund or replacement, and you are entitled to compensation for other reasonably foreseeable loss or damage. Nothing in this policy limits those rights.',
          },
        ],
      },
      {
        heading: 'How refunds are paid',
        blocks: [
          {
            text: 'Approved refunds are paid to the original payment method. We process them within 3 business days of approval, and your financial institution may take a further 5 to 10 business days to display them.',
          },
        ],
      },
      {
        heading: 'Questions and complaints',
        blocks: [
          {
            text: 'Contact us at hello@createwithyokiescents.com or on Instagram @yokiehome_scentbar. We acknowledge messages within three (3) business days and aim to resolve matters within fourteen (14) days.',
          },
        ],
      },
    ],
  },
];
