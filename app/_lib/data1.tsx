import { SlCalender } from "react-icons/sl";
import { CgHome } from "react-icons/cg";
import { RiFileCheckLine } from "react-icons/ri";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FiCreditCard } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { IoPersonSharp, IoSettingsOutline } from "react-icons/io5";
import { FaRegCalendarCheck, FaUsersLine } from "react-icons/fa6";
import { PiCheckSquare, PiCheckSquareFill } from "react-icons/pi";
import { BsCreditCard, BsFillPlusCircleFill, BsStarFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { JSX } from "react";
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

/* =========================
   TYPES
========================= */

export type StatCardProps = {
  count: string;
  label: string;
  icon: JSX.Element;
  gradient: string;
  bgColor: string;
  change?: string;
  topIcon?: JSX.Element;
};

export type RecentID = {
  orgName: string;
  orgLogo: string;
  role: string;
  date: string;
  status: "Active" | "Pending";
};

export type UpcomingEvent = {
  title: string;
  logo: string;
  date: string;
};

export type OrgUpcomingEvent = {
  title: string;
  eventlogo: string;
  date: string;
  attendees: number;
  tickettype: string;
};

export type OrgMember = {
  individual: string;
  role: string;
  email: string;
  status: string;
};

export type AdminMember = {
  serial: number;
  name: string;
  "user type": string;
  date: string;
};

export type AdminUpcomingEvent = {
  "event name": string;
  type: string;
  date: string;
};

/* =========================
   STATS
========================= */

export const individualStats: StatCardProps[] = [
  {
    count: "12",
    label: "ID Cards",
    icon: <BsCreditCard className="h-5 w-5 text-[#EF956B]" />,
    gradient: "from-[#EF956B] to-[#343B4F]",
    bgColor: "bg-[#684E46]",
  },
  {
    count: "21",
    label: "Organisations Joined",
    icon: <FaUsersLine className="h-5 w-5 text-[#6B9BEF]" />,
    gradient: "from-[#6B9BEF] to-[#343B4F]",
    bgColor: "bg-[#404F6D]",
  },
  {
    count: "16",
    label: "Subscriptions",
    icon: <PiCheckSquare className="h-5 w-5 text-[#EF6BE4]" />,
    gradient: "from-[#EF6BE4] to-[#343B4F]",
    bgColor: "bg-[#6D425C]",
  },
  {
    count: "4",
    label: "Upcoming Events",
    icon: <SlCalender className="h-5 w-5 text-[#6BEFD7]" />,
    gradient: "from-[#6BEFD7] to-[#343B4F]",
    bgColor: "bg-[#406966]",
  },
];

export const OrganizationStats: StatCardProps[] = [
  {
    count: "12k",
    label: "Total Members",
    icon: <BsCreditCard className="h-5 w-5 text-[#EF956B]" />,
    gradient: "from-[#EF956B] to-[#343B4F]",
    bgColor: "bg-[#684E46]",
  },
  {
    count: "9k",
    label: "Active Members",
    icon: <FaUsersLine className="h-5 w-5 text-[#6B9BEF]" />,
    gradient: "from-[#6B9BEF] to-[#343B4F]",
    bgColor: "bg-[#404F6D]",
  },
  {
    count: "124",
    label: "Total Subscriptions",
    icon: <PiCheckSquare className="h-5 w-5 text-[#EF6BE4]" />,
    gradient: "from-[#EF6BE4] to-[#343B4F]",
    bgColor: "bg-[#6D425C]",
  },
  {
    count: "4",
    label: "Upcoming Events",
    icon: <SlCalender className="h-5 w-5 text-[#6BEFD7]" />,
    gradient: "from-[#6BEFD7] to-[#343B4F]",
    bgColor: "bg-[#406966]",
  },
];

export const adminStats: StatCardProps[] = [
  {
    count: "3023",
    label: "Total Users",
    change: "28.4%",
    topIcon: <IoPersonSharp className="h-4 w-4" />,
    icon: <FaUsers className="h-9 w-9 text-[#F39A68]" />,
    gradient: "from-[#2B3348] via-[#1E2230] to-[#1A1D29]",
    bgColor: "bg-[#6A4C42]",
  },
  {
    count: "407",
    label: "Total Subscriptions",
    change: "28.4%",
    topIcon: <IoPersonSharp className="h-4 w-4" />,
    icon: <PiCheckSquareFill className="h-9 w-9 text-[#F06BEA]" />,
    gradient: "from-[#2B3348] via-[#1E2230] to-[#1A1D29]",
    bgColor: "bg-[#734467]",
  },
  {
    count: "139",
    label: "Total Organisations",
    change: "3.1%",
    topIcon: <BsFillPlusCircleFill className="h-4 w-4" />,
    icon: <HiMiniUserGroup className="h-9 w-9 text-[#6A91E8]" />,
    gradient: "from-[#2B3348] via-[#1E2230] to-[#1A1D29]",
    bgColor: "bg-[#435C92]",
  },
  {
    count: "329",
    label: "Total Event",
    change: "11.3%",
    topIcon: <BsStarFill className="h-4 w-4" />,
    icon: <FaRegCalendarAlt className="h-9 w-9 text-[#69EBD4]" />,
    gradient: "from-[#2B3348] via-[#1E2230] to-[#1A1D29]",
    bgColor: "bg-[#467B76]",
  },
];

/* =========================
   DATA
========================= */

export const orgMembers: OrgMember[] = [
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Active",
  },
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Pending",
  },
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Rejected",
  },
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Inactive",
  },
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Suspended",
  },
];

