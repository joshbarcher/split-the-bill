export function formatMoney(cents) {
  const dollars = Math.floor(cents / 100);
  const rest = String(cents % 100).padStart(2, "0");
  return `$${dollars}.${rest}`;
}

export function tipFor(cents, percent) {
  return Math.round((cents * percent) / 100);
}

export function perPerson(cents, people) {
  return Math.floor(cents / people);
}

export function billSummary(cents, percent, people) {
  const tip = tipFor(cents, percent);
  const total = cents + tip;
  return { tip, total, each: perPerson(total, people) };
}
