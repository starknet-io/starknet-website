[Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209) 是一种图灵完备的语言，旨在简洁地证明 Cairo 程序的正确执行。 Cairo 程序是无状态的，这意味着您无法对存储、其他 Cairo 程序或 L1 状态进行本机访问（尽管您可以访问这些内容，如下所述）。 

另一方面，Starknet 合约存在于 Starknet 虚拟机中，该虚拟机具有智能合约可以访问和修改的持久状态。 这些智能合约可以存储变量、与其他合约通信以及向/从 L1 发送/接收消息（[读取更多](https://www.cairo-lang.org/docs/hello_starknet/index.html)）。