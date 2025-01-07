import Image from "next/image";
import Link from "next/link";
const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo menu button */}
      <div>
        {/* logo */}
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* Menu list */}
        <div className="flex flex-col">
          {menuList.map((menu) => (
            <Link key={menu.id} href={menu.link}>
              <Image
                src={`/icons/${menu.icon}`}
                alt={menu.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* user */}
      <div></div>
    </div>
  );
}
