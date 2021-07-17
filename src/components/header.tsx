import { CssBaseline } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";

interface NavigationPage {
  path: string,
  text: string,
}
const NavigationPages: NavigationPage[] = [
  {path:"/about", text: "About"},
  {path:"/bespoke-arrangements", text: "Bespoke Arrangements"},
  {path:"/contact", text: "Contact"},
  {path:"/cut-flowers", text: "Cut Flowers"},
  {path:"/events", text: "Events"},
  {path:"/", text: "Home"},
  {path:"/petal-confetti", text: "Petal Confetti"},
  {path:"/workshops", text: "Workshops"}
]

export default function Header() {
      const router = useRouter();
      const currentPage = router.pathname;

      return (   
        <div>
          <div>
            <ul>       
              {NavigationPages.map((navlink, i) => navigationLink(currentPage, navlink, i))}
            </ul>
          </div>
        </div>   

      )
}

function navigationLink(currentPage: string, navlink: NavigationPage, key: number) {
    return (
      <li key={key}>
        <Link href={navlink.path}>
          <a style={(currentPage == navlink.path)? {backgroundColor: "red"}: undefined}>{navlink.text}</a>
        </Link>
      </li>
      ) 
}