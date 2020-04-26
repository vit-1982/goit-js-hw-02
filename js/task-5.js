const checkForSpam = function (message) {
  const lowerMessage = message.toLowerCase();
  const banWord1 = "spam";
  const banword2 = "sale";
  return lowerMessage.includes(banWord1) || lowerMessage.includes(banword2);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