export const adminMembers: AdminMember[] = [
  {
    serial: 1,
    name: "Chukka Uzo",
    "user type": "Individual",
    date: "03-10-2024",
  },
  {
    serial: 2,
    name: "Chukka Uzo",
    "user type": "Organization",
    date: "03-10-2024",
  },
  {
    serial: 3,
    name: "Chukka Uzo",
    "user type": "Individual",
    date: "03-10-2024",
  },
  {
    serial: 4,
    name: "Chukka Uzo",
    "user type": "Organization",
    date: "03-10-2024",
  },
  {
    serial: 5,
    name: "Chukka Uzo",
    "user type": "Individual",
    date: "03-10-2024",
  },
];

export const orgUpcomingEvents: OrgUpcomingEvent[] = [
  {
    title: "Galaxy UI Event",
    eventlogo: "/images/galaxy1.png",
    date: "30/08/2025",
    attendees: 120,
    tickettype: "Free",
  },
  {
    title: "Google UI Event",
    eventlogo: "/images/galaxy2.png",
    date: "30/08/2025",
    attendees: 200,
    tickettype: "Paid",
  },
  {
    title: "Microsoft UI Event",
    eventlogo: "/images/galaxy3.png",
    date: "30/08/2025",
    attendees: 320,
    tickettype: "Free",
  },
  {
    title: "Galaxy UI Event",
    eventlogo: "/images/galaxy4.png",
    date: "30/08/2025",
    attendees: 170,
    tickettype: "Paid",
  },
];

export const adminUpcomingEvents: AdminUpcomingEvent[] = [
  {
    "event name": "Google Event",
    type: "Open",
    date: "30/08/2025",
  },
  {
    "event name": "Apple Event",
    type: "Closed",
    date: "30/08/2025",
  },
  {
    "event name": "Microsoft Event",
    type: "Semi-Open",
    date: "30/08/2025",
  },
  {
    "event name": "Amazon Event",
    type: "Open",
    date: "30/08/2025",
  },
  {
    "event name": "Facebook Event",
    type: "Open",
    date: "30/08/2025",
  },
];

