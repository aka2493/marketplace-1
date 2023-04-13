import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "../../../utils/linkActiveChecker";

const Sidebar = () => {
  const router = useRouter();

  const sidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/dashboard/db-dashboard",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: "Cloud Management",
      routePath: "/dashboard/db-servers",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: "Messages",
      routePath: "/dashboard/db-messages",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: " Buying Activity",
      routePath: "/dashboard/db-buying-activity",
    },
    {
      id: 4,
      icon: "/img/dashboard/sidebar/bookmark.svg",
      name: "Selling Activity",
      routePath: "/dashboard/db-seller-activity",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: " My Finance",
      routePath: "/dashboard/db-finance",
    },
    {
      id: 6,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: "Account and Security",
      routePath: "/dashboard/db-settings",
    },
    {
      id: 7,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Promotions",
      routePath: "/dashboard/db-promotions",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {sidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${isActiveLink(item.routePath, router.asPath) ? "-is-active" : ""
              } sidebar__button `}
          >
            <Link
              href={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <Image
                width={20}
                height={20}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
