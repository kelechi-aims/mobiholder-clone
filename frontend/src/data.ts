export interface ManagerialControlFeature {
  id: number;
  title: string;
  desc: string;
}

export interface ManagerialControlImg {
  src: string;
  alt: string;
  className: string;
}
export interface ManagerialControlItem {
  id: number;
  type: string;
  desc: string;
  cover: string;
  features: ManagerialControlFeature[];
  imgs: ManagerialControlImg[];
}

export interface Blog {
  title: string;
  desc: string;
  tags: string[];
  img: string;
  alt: string;
}
export interface PricingPlan {
  name: string;
  desc: string;
  price: string;
  features: string[];
}
export interface Faq {
  question: string;
  answer: string;
}

export interface FqasData {
  type: string;
  content: Faq[];
}

export interface FeaturesData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface SignupSlider {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export const managerialControl: ManagerialControlItem[] = [
  {
    id: 1,
    type: "ID Card Management",
    desc: "With MobiHolder, managing digital IDs has never been easier. Effortlessly create, store, and organize digital ID cards for employees, visitors, contractors, and more, all within one secure and user-friendly app.",
    cover: "/images/about-id.png",
    features: [
      {
        id: 1,
        title: "Create your IDs digitally with the platform",
        desc: "With MobiHolder, managing digital IDs has never been easier. Effortlessly create, store, and organize digital ID cards",
      },
      {
        id: 2,
        title: "Manage your members ID cards with ease ",
        desc: "With MobiHolder, managing digital IDs has never been easier. Effortlessly create, store, and organize digital ID cards",
      },
    ],
    imgs: [
      {
        src: "/images/about-img1.png",
        alt: "about-img1",
        className:
          "absolute xl:max-w-[40%] md:max-w-[35%] max-w-[40%] max-h-[40%] xl:max-h-[50%] md:max-h-[35%] lg:top-[80%] lg:left-[9%] xl:top-[78%] xl:left-[5%] right-[30%] md:right-[9%] top-[66.5%] md:top-[64%] ",
      },
      {
        src: "/images/about-img2.png",
        alt: "about-img2",
        className:
          "absolute xl:max-w-[40%] xl:max-h-[35%] max-w-[40%] max-h-[40%] md:max-w-[35%] md:max-h-[35%] lg:top-[79%] lg:right-[7%] xl:top-[77%] right-[30%] md:right-[5%] top-[90%] md:top-[83%]",
      },
    ],
  },
  {
    id: 2,
    type: "Event Management",
    desc: "Streamline your event planning with our all-in-one event management solution. From scheduling and invitation to tracking attendance and feedback, wee make organising events effortless and efficient.",
    cover: "/images/event.png",
    features: [
      {
        id: 1,
        title: "Choose your access type suitable for your events ",
        desc: "With MobiHolder, managing digital IDs has never been easier. Effortlessly create, store, and organize digital ID cards",
      },
      {
        id: 2,
        title: "Choose your access type suitable for your events  ",
        desc: "With MobiHolder, managing digital IDs has never been easier. Effortlessly create, store, and organize digital ID cards",
      },
    ],
    imgs: [
      {
        src: "/images/event1.png",
        alt: "event1",
        className:
          "absolute xl:max-w-[22%] xl:max-h-[22%] md:max-w-[21%] max-h-[13%] max-w-[25%] xl:top-[78%] xl:left-[15%] lg:top-[81%] lg:left-[15%] right-[38%] md:right-[13%] top-[68%] md:top-[67%]",
      },
      {
        src: "/images/event2.png",
        alt: "event2",
        className:
          "absolute xl:max-w-[40%] xl:max-h-[40%] md:max-w-[35%] max-w-[45%] max-h-[35%] lg:top-[80%] lg:right-[9%] xl:top-[78%] xl:right-[5%] right-[7%] right-[28%] md:right-[7%] top-[91%] md:top-[84%]",
      },
    ],
  },
  {
    id: 3,
    type: "Membership & Subscriptions",
    desc: "Manage all your memberships amd subscriptions in one place. Stay engaged with organisations you care about, access exclusive benefits and never miss important updates and more",
    cover: "",
    features: [
      {
        id: 1,
        title: "Generate income from our subscription module",
        desc: "Monetize effortlessly with our subscription module, designed to drive recurring revenue and maximise customer loyalty",
      },
      {
        id: 2,
        title: "Subscribe to Organisations you are a member of   ",
        desc: "Stay connected - subscribe to organizations you are a part of and enjoy benefits and updates that comes with it ",
      },
    ],
    imgs: [
      {
        src: "/images/memsub1.png",
        alt: "memsub1",
        className:
          "absolute xl:max-w-[25%] xl:max-h-[25%] md:max-w-[30%] max-w-[35%] max-h-[30%] lg:top-[81%] lg:left-[13%] xl:top-[80%] xl:left-[12%] right-[32%] md:right-[11%] top-[66%] md:top-[58%]",
      },
      {
        src: "/images/memsub2.png",
        alt: "memsub2",
        className:
          "absolute xl:max-w-[23%] xl:max-h-[23%] md:max-w-[22%] max-w-[30%] max-h-[23%] lg:top-[80%] lg:right-[16%] 2xl:top-[75%] xl:top-[78%] xl:right-[16%] right-[35%] md:right-[13%] top-[88%] md:top-[79%]",
      },
    ],
  },
  {
    id: 4,
    type: "Access Control",
    desc: "With MobiHolder, managing access at events has never been easier. Effortlessly assign, or request, to be a verifier at events of your choice, with Mobiholder you can control access and gate checks with just a scan of a QR code, try today.",
    cover: "/images/access.png",
    features: [
      {
        id: 1,
        title: "Assign verifiers to check users at your event",
        desc: "Do you know you can assign users and members of your organisation to keep gate checks and control who gets in your events here",
      },
      {
        id: 2,
        title: "Request to be a Verifier at events of your choice",
        desc: "Send out request to organisations and individuals to help them with gate checks at their events",
      },
    ],
    imgs: [],
  },
];

export const faqs: Faq[] = [
  {
    question: "What is MobiHolder?",
    answer:
      "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
  },
  {
    question: "How does MobiHolder ensure data security?",
    answer:
      "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
  },
  {
    question: "Who can use MobiHolder?",
    answer:
      "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
  },
  {
    question: "How does MobiHolder streamline event management?",
    answer:
      "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
  },
];

export const blogs: Blog[] = [
  {
    title: "The Power of Real-Time Sales Analytics for Growth",
    desc: "In the age of data, businesses can no longer afford to rely on guesswork. Real-time sales analytics provide critical insights into your business performance, enabling you to make informed, data-driven decisions. These tools allow you to track sales trends, monitor customer behaviors, and evaluate the effectiveness of marketing strategies in real time. With detailed reports and analytics, you can refine your product offerings, focus your marketing efforts, and identify areas for operational improvement. This blog explains the transformative impact of sales analytics on business growth, showing how companies that leverage this data outperform their competitors by making smarter, faster decisions.",
    tags: ["Business Tools", "Productivity Hacks", "Team Management"],
    img: "/images/blog1.png",
    alt: "blog1",
  },
  {
    title: "How to Effectively Manage Access Control for Events",
    desc: "Event management involves a lot of moving parts, and one of the most critical is access control. Ensuring that only authorized personnel and guests can enter your event space is essential to its success. With an effective access control system, you can easily assign roles, manage permissions, and monitor real-time access without hassle. This article explores the benefits of integrating a robust verification module for access control, allowing you to maintain security while improving efficiency. We’ll also provide tips on how to assign personnel to handle different aspects of event access and why real-time monitoring can make all the difference in ensuring smooth operations.",
    tags: ["Business Tools", "Productivity Hacks", "Team Management"],
    img: "/images/blog2.png",
    alt: "blog2",
  },
  {
    title: "Maximizing Your Team's Efficiency with Management Tools",
    desc: "In the modern business world, efficiency is everything. To stay competitive, companies need to streamline operations and ensure their teams work as effectively as possible. One of the most powerful ways to achieve this is through the use of advanced management tools. These tools offer everything from task assignment and scheduling to real-time performance tracking, helping to ensure that your team remains on top of their tasks and deadlines. By implementing the right tools, you can foster better communication, improve collaboration, and ultimately boost your team's productivity. This blog dives into the various management tools available, their key features, and how they can be customized to fit your business needs. It’s time to unlock your team’s full potential!",
    tags: ["Business Tools", "Productivity Hacks", "Team Management"],
    img: "/images/blog3.png",
    alt: "blog3",
  },
  {
    title: "Why Mobile Apps Are Key to Business Success",
    desc: "In today's digital age, businesses must embrace mobile technology to stay competitive. A mobile app is no longer just an added feature—it’s an essential tool for business growth. By offering customers a mobile platform, businesses can provide an enhanced user experience, streamline customer engagement, and offer convenient access to services anytime, anywhere. Mobile apps can also provide real-time updates, enable easy communication, and build brand loyalty through personalized offers and notifications. This blog explores the many ways a mobile app can transform your business, drive customer satisfaction, and boost long-term success. Whether you're looking to enhance your e-commerce operations or offer a more personalized customer experience, a dedicated mobile app is key to staying ahead in the market.",
    tags: ["Business Tools", "Productivity Hacks", "Team Management"],
    img: "/images/blog4.png",
    alt: "blog4",
  },
];

export const pricing: PricingPlan[] = [
  {
    name: "Basic",
    desc: "Best for personal use.",
    price: "Free",
    features: [
      "Access to Membership",
      "Access to Events",
      "Access to Verification",
      "Add 10 IDs",
      "Communication tools",
      "Reporting and Analytics",
    ],
  },
  {
    name: "Enterprise",
    desc: "For small teams & corporations.",
    price: "20,000 ",
    features: [
      "Access to Membership",
      "Access to Events",
      "Access to Verification",
      "Add 10 IDs",
      "Communication tools",
      "Reporting and Analytics",
    ],
  },
  {
    name: "Business",
    desc: "Best for big institution.",
    price: "60,000",
    features: [
      "Access to Membership",
      "Access to Events",
      "Access to Verification",
      "Add 10 IDs",
      "Communication tools",
      "Reporting and Analytics",
    ],
  },
];

export const fqasData: FqasData[] = [
  {
    type: "General",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
    ],
  },
  {
    type: "Privacy",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
    ],
  },
  {
    type: "Events",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
    ],
  },
  {
    type: "Support",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
    ],
  },
  {
    type: "ID Management",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
    ],
  },
  {
    type: "Profile",
    content: [
      {
        question: "What is MobiHolder?",
        answer:
          "MobiHolder is an innovative platform designed to streamline event management and data security for its users.",
      },
      {
        question: "How does MobiHolder ensure data security?",
        answer:
          "MobiHolder employs advanced encryption methods and regular security audits to safeguard user data.",
      },
      {
        question: "Who can use MobiHolder?",
        answer:
          "MobiHolder is suitable for event organizers, businesses, and individuals looking for efficient event management.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
      {
        question: "How does MobiHolder streamline event management?",
        answer:
          "The platform automates tasks such as ticketing, attendee tracking, and communication, saving time and effort.",
      },
    ],
  },
];

export const featuresData: FeaturesData[] = [
  {
    id: 1,
    title: "Easy Sign Up",
    description:
      "Choose a user type and get started in seconds with our simple and user-friendly sign-up process. Start exploring without any hassle!",
    image: "/images/feature-img1.png",
  },
  {
    id: 2,
    title: "Never lose your IDs",
    description:
      "Keep all your important IDs safe and accessible in one secure place. Our platform allows you to store, organize, and retrieve your IDs effortlessly, so you’re never scrambling to find them when you need them most.",
    image: "/images/feature-img2.png",
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description:
      "You’ll receive regular reports on your privacy status and any outstanding threats. If new records become associated with you, we will send you an alert.",
    image: "/images/feature-img3.png",
  },
];

export const signupslider: SignupSlider[] = [
  {
    title: "ID Card Management made easy",
    desc: "Effortlessly create, store, and manage digital ID cards for employees, visitors, and more—all in one secure app",
    img: "/images/signupslider1.png",
    alt: "signupslider1",
  },
  {
    title: "Enjoy Memberships & Subscriptions",
    desc: "Become a member of organizations and also get to subscribe to organizations for exclusive contents",
    img: "/images/signupslider2.png",
    alt: "signupslider2",
  },
  {
    title: "Event management at your fingertips",
    desc: "Plan, organize, and manage events effortlessly in one app. From creating schedules to tracking attendees",
    img: "/images/signupslider3.png",
    alt: "signupslider3",
  },
  {
    title: "Verification module for access control",
    desc: "Manage access control, and assign people to handle event access with our embedded verification module",
    img: "/images/signupslider4.png",
    alt: "signupslider4",
  },
];
