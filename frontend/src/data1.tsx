import { SlCalender } from "react-icons/sl";
import { CgHome } from "react-icons/cg";
import { RiFileCheckLine } from "react-icons/ri";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FiCreditCard } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsersLine } from "react-icons/fa6";
import { PiCheckSquare } from "react-icons/pi";
import { BsCreditCard } from "react-icons/bs";

export type StatCardProps = {
  count: string;
  label: string;
  icon: JSX.Element;
  gradient: string;
  bgColor: string;
};

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

export const OrganisationStats: StatCardProps[] = [
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

export type RecentID = {
  orgName: string;
  orgLogo: string;
  role: string;
  date: string;
  status: "Active" | "Pending";
};

//individual Upcoming event
export type UpcomingEvent = {
  title: string;
  logo: string;
  date: string;
};

//Orgaisation Upcoming event
export type OrgUpcomingEvent = {
  title: string;
  eventlogo: string;
  date: string;
  attendees: number;
  tickettype: string;
};

export type OrgMEmber = {
  individual: string;
  role: string;
  email: string;
  status: string;
};

export const orgMembers: OrgMEmber[] = [
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
    status: "Inactive",
  },
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
    status: "Inactive",
  },
  {
    individual: "Chukka Uzo",
    role: "Product Designer",
    email: "testmail@gmail.com",
    status: "Active",
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
    title: "Google Event",
    eventlogo: "/images/galaxy2.png",
    date: "05/04/2025",
    tickettype: "Paid",
    attendees: 80,
  },
  {
    title: "Galaxy UI Event",
    eventlogo: "/images/galaxy3.png",
    date: "30/06/2025",
    tickettype: "Paid",
    attendees: 520,
  },
  {
    title: "Galaxy UI Event",
    eventlogo: "/images/galaxy4.png",
    date: "10/08/2025",
    attendees: 220,
    tickettype: "Free",
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
    orgName: "Afrima Lmt",
    orgLogo: "/images/afrima.png",
    role: "Sales Rep",
    date: "03-10-2024",
    status: "Active",
  },
  {
    orgName: "Greenmouse Tech",
    orgLogo: "/images/cap.png",
    role: "Product Designer",
    date: "03-10-2024",
    status: "Active",
  },
  {
    orgName: "Greenmouse Tech",
    orgLogo: "/images/greenmouse(1).png",
    role: "Product Designer",
    date: "03-10-2024",
    status: "Pending",
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  { title: "Google Event", logo: "/images/google.png", date: "30/08/2023" },
  { title: "Apple Config", logo: "/images/apple.png", date: "30/08/2023" },
  { title: "Google Event", logo: "/images/google(1).png", date: "30/08/2023" },
  { title: "Google Event", logo: "/images/google(2).png", date: "30/08/2023" },
];

//sidebar menu
export const menuConfig = {
  individual: [
    { name: "Dashboard", path: "/dashboard", icon: <CgHome /> },
    { name: "Membership", path: "membership", icon: <RiFileCheckLine /> },
    {
      name: "Subscription",
      path: "/subscription",
      icon: <MdOutlineSubscriptions />,
    },
    { name: "ID Cards", path: "/id-cards", icon: <GoClock /> },
    { name: "Event", path: "/event", icon: <FiCreditCard /> },
    { name: "Verify", path: "/verify", icon: <LuBell /> },
    { name: "Notification", path: "/notification", icon: <LuBell /> },
    { name: "Settings", path: "/settings", icon: <IoSettingsOutline /> },
  ],
  organization: [
    { name: "Dashboard", path: "/dashboard", icon: <CgHome /> },
    { name: "Membership", path: "membership", icon: <RiFileCheckLine /> },
    {
      name: "Subscription",
      path: "/subscription",
      icon: <MdOutlineSubscriptions />,
    },
    { name: "ID Cards", path: "/id-cards", icon: <GoClock /> },
    { name: "Event", path: "/event", icon: <FiCreditCard /> },
    { name: "Verify", path: "/verify", icon: <LuBell /> },
    { name: "Notification", path: "/notification", icon: <LuBell /> },
    { name: "Settings", path: "/settings", icon: <IoSettingsOutline /> },
  ],
};
