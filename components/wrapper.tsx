"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

const SECTION_DATA = [
  { label: 1, href: "/", isFirst: true, isLast: false },
  { label: 2, href: "/page-2", isFirst: true, isLast: false },
  { label: 3, href: "/page-3", isFirst: false, isLast: true },
];

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextPage, setNextPage] = useState<undefined | string>("/");
  const [previousPage, setPreviousPage] = useState<undefined | string>("/");
  const pathname = usePathname();
  const activeSection = SECTION_DATA.find(
    (section) => section.href === pathname,
  );

  useEffect(() => {
    if (activeSection?.isFirst || activeSection?.isLast == false) {
      setNextPage(`page-${currentIndex + activeSection.label}`);
    } else {
      setPreviousPage(`page-${Math.abs(currentIndex - activeSection?.label!)}`);
    }
  }, [
    activeSection?.isFirst,
    activeSection?.isLast,
    activeSection?.label,
    currentIndex,
  ]);

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className={`flex items-center text-2xl font-bold dark:text-white`}
        >
          ML.17.{" "}
          <span
            className={`name group ml-2 inline-block rounded-3xl bg-[#fafafa] px-3 text-sm font-bold text-black`}
          >
            <span className="">v3.2</span>
          </span>
        </Link>

        <ThemeToggle />
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        <Link href={previousPage as string} passHref>
          <Button
            disabled
            className="rounded-3xl bg-[#e0dede] px-7 py-2 text-sm font-bold text-black opacity-50 hover:bg-[#d1d0d0] dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            <span className="">Back</span>
          </Button>
        </Link>
       
        <Link href={nextPage as string} passHref>
          <Button
            className={`rounded-3xl bg-zinc-900 px-7 py-2 text-sm font-bold text-white dark:bg-white dark:text-black`}
          >
            <span className="">Next</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
