"use client"

import { usePathname } from 'next/navigation'
import Link from "next/link"

const list = [
    {
        text: "Home",
        slug: "/",
    },
    {
        text: "Destination",
        slug: "/destination",
    },
    {
        text: "Crew",
        slug: "/crew",
    },
    {
        text: "Technology",
        slug: "/technology",
    },
]

export default function Navigation() {
    const pathname = usePathname();

    function prefixNumber(index: number): string {
        if (index < 10) {
            return Number(0).toString().concat(index.toString())
        }

        return index.toString();
    }

    return (
        <nav className='w-[222px] md:w-unset h-[172px] flex-col flex md:flex-row gap-400 md:gap-600 items-center'>
            {
                list.map((item, index: number) => (
                    <li key={item.slug} className="group md:w-unset w-full flex md:h-1200 gap-100 items-center relative">
                        <Link href={item.slug} className="flex gap-150 items-center">
                            <span className="text-preset-8-bold text-white">{prefixNumber(index)}</span>
                            <p className="text-preset-8 text-white uppercase">{item.text}</p>
                        </Link>
                    <hr className={`${pathname === item.slug ? 'bg-white' : 'group-hover:bg-white/50 bg-white/0'}  border-none absolute bottom-0 right-0 w-[3px] h-full md:w-full md:h-[3px] md:left-0`} />
                    </li>
                ))
            }
        </nav>
    )
}