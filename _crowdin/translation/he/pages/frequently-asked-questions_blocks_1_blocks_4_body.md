Currently not. STARKs are defined as Validity proofs, meaning they prove computational integrity. With Validity proofs (STARKs included), one party can prove to another that a certain computation was performed correctly. Zero-Knowledge is an additional property asserting that the prover does not have to reveal any information included in the computation.

Most ZK-Rollups are not really Zero-Knowledge. The mistake comes from the confusion between Validity proofs (assures computational integrity) and Zero-Knowledge proofs (assures no information is revealed).

Starknet uses STARK Validity proofs. It is worth noting that extracting information from the proof is extremely hard – almost impossible in practice.