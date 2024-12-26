export function capitalize(str: string): string {
  return str.length > 1
    ? str[0].toUpperCase() + str.substring(1)
    : str.toUpperCase();
}
