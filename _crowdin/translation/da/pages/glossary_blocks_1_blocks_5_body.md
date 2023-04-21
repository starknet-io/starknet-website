Ordered sets of Starknet transactions that are run using the Starknet OS, resulting in one aggregated state change that is then committed to the Starknet L1 core contract. A block has:

* … a block hash – a unique stable identifier that can be used to query and refer to the block.
* … a block number – an ordinal number representing the location of the block in the sequence of accepted blocks in Starknet. Note, a block’s number may change over time. Also, a given number may refer to different blocks at different points in time, e.g., in the event of L1 chain re-orders.