export interface CookiesData {
  title?: string;
  descr?: string;
  subDescr?: string;
  descrList?: {
    title: string;
    descr: string[];
  }[];
}

export const CookiesData: CookiesData[] = [
  {
    title: "What are cookies?",
    descr:
      "Cookies are small data files that are received on the terminal from the visited Web site and are used to record certain browsing interactions on a Web site by storing data that can be updated and retrieved. These files are stored on the user's computer and contain anonymous data that are not harmful to your computer. They are used to remember the user's preferences, such as the selected language, access data or page personalization.",
    subDescr:
      "Cookies can also be used to record anonymous information about how a visitor uses a site. For example, from which Web page you have accessed, or if you have used an advertising banner to get there.",
  },
  {
    title: "What use do we make of the different types of cookies?",
    descrList: [
      {
        title: "According to their purpose:",
        descr: [
          "Technical cookies are those that facilitate user navigation and the use of the different options or services offered by the web, such as identifying the session, allowing access to certain areas, facilitating orders, purchases, filling out forms, registration, security, and functionalities like videos or social networks.",
          "Customization cookies allow users to access services according to their preferences such as language, browser, or configuration.",
          "Analytical cookies are used to carry out anonymous analysis of user behavior and measure activity in order to improve websites.",
          "Advertising cookies allow the management of advertising space and can personalize ads based on user behavior, browsing habits, and profiles.",
        ],
      },

      {
        title: "According to its term:",
        descr: [
          "Session cookies are those that last as long as the user is browsing the website and are deleted when the browser is closed.",
          "Persistent cookies are stored in the user's device until they are manually deleted or until their expiration period ends.",
        ],
      },

      {
        title: "According to its ownership:",
        descr: [
          "Own cookies are those sent to the user's device from a domain managed by the website owner.",
          "Third-party cookies are sent from a domain managed by another entity that processes the cookie data.",
        ],
      },

      {
        title: "Cookies used on this website:",
        descr: [
          "_ga – Own cookie, used to distinguish users (Analytics, 2 years).",
          "_gid – Own cookie, used to distinguish users (Analytics, 1 day).",
          "_gat_gtag_UA_[ID] – Own cookie, used to limit requests (Analytics, 1 minute).",
          "IDE – Third-party cookie (doubleclick.net), used for advertising interactions (1 year).",
          "_gcl_au – Own cookie, used for advertising (3 months).",
          "laravel_cookie_consent – Own cookie, stores user consent (20 years).",
          "XSRF-TOKEN – Own cookie, used for security (session).",
          "test_cookie – Third-party cookie, checks browser support (15 minutes).",
        ],
      },

      {
        title: "Additional information:",
        descr: [
          "Traffix Marketing online S.C.P. uses its own and third-party cookies for technical, personalization, analytical, and advertising purposes.",
          "Consent is requested in compliance with applicable laws.",
          "Users must be at least 14 years old and accept the Privacy Policy.",
        ],
      },

      {
        title: "Managing cookies:",
        descr: [
          "Chrome: Settings → Advanced → Privacy → Content settings.",
          "Firefox: Tools → Options → Privacy → History.",
          "Internet Explorer: Tools → Internet Options → Privacy.",
          "Opera: Preferences → Cookies.",
          "Safari: Preferences → Security.",
          "Edge: Settings → Privacy and services → Cookies.",
        ],
      },
    ],
  },
];
