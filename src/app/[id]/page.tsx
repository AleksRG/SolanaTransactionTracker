import Image from "next/image";
import { formatDateTime } from "../lib/formatDateTime";
import { formattAddress } from "../lib/formattAddress";
import { getBalance } from "../lib/getBalance";
import { getSolTrx } from "../lib/getSolTrx";

export default async function Page({ params }: { params: { id: string } }) {
  const headers = {
    accept: "application/json",
    token: process.env.NEXT_PUBLIC_API_KEY || "",
  };

  const data = await getSolTrx(params.id, headers);
  const balance = getBalance(params.id, headers);
  return (
    <div className="p-4 font-thin flex font-mono min-w-screen min-h-screen flex-col w-full bg-black items-center justify-center gap-4">
      <div className="w-full justify-center items-center flex sticky top-2 h-14 bg-black/60">
        <div className="w-full max-w-xl flex justify-between text-white/70">
          <span>{formattAddress(params.id)}</span>
          <div>
            <span>{(await balance) >= 0 ? (await balance).toFixed(6) : 0}</span>{" "}
            <span className="text-zinc-500">SOL</span>
          </div>
        </div>
      </div>

      {data &&
        data.data.map((item: any, index: number) => (
          <div
            key={index}
            className="text-white rounded-md p-2 hover:scale-105 duration-700 border w-full max-w-xl border-zinc-900"
          >
            <div className="flex justify-between text-xs text-zinc-500">
              <span className="text-sky-700">Fee: {item.fee / 10 ** 9}</span>{" "}
              <span>{formatDateTime(item.blockTime)}</span>
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
                <div className="flex flex-col">
                  {item.src === params.id ? (
                    <>
                      <p className="text-xs text-zinc-500">Send to:</p>
                      <p className="text-sm">{formattAddress(item.dst)}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-zinc-500">Received from:</p>
                      <p className="text-sm"> {formattAddress(item.src)}</p>
                    </>
                  )}
                </div>
              </div>
              {item.src != params.id ? (
                <span className="text-md text-lime-600">
                  +{item.lamport / 10 ** 9}
                </span>
              ) : (
                <span className="text-md text-rose-600">
                  {" "}
                  -{item.lamport / 10 ** 9}
                </span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
