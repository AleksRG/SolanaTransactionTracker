export async function getSolTrx(params: string, headers: HeadersInit) {
  const url = `https://public-api.solscan.io/account/solTransfers?account=${params}&limit=100`;
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const data = await res.json();
  return data;
}
