"use client";
import { useEffect } from "react";
import Check from "./components/Check";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import Carousel from "./components/Carousel";
export default function Home() {
  const { publicKey } = useWallet();

  const WalletMultiButtonDynamic = dynamic(() =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    )
  );
  return (
    <main className="flex flex-col gap-4 h-screen w-screen p-2 justify-center items-center bg-black font-mono">
      <Carousel />
      <div className="rounded-xl leading-none flex items-center w-full justify-center border border-zinc-900 bg-black/20 hover:bg-black/50 duration-700 sm:w-60 hover:border-zinc-900/50 hover:text-zinc-300">
        <WalletMultiButtonDynamic
          style={{
            height: 35,
            fontSize: 14,
            fontWeight: "normal",
            color: "rgb(113 113 122)",
            background: "transparent",
            borderRadius: "10px",
          }}
        />
      </div>
      {publicKey && <Check publicKey={`${publicKey?.toBase58()}`} />}
    </main>
  );
}
