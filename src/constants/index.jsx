import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Section 1", href: "#section1" },
  { label: "Section 2", href: "#section2" },
  { label: "Section 3", href: "#section3" },
  { label: "Section 4", href: "#section4" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Example Company",
    image: user1,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt!",
  },
  {
    user: "Jane Smith",
    company: "Example Company",
    image: user2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    user: "David Johnson",
    company: "Example Company",
    image: user3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    user: "Ronee Brown",
    company: "Example Company",
    image: user4,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!",
  },
  {
    user: "Michael Wilson",
    company: "Example Company",
    image: user5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    user: "Emily Davis",
    company: "Example Company",
    image: user6,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Feature 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Fingerprint />,
    text: "Feature 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <ShieldHalf />,
    text: "Feature 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BatteryCharging />,
    text: "Feature 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <PlugZap />,
    text: "Feature 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <GlobeLock />,
    text: "Feature 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const checklistItems = [
  {
    title: "Capability 1",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Capability 2",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Capability 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Capability 4",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3",
      "Benefit 4",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3",
      "Benefit 4",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3",
      "Benefit 4",
    ],
  },
];

export const resourcesLinks = [
  { href: "#footer", text: "Getting Started" },
  { href: "#footer", text: "Documentation" },
  { href: "#footer", text: "Tutorials" },
  { href: "#footer", text: "API Reference" },
  { href: "#footer", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#footer", text: "Features" },
  { href: "#footer", text: "Supported Devices" },
  { href: "#footer", text: "System Requirements" },
  { href: "#footer", text: "Downloads" },
  { href: "#footer", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#footer", text: "Events" },
  { href: "#footer", text: "Meetups" },
  { href: "#footer", text: "Conferences" },
  { href: "#footer", text: "Hackathons" },
  { href: "#footer", text: "Jobs" },
];