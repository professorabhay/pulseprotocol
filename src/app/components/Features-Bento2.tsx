import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/app/components/ui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "@/app/components/animated-beam-multiple-outputs";
import { AnimatedListDemo } from "@/app/components/animated-list-demo";
import { BentoCard, BentoGrid } from "./ui/magicui-bento-grid";
import Marquee from "@/app/components/ui/marquee";

const handlers = [
  {
    name: "GET_USERS",
    body: "Fetch a list of users with support for pagination, sorting, and cursors.",
  },
  {
    name: "SUBMIT_POST",
    body: "Enable users to submit new posts, including content and media attachments.",
  },
  {
    name: "UPDATE_PROFILE",
    body: "Allows users to update profile details such as username, description, and images.",
  },
  {
    name: "LIKE_POST",
    body: "Facilitate post interactions by toggling likes and unlikes.",
  },
  {
    name: "GET_PROFILES",
    body: "Fetch profile details for multiple users in a single batch request.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "User Management",
    description: "Manage users with paginated data retrieval and advanced querying.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {handlers.map((handler, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-blue-400/[.1] bg-blue-400/[.10] hover:bg-blue-400/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-blue-100">
                  {handler.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-blue-200">
              {handler.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Real-Time Post Interactions",
    description: "Allow users to submit posts, toggle likes/unlikes, and add comments.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-blue-200" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Profile Management",
    description: "Update and retrieve user profiles dynamically with batch support.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-blue-200" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Scheduled Tasks",
    description: "Automate tasks such as scheduling messages with time-sensitive operations.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2024, 11, 4, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border border-blue-400/30 bg-blue-950/30 text-blue-200 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
