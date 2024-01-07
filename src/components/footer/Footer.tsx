import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "../bounded";

export default async function Footer() {
    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <Bounded as="footer">
            <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
                <p className="text-xs">© {settings.data.site_title}</p>
            </div>
        </Bounded>
    );
}
