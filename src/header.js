// Bitcoin block header parser
function parseHeader(hex) {
  return {
    version: parseInt(hex.slice(0,8), 16),
    prevHash: hex.slice(8, 72),
    merkleRoot: hex.slice(72, 136),
    timestamp: parseInt(hex.slice(136, 144), 16),
    bits: hex.slice(144, 152),
    nonce: parseInt(hex.slice(152, 160), 16),
  };
}
module.exports = { parseHeader };
