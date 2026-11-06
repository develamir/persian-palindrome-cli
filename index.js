#!/usr/bin/env node
'use strict';
function normalizeText(text) {
  return String(text)
    .normalize('NFKD')
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/[^\p{Script=Arabic}]/gu, '')
    .toLowerCase()
    .trim();
}
function isPersianPalindrome(text) {
  const normalized = normalizeText(text);
  if (normalized.length === 0) return false;
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}
function main(args) {
  const text = (args && args[0]) || '';
  const result = isPersianPalindrome(text);
  console.log(result ? 'Palindrome' : 'Not palindrome');
  return result;
}
module.exports = {
  normalizeText,
  isPersianPalindrome,
  main
};
