export const crop = {
  crops: [
    {
      name: "Maize(grain)",
      value: {
        initial: 0.4,
        development: 0.775,
        mid: 1.1,
        late: 0.7,
      },
    },
    {
      name: "Barley/wheat",
      value: {
        initial: 0.45,
        development: 0.775,
        mid: 1.125,
        late: 0.775,
      },
    },
    {
      name: "Beans(green)",
      value: {
        initial: 0.45,
        development: 0.775,
        mid: 1.025,
        late: 0.9,
      },
    },
    {
      name: "Potato",
      value: {
        initial: 0.5,
        development: 0.825,
        mid: 1.125,
        late: 0.875,
      },
    },
    {
      name: "Sweet potato",
      value: {
        initial: 0.45,
        development: 0.775,
        mid: 1.025,
        late: 0.825,
      },
    },
    {
      name: "Tomato",
      value: {
        initial: 0.5,
        development: 0.825,
        mid: 1.075,
        late: 0.875,
      },
    },
    {
      name: "Onion(dry)",
      value: {
        initial: 0.55,
        development: 0.775,
        mid: 1.025,
        late: 0.825,
      },
    },
    {
      name: "Carrots",
      value: {
        initial: 0.5,
        development: 0.825,
        mid: 1.075,
        late: 0.875,
      },
    },
    {
      name: "Cabbage",
      value: {
        initial: 0.55,
        development: 0.775,
        mid: 1.075,
        late: 0.925,
      },
    },
    {
      name: "Sorghum",
      value: {
        initial: 0.375,
        development: 0.725,
        mid: 1.025,
        late: 0.625,
      },
    },
    {
      name: "Rice",
      value: {
        initial: 1.125,
        development: 1.175,
        mid: 1.225,
        late: 1.025,
      },
    },
  ],
};

export const cropsname = {
  "Maize(grain)": "በቆሎ(እህል)",
  "Barley/wheat": "ገብስ/ስንዴ",
  "Beans(green)": "ባቄላ(አረንጓዴ)",
  Potato: "ድንች",
  "Sweet potato": "ጣፋጭ ድንች",
  Tomato: "ቲማቲም",
  "Onion(dry)": "ሽንኩርት(ደረቅ)",
  Carrots: "ካሮት",
  Cabbage: "ጎመን",
  Sorghum: "ማሽላ",
  Rice: "ሩዝ",
};

