import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";


interface NavigationPage {
  path: string,
  text: string,
}
const NavigationPages: NavigationPage[] = [
  { path: "/about", text: "About" },
  { path: "/bespoke-arrangements", text: "Bespoke Arrangements" },
  { path: "/contact", text: "Contact" },
  { path: "/cut-flowers", text: "Cut Flowers" },
  { path: "/events", text: "Events" },
  { path: "/", text: "Home" },
  { path: "/petal-confetti", text: "Petal Confetti" },
  { path: "/workshops", text: "Workshops" }
]

const drawerWidth = 240;

export default function Header() {
  const router = useRouter();
  const currentPage = router.pathname;

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <button
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          Menu
        </button>
      </div>
      {open &&
        <div>
          <div>
            <button onClick={handleDrawerClose}>
              Close
            </button>
          </div>
          <hr/>

          <ul>
            {NavigationPages.map((navlink, i) => navigationLink(currentPage, navlink, i))}
          </ul>
        </div>
      }
    </>
  )
}

function navigationLink(currentPage: string, navlink: NavigationPage, key: number) {
  return (
    <Link key={key} href={navlink.path}>
      <li style={(currentPage == navlink.path) ? { backgroundColor: "rgba(0,0,0,0.1)" } : undefined}>
        <a>{navlink.text}</a>
      </li>
    </Link>
  )
}