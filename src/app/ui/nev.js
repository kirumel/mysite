"use client";
import Link from "next/link";
import SidebarComponent from "./toggle";

export default function nev() {
  const { showSidebar, handleToggleSidebar } = SidebarComponent();
  return (
    <div className="nev">
      <Link href="/" className="nevlist">
        Home
      </Link>
      <Link href="/introduciton" className="nevlist">
        Introduction
      </Link>
    </div>
  );
}
