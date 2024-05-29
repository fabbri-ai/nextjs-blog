"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/posts",
        label: "Posts",
    }
]

export default function Header() {
    const pathname = usePathname();

    return <header className="flex justify-between py-4 px-7 bg-gray-100 border-b" >
        <Link href="/">
            <Image src="/logo-alt.webp" alt="logo" className="w-[35px] h-[35px]" width="35" height="35" />
        </Link>
        <nav>
            <ul className="flex gap-x-5">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>;
}