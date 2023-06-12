const { test } = QUnit;
QUnit.module('fizzbuzz', function () {
    test('Létezik-e?', function (assert) {
        assert.ok(fizzbuzz, "FizzBuzz létezik");
    });
    test('Függvény-e?', function (assert) {
        assert.ok(typeof fizzbuzz == "function", "Nem függvény");
    });
    test('1-e?', function (assert) {
        assert.equal(fizzbuzz(1), "1");
    });
    test('3 osztható-e?', function (assert) {
        assert.equal(fizzbuzz(6), "1,2,fizz,4,buzz,fizz");
    });
    test('5 osztható-e?', function (assert) {
        assert.equal(fizzbuzz(5), "1,2,fizz,4,buzz");
    });
    test('15 osztható-e?', function (assert) {
        assert.equal(fizzbuzz(15), "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz");
    });
    test('Szám-e?', function (assert) {
        assert.equal(fizzbuzz("a"), "Nem számot adtál meg!");
    });
    test('Minusz-e?', function (assert) {
        assert.equal(fizzbuzz(-5), "Hiba nem lehet minusz!");
    });
});
