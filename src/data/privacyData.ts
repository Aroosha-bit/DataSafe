export interface privacypolicy {
  descr: string;
}

export const privacypolicy: privacypolicy[] = [
  {
    descr: "Who is responsible for the processing of your data.",
  },
  { descr: "For what purposes we collect the data we request from you." },
  { descr: "What is the legitimacy for its treatment." },
  { descr: "How long we keep them." },
  { descr: "To which recipients your data is communicated." },
  { descr: "What are your rights." },
];

export interface PrivacyData {
  title: string;
  descrList: {
    label?: string;
    data: string[];
  }[];
}
export const PrivacyData: PrivacyData[] = [
  {
    title: "1. Responsible:",
    descrList: [
      {
        data: [
          "TRAFFIX MARKETING ONLINE S.C.P. (J-67363887)",
          "50 Josep Tarradellas Avenue",
          "08029 Barcelona, Spain",
          "datasafe@traffix.es",
        ],
      },
    ],
  },
  {
    title: "2. Purposes, legitimacy and conservation of the processing of the data sent through:",
      descrList: [
        {
          data: [
            "To use the Service the user must create a profile at the time of requesting activation of the service. The information collected by the Service will vary accordingly. Personal and non-personal information collected by the Service will come to us in three ways: 1) information collected automatically upon consent, 2) information provided voluntarily by the user, and 3) third party consenting location."
          ]
        },
        {
          label: "1. ",
          data: [
            "Automatically collected with your consent:"
          ]
        },
        {
          label: "2. ",
          data: [
            "Collected through cookies or similar mechanisms stored on your device, always with your consent.",
            "The IP from which the connection is made, the type of device used and its characteristics, the operating system version, the type of browser, the language, the date, the country, the time of the request, the referrer URL or the mobile network used (among others).",
            "Service usage data and possible errors detected during its use."
          ]
        }
      ]
  },

  {
    title: "3. Recipients of your data",
    descrList: [
      {
        data: [
          "Your data are confidential and will not be disclosed to third parties, unless there is a legal obligation or when the provision of the service implies the need for a contractual relationship with service providers in charge of the processing, who will not process your data for their own purposes.",
        ],
      },
    ],
  },
];
