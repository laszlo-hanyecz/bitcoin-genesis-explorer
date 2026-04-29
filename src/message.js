// Decode coinbase message from genesis block
function decodeGenesisMessage(hex) {
  return Buffer.from(hex, 'hex').toString('utf8').replace(/\0/g, '');
}
module.exports = { decodeGenesisMessage };
