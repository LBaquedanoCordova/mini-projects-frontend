//validateInput.js

function validateFullName(value) {
  const trimmedValue = value.trim();

  if (trimmedValue === "") return false;
  if (trimmedValue.length < 2 || trimmedValue.length > 50) return false;

  if (
    !/^[\p{L}áéíóúüñÁÉÍÓÚÜÑ'-]+(?:\s+[\p{L}áéíóúüñÁÉÍÓÚÜÑ'-]+)*$/u.test(
      trimmedValue
    )
  )
    return false;

  if (/(?!\s)([\p{L}-])\1{2,}/u.test(trimmedValue)) return false;

  const containsLatin = /\p{Script=Latin}/u.test(trimmedValue);
  const containsNonLatin =
    /[\p{Script=Han}\p{Script=Cyrillic}\p{Script=Arabic}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(
      trimmedValue
    );

  if (containsLatin && containsNonLatin) return false;

  return true;
}

function validateEmail(value) {
  const trimmedValue = value.trim().toLowerCase();

  if (trimmedValue === "") return false;

  // 1. Validación de formato más sólida
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(trimmedValue)) return false;

  // 2. Evita errores comunes de tipeo
  const blockedDomains = [
    "gmal.com",
    "gnail.com",
    "hotnail.com",
    "outllok.com",
    "yaho.com",
    "icloud.con",
  ];

  const domain = trimmedValue.split("@")[1];
  if (blockedDomains.includes(domain)) return false;

  return true;
}

export { validateFullName, validateEmail };
