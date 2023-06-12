import Link from "next/link";

export default function Check({ publicKey }: { publicKey: string }) {
  return (
    <Link
      href={`/${publicKey}`}
      className="rounded-xl leading-none flex items-center w-full justify-center border border-zinc-900 bg-black/20 hover:bg-black/50 duration-700 sm:w-60 hover:border-zinc-900/50 hover:text-zinc-300 h-9 text-zinc-500"
    >
      Check
    </Link>
  );
}
