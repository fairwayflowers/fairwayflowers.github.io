import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";

interface HeaderNavProperties {
  pageTitle: string
}

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

export default function HeaderNav(props: HeaderNavProperties) {
      const router = useRouter();
      const currentPage = router.pathname;

      return (   
        <div>
          <Head>
            <title>{props.pageTitle}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            <ul>       
              {NavigationPages.map((navlink, i) => {   
                  return (
                    <li key={i}>
                      <Link href={navlink.path}>
                        <a style={(currentPage == navlink.path)? {backgroundColor: "red"}: undefined}>{navlink.text}</a>
                      </Link>
                    </li>
                    ) 
                })}
            </ul>
          </div>
        </div>   

      )
}