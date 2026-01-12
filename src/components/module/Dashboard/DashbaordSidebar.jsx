'use client'

import Link from "next/link";
import { useState } from "react";

export default function DashbaordSidebar() {
    const [open, setOpen] = useState(true);

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: "⌂" },
        { name: "Add product", href: "/dashboard/add-product", icon: "✚" },
    ];

    return (
        <aside
            className={`bg-white shadow-md ${open ? "w-64" : "w-16"} transition-width duration-300 flex flex-col`}
        >
            <div className="p-4 font-bold text-lg text-gray-800">
                {open ? "Home Panel" : "AP"}
            </div>
            <nav className="flex-1">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 transition text-gray-700"
                    >
                        <span>{item.icon}</span>
                        {open && <span>{item.name}</span>}
                    </Link>
                ))}
            </nav>
            <button
                className="p-3 text-gray-600 hover:bg-gray-100 transition"
                onClick={() => setOpen(!open)}
            >
                {open ? "く" : "≫"}
            </button>
        </aside>
    );
}
