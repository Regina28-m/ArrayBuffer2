import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('должна загружать данные в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConverter.load(buffer);
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('должна возвращать строку из буфера', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
