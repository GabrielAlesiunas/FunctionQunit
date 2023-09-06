// Participantes: Gabriel Alesiunas Raimundo e Guilherme Sucigan Felippe

QUnit.module('somar', function() {
    QUnit.test('Soma de tres valores', function(assert) {1
      assert.equal(somar(1, 2, 3),6);
    });
  });

QUnit.module('mult', function() {
    QUnit.test('Multiplicação de tres valores', function(assert) {
      assert.equal(mult(10, 2, 5), 100);
    });
  });

QUnit.module('diveMult', function() {
    QUnit.test('Divisão e multiplicação de valores', function(assert) {
      assert.equal(diveMult(2, 2, 2, 2), 4);
    });
  });

QUnit.module('div', function() {
    QUnit.test('Quociente', function(assert) {
      assert.equal(div(10, 2), 5);
    });
  });

QUnit.module('CFK', function() {
    QUnit.test('Kelvin em celsius', function(assert) {
      assert.equal(CFK(100, 273), -173);
    });
  });    