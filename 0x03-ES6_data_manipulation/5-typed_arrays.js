export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const uint8 = new Int8Array(buffer);
  if (position > length) {
    throw Error('Position outside range');
  }
  uint8[position] = value;
  return buffer;
}
