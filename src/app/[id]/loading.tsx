import Image from "next/image";
import React from "react";

function loading() {
  const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="p-4 font-thin flex font-mono min-w-screen min-h-screen flex-col w-full bg-black items-center justify-center gap-4">
      <div className="w-full justify-center items-center flex sticky top-2 h-14 bg-black/60">
        <div className="w-full max-w-xl flex justify-between text-white/70">
          <span
            className="bg-zinc-700/40 inline-block h-3 rounded-full animate-pulse w-32"
            style={{
              animationDelay: `${1 * 0.05}s`,
              animationDuration: "1s",
            }}
          />
          <div className="">
            <span
              className="bg-zinc-700/40 inline-block h-3 rounded-full animate-pulse w-32"
              style={{
                animationDelay: `${1 * 0.05}s`,
                animationDuration: "1s",
              }}
            />
            <span
              className="bg-zinc-700/40 inline-block h-3 rounded-full animate-pulse w-8"
              style={{
                animationDelay: `${1 * 0.05}s`,
                animationDuration: "1s",
              }}
            />
          </div>
        </div>
      </div>
      {loading.map((i) => (
        <div
          key={i}
          className="text-white rounded-md p-2 hover:scale-105 duration-700 border w-full max-w-xl border-zinc-900"
        >
          <div className="flex justify-between text-xs text-zinc-500">
            <span
              className="bg-sky-700/40 inline-block h-2 rounded-full animate-pulse w-32"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}
            />{" "}
            <span
              className="bg-zinc-700/40 inline-block h-2 rounded-full animate-pulse w-32"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}
            />{" "}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm gap-2">
              <Image
                src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                width={40}
                height={40}
                unoptimized={true}
                className="rounded-full -ml-7 border border-zinc-900"
                alt="Solana"
                priority
              />{" "}
              <div className="flex flex-col space-y-2">
                <span
                  className="bg-zinc-700/40 inline-block h-2 rounded-full animate-pulse w-24"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: "1s",
                  }}
                />

                <span
                  className="bg-zinc-700/40 inline-block h-2 rounded-full animate-pulse w-32"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: "1s",
                  }}
                />
              </div>
            </div>

            <span
              className="bg-zinc-700/40 inline-block h-3 rounded-full animate-pulse w-24"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default loading;
