import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";


export default async function Footer() {
    const client = createClient();

    const settings =await client.getSingle("settings");

    return <footer>
         <Link href="/">
            {settings.data.site_title}
            </Link>


            <p>©{new Date().getFullYear()}</p>

            <ul>
                {settings.data.navigation.map((navItem) => (
                    <li key={navItem.label}>
                        <PrismicNextLink field={navItem.link}>{navItem.label}</PrismicNextLink>
                    </li>
                ))}
            </ul>

    </footer>
}