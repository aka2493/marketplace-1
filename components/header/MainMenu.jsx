import Link from "next/link";

import {
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        <li className={router.pathname === "/startlisting" ? "current" : ""}>
          <Link href="/startlisting">Start Listing</Link>
        </li>

        <li className={router.pathname === "/startselling/sellerInfoscreen" ? "current" : ""}>
          <Link href="/startselling/sellerInfoscreen">SellerInfo</Link>
        </li>



        <li
          className={`${isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}

        <li
          className={`${isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li className={router.pathname === "/domains/domain-listing" ? "current" : ""}>
          <Link href="/domains/domain-listing">Domains</Link>
        </li>
        <li className={router.pathname === "/templates/template-listing" ? "current" : ""}>
          <Link href="/templates/template-listing">Templates</Link>
        </li>

        <li className={router.pathname === "/software-code/software-listing" ? "current" : ""}>
          <Link href="/software-code/software-listing">Software Code</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
