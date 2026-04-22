import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex fixed top-0 left-0 right-0 z-50 bg-background h-12 items-center justify-center shadow-md">
            <div className="flex items-center justify-between gap-4 w-full max-w-4xl px-4">
                <img src="/landing/logo.svg" alt="Logo" className="h-6" />
                <ul className="flex gap-4 w-auto justify-center items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}