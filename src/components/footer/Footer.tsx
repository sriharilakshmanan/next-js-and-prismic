import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
        <footer>
            <Link href="/">{settings.data.site_title}</Link>
            <p>{`© ${new Date().getFullYear()} Flowrise`}</p>
        </footer>
    );
}

export default Footer;
