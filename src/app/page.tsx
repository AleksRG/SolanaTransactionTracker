import Check from "./components/Check";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen w-screen p-2 justify-center items-center bg-black font-mono">
      <h1 className="text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white flex text-center text-lg">
        Get last 100 SOL transcactions by wallet
      </h1>
      <Check />
    </main>
  );
}
