export default function validatePhoneNumber(phoneNumber: string): boolean {
  const PHONE_REGEX = new RegExp(/^(\+47)?\d{8}$/);
  return PHONE_REGEX.test(phoneNumber);
}
