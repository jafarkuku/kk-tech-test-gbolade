export function formatCatNames(names: string[]): string {
  if (names.length === 1) {
    return names[0];
  }

  if (names.length === 2) {
    return `${names[0]} and ${names[1]}`;
  }

  const last = names.pop();

  return `${names.join(', ')} and ${last}`;
}
