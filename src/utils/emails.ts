export function senEmailTo(email: string, subject: string) {
  const fixedSubject = subject.split(" ");
  window.open(`mailto:${email}?subject=${fixedSubject.join("%20")}`);
}