export const locations = {
  locations: [
    {
      name: "Addis Ababa",
      temperature: {
        max: [17, 18, 19, 19, 18.9, 17.7, 16.6, 16.4, 16.9, 17.2, 16.7, 16.4],
        min: [
          13.6, 14.4, 15.2, 15.2, 15.1, 14.2, 13.3, 13.1, 13.5, 13.8, 13.4,
          13.1,
        ],
        average: {
          max: 17.55,
          min: 14.02,
        },
      },
    },
    {
      name: "Adet",
      temperature: {
        max: [
          19.5, 21.5, 22.5, 23.5, 22.5, 20.5, 18.5, 18.5, 19.5, 18.5, 18.5,
          18.5,
        ],
        min: [
          14.6, 16.1, 16.9, 17.6, 17.6, 15.4, 13.9, 13.9, 14.6, 13.9, 13.9,
          13.9,
        ],
        average: {
          max: 20.5,
          min: 15.2,
        },
      },
    },

    {
      name: "Arba Minch",
      temperature: {
        max: [24, 25, 25, 25, 24, 23, 21, 22, 22, 22, 23, 23],
        min: [20, 21, 21, 21, 19, 18, 19, 19, 20, 20, 20, 20],
        average: { max: 23.5, min: 19.66 },
      },
    },
    {
      name: "Awassa",
      temperature: {
        max: [20, 21, 21, 21, 20, 19, 18, 19, 19, 20, 20, 20],
        min: [
          18.9, 20.9, 20.9, 19.9, 17.9, 17, 16.9, 16.9, 17, 17.9, 17.9, 17.9,
        ],
        average: { max: 19.5, min: 18.16 },
      },
    },
    {
      name: "Bahir Dar",
      temperature: {
        max: [20, 22, 23, 23, 23, 22, 20, 20, 20, 20, 19, 20],
        min: [18, 19, 20, 20, 20, 18, 17, 17, 17, 17, 17, 17],
        average: { max: 20.75, min: 18.08 },
      },
    },
    {
      name: "Dangila",
      temperature: {
        max: [19, 21, 22, 23, 22, 20, 18, 18, 19, 18, 18, 18],
        min: [16, 18, 18, 19, 18, 17, 15, 15, 16, 15, 15, 15],
        average: { max: 19.75, min: 16.58 },
      },
    },
    {
      name: "Debre Markos",
      temperature: {
        max: [16, 18, 19, 19, 19, 17, 15, 14, 14, 15, 14, 14],
        min: [
          14.4, 16.2, 17.1, 17.1, 17.1, 15.3, 13.5, 12.6, 12.6, 13.5, 12.6,
          12.6,
        ],
        average: { max: 16.08, min: 14.39 },
      },
    },
    {
      name: "Dire Dawa",
      temperature: {
        max: [22, 23, 25, 25, 25, 25, 24, 23, 24, 23, 22, 21],
        min: [17.6, 18.4, 20, 20, 20, 20, 19.2, 18.4, 19.2, 18.4, 17.6, 16.8],
        average: { max: 23.42, min: 18.83 },
      },
    },
    {
      name: "Gondar",
      temperature: {
        max: [18, 20, 21, 22, 21, 19, 16, 16, 16, 17, 17, 17],
        min: [
          14.4, 16, 16.8, 17.6, 16.8, 15.2, 12.8, 12.8, 13.6, 13.6, 13.6, 13.6,
        ],
        average: { max: 18.33, min: 14.62 },
      },
    },
    {
      name: "Motta",
      temperature: {
        max: [20, 22, 23, 24, 23, 21, 18, 18, 18, 19, 19, 19],
        min: [
          14, 15.4, 16.1, 16.8, 16.1, 14.7, 12.6, 12.6, 13.3, 13.3, 13.3, 13.3,
        ],
        average: { max: 20.42, min: 14.56 },
      },
    },
  ],
};

export const city = {
  "Addis Ababa": "አዲስ አበባ",
  Adet: "አደት",
  "Arba Minch": "አርባ ምንጭ",
  Awassa: "አዋሳ",
  "Bahir Dar": "ባሕር ዳር",
  Dangila: "ዳንግላ",
  "Debre Markos": "ደብረ ማርቆስ",
  "Dire Dawa": "ድሬ ዳዋ",
  Gondar: "ጎንደር",
  Motta: "ሞጣ",
};

export const data = {
  "Addis Ababa": {
    tmm: 23.8,
    wet: 841.4,
    dry: 722.4,
    kwd: 812.4,
  },
  Adet: {
    tmm: 26.4,
    wet: 940.2,
    dry: 912.2,
    kwd: 937.2,
  },
  "Arba Minch": {
    tmm: 30.4,
    wet: 1092.2,
    dry: 1204.2,
    kwd: 1129.2,
  },
  Awassa: {
    tmm: 27.4,
    wet: 978.2,
    dry: 985.2,
    kwd: 985.2,
  },
  "Bahir Dar": {
    tmm: 27.2,
    wet: 970.6,
    dry: 970.6,
    kwd: 975.6,
  },
  Dangila: {
    tmm: 25.1,
    wet: 890.8,
    dry: 817.3,
    kwd: 874.8,
  },
  "Debre Markos": {
    tmm: 22.9,
    wet: 807.2,
    dry: 656.7,
    kwd: 769.2,
  },
  "Dire Dawa": {
    tmm: 32.4,
    wet: 1168.2,
    dry: 1350.2,
    kwd: 1225.2,
  },
  Gondar: {
    tmm: 27.4,
    wet: 978.2,
    dry: 985.2,
    kwd: 985.2,
  },
  Motta: {
    tmm: 21.2,
    wet: 742.6,
    dry: 532.6,
    kwd: 687.6,
  },
};

export const stagename = {
  Initial: "የመጀመሪያ",
  Development: "ልማት",
  Mid: "መካከለኛ",
  Late: "ዘግይቶ",
};
