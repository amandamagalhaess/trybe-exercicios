const { encode, decode } = require('./encodeDecode');

describe('Verifica as funções encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode, testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Para a função decode, testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Testa se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
    expect(decode('67890')).toBe('67890');
  });
  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('bcdfg').length).toBe(5);
    expect(decode('67890').length).toBe(5);
  });
});
