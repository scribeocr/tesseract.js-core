const TesseractCore = require('../../../tesseract-core');
const TesseractCoreSIMD = require('../../../tesseract-core-simd');
const TesseractCoreVanilla = require('../../../vanilla/tesseract-core');
const TesseractCoreSIMDVanilla = require('../../../vanilla/tesseract-core-simd');

module.exports = (desc, callback, { timeout }) => {
  it(`[WASM]: ${desc}`, callback(TesseractCore)).timeout(timeout);
  it(`[WASM-SIMD]: ${desc}`, callback(TesseractCoreSIMD)).timeout(timeout);
  it(`[WASM Vanilla]: ${desc}`, callback(TesseractCoreVanilla)).timeout(timeout);
  it(`[WASM-SIMD Vanilla]: ${desc}`, callback(TesseractCoreSIMDVanilla)).timeout(timeout);
};
