export async function getBalance(params: string, headers: HeadersInit) {
  const url = `https://public-api.solscan.io/account/${params}`;
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const data = await res.json();
  return data.lamports / 10 ** 9;
}
