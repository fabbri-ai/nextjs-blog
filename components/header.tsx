import Image from "next/image";

export default function Header() {
    return <header>
        <Image src="/logo-alt.webp" alt="logo" className="w-[35px] h-[35px]" width="35" height="35"/>
    </header>;
}