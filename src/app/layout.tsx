import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/header";
import Footer from "@/components/footer";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

const nunito_sans = Nunito_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return {
        title: settings.data.site_title || "Flowrise",
        description:
            settings.data.meta_description ||
            "Flowrise is the app to keep you relaxed.",
        openGraph: {
            images: [settings.data.og_image.url || ""],
        },
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={clsx(nunito.variable, nunito_sans.variable)}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
