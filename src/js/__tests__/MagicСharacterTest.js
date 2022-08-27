import MagicСharacter from '../MagicСharacter';

test('Positive test of the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  expect(mage).toEqual({ name: 'Wizzard' });
});

test('Positive test of get stoned the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  expect(mage.stoned).toBe(false);
});

test('Positive test of set stoned the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  mage.stoned = true;
  expect(mage.stoned).toBe(true);
});

test('Positive test of get attack the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  expect(mage.attack).toBe(100);
});

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60],
  [6, 50],
])('Positive test of set attack the MagicСharacter class with parameters: name: Wizzard and attack: 100, % attack % damage', (attack, damage) => {
  const mage = new MagicСharacter('Wizzard', 100);
  mage.attack = attack;
  expect(mage.attack).toBe(damage);
});

test.each([
  [1, 100],
  [2, 85],
  [3, 72.075],
  [4, 60],
  [5, 48.39],
  [6, 37.075],
])('Positive test of set attack with stoned the MagicСharacter class with parameters: name: Wizzard and attack: 100, % attack % damage', (attack, damage) => {
  const mage = new MagicСharacter('Wizzard', 100);
  mage.stoned = true;
  mage.attack = attack;
  expect(mage.attack).toBeCloseTo(damage);
});

test('Positive test of get mainAttack the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  expect(mage.mainAttack).toBe(100);
});

test('Positive test of set mainAttack the MagicСharacter class with parameters: name: Wizzard and attack: 100', () => {
  const mage = new MagicСharacter('Wizzard', 100);
  mage.mainAttack = 120;
  expect(mage.mainAttack).toBe(120);
});
