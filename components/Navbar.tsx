"use client"

import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            // Close the menu after clicking on a navigation link
        }
    };

    return (
        <header className="padding-container m-auto py-6">
            {isMenuOpen && (
                <div
                    className="z-10 fixed inset-0 bg-black opacity-80"
                    onClick={toggleMenu} // Close menu when overlay is clicked
                />
            )}
            <section className="flex justify-between items-center">
                <div className="flex w-1/4 justify-between items-center">
                    <Image src='/logo.svg' alt='logo' width={77} height={75} />
                </div>
                <nav className="w-full hidden md:block lg:w-2/4 justify-center items-center">
                    <ul className="flex gap-4 lg:gap-6 xl:gap-8 items-center justify-center">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <a
                                    className={`cursor-pointer pb-1.5 transition-all hover:text-primary-50 active:text-primary-50 ${link.key === 'home' ? 'font-black text-primary-50' : 'text-gray-50'}`}
                                    onClick={() => scrollToSection(link.href)} // Use onClick event on anchor tag
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-2 justify-end w-1/5 lg:w-1/4">
                    <Button
                        type="button"
                        title="Contact us"
                        variant='btn_white'
                    />
                    <Image
                        src='/menu.svg'
                        alt="menu"
                        width={46}
                        height={46}
                        className="block cursor-pointer md:hidden"
                        onClick={toggleMenu}
                    />

                </div>
            </section>

            <div className={`z-10 fixed inset-y-0 right-0 w-7/12 bg-primary-70 text-black transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500`}>
                <nav className="h-full">
                    <Image
                        src='/close.svg'
                        alt="close"
                        width={32}
                        height={32}
                        className="block cursor-pointer md:hidden absolute top-3 right-3"
                        onClick={toggleMenu}
                    />
                    <ul className="p-6 flex-col justify-center items-center">
                        {NAV_LINKS.map((link) => (
                            <li className="justify-center items-center w-100 bg-blue justify-self-center" key={link.key}>
                                <a
                                    href={link.href}
                                    className="block py-2 text-center self-center hover:text-primary-50"
                                    onClick={(event) => {
                                        event.preventDefault(); // Prevent the default behavior of anchor tag
                                        toggleMenu();
                                        scrollToSection(link.href);
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Navbar;