export const recentIds: RecentID[] = [
  {
    orgName: "Greenmouse Tech",
    orgLogo: "/images/greenmouse.png",
    role: "Product Designer",
    date: "03-10-2024",
    status: "Active",
  },
  {
    orgName: "Greenmouse Tech",
    orgLogo: "/images/afrima.png",
    role: "Sales Representative",
    date: "03-10-2024",
    status: "Active",
  },
  {
    orgName: "CAPS Tech",
    orgLogo: "/images/cap.png",
    role: "Product Manager",
    date: "03-10-2024",
    status: "Active",
  },
  {
    orgName: "Greenmouse Tech",
    orgLogo: "/images/greenmouse(1).png",
    role: "Project Manager",
    date: "03-10-2024",
    status: "Active",
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Google Event",
    logo: "/images/google.png",
    date: "30/08/2023",
  },
  {
    title: "Google Event",
    logo: "/images/google(1).png",
    date: "30/08/2023",
  },
  {
    title: "Google Event",
    logo: "/images/google(2).png",
    date: "30/08/2023",
  },
  {
    title: "Apple Config",
    logo: "/images/apple_config.png",
    date: "30/08/2023",
  },
];

/* =========================
   SIDEBAR MENU (FIXED)
========================= */

const basePaths = {
  individual: "/individual",
  organization: "/organization",
  admin: "/admin",
};

export const menuConfig = {
  individual: [
    {
      name: "Dashboard",
      path: `${basePaths.individual}/dashboard`,
      icon: <CgHome />,
    },
    {
      name: "Membership",
      path: `${basePaths.individual}/membership`,
      icon: <RiFileCheckLine />,
    },
    {
      name: "Subscription",
      path: `${basePaths.individual}/subscription`,
      icon: <MdOutlineSubscriptions />,
    },
    {
      name: "ID Cards",
      path: `${basePaths.individual}/id-cards`,
      icon: <GoClock />,
    },
    {
      name: "Event",
      path: `${basePaths.individual}/event`,
      icon: <FiCreditCard />,
    },
    {
      name: "Verify",
      path: `${basePaths.individual}/verify`,
      icon: <LuBell />,
    },
    {
      name: "Notification",
      path: `${basePaths.individual}/notification`,
      icon: <LuBell />,
    },
    {
      name: "Settings",
      path: `${basePaths.individual}/settings`,
      icon: <IoSettingsOutline />,
    },
  ],

  organization: [
    {
      name: "Dashboard",
      path: `${basePaths.organization}/dashboard`,
      icon: <CgHome />,
    },
    {
      name: "Membership",
      path: `${basePaths.organization}/membership`,
      icon: <RiFileCheckLine />,
    },
    {
      name: "Subscription",
      path: `${basePaths.organization}/subscription`,
      icon: <MdOutlineSubscriptions />,
    },
    {
      name: "ID Cards",
      path: `${basePaths.organization}/id-cards`,
      icon: <GoClock />,
    },
    {
      name: "Event",
      path: `${basePaths.organization}/event`,
      icon: <FiCreditCard />,
    },
    {
      name: "Verify",
      path: `${basePaths.organization}/verify`,
      icon: <LuBell />,
    },
    {
      name: "Notification",
      path: `${basePaths.organization}/notification`,
      icon: <LuBell />,
    },
    {
      name: "Settings",
      path: `${basePaths.organization}/settings`,
      icon: <IoSettingsOutline />,
    },
  ],

  admin: [
    {
      name: "Dashboard",
      path: `${basePaths.admin}/dashboard`,
      icon: <CgHome />,
    },
    {
      name: "User Management",
      path: `${basePaths.admin}/users-management`,
      icon: <HiOutlineUserCircle />,
    },
    {
      name: "Event & Verification Logs",
      path: `${basePaths.admin}/event-verification-logs`,
      icon: <SlCalender />,
    },
    {
      name: "Subscription Management",
      path: `${basePaths.admin}/subscription-management`,
      icon: <FaRegCalendarCheck />,
    },
    {
      name: "Settings",
      path: `${basePaths.admin}/settings`,
      icon: <IoSettingsOutline />,
    },
  ],
};
