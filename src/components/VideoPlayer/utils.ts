export function precisionRound(number: number, precision = 2) {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
}

export const playlist = [
  { id: "scaling-eth", title: "Scaling Ethereum", startAt: 0, endAt: 5 },
  { id: "starknet", title: "Starknet", startAt: 5, endAt: 10 },
  { id: "sequencer", title: "The Sequencer", startAt: 10, endAt: 15 },
  { id: "prover", title: "The Prover", startAt: 15, endAt: 20 },
  {
    id: "eth-settlement",
    title: "Ethereum settlement",
    startAt: 20,
    endAt: 25,
  },
  { id: "builders", title: "Builders", startAt: 25, endAt: 30 },
];
