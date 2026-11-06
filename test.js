'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeText, isPersianPalindrome } = require('./index.js');
test('normalizeText removes non Arabic characters', () => {
  assert.equal(normalizeText('سلام!'), 'سلام');
});
test('isPersianPalindrome detects a single character as palindrome', () => {
  assert.equal(isPersianPalindrome('م'), true);
});
test('isPersianPalindrome rejects non-palindrome text', () => {
  assert.equal(isPersianPalindrome('سلام'), false);
});
test('isPersianPalindrome handles empty string', () => {
  assert.equal(isPersianPalindrome(''), false);
});
