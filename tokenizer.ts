export function tokenizeText(text: string): string[] {
  const tokens: string[] = text.split(/[.#>+*${}\d+\s*]+/);
  return tokens.filter((token) => token.length > 0);
}
