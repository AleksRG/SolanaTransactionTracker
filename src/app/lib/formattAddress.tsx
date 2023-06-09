export function formattAddress(address: string): string {
  const firstFour = address.substring(0, 6);
  const lastFour = address.substring(address.length - 6);
  return `${firstFour}...${lastFour}`;
}
