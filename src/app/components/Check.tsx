"use client";
import Link from "next/link";
import { useState } from "react";

export default function Check() {
  const [link, setLink] = useState("");

  return (
    <div className="w-full justify-center flex items-center gap-2">
      <input
        placeholder={"Enter the wallet address"}
        className="w-full max-w-xl h-10 rounded-xl bg-black/20 text-sm duration-700 border hover:bg-black/50 hover:border-sky-900/50 border-zinc-900 p-1.5 text-zinc-500 hover:text-zinc-300 tracking-tight text-center outline-none"
        onChange={(e) => setLink(e.target.value)}
      />

      <Link
        href={`/${link}`}
        className="w-24 h-10 items-center rounded-xl bg-black/20 text-sm duration-700 border hover:bg-black/50 hover:border-sky-900/50 border-zinc-900 p-2 text-zinc-500 tracking-tight hover:text-sky-700 flex justify-center"
      >
        Check
      </Link>
    </div>
  );
}
