### TL; DR

* *StarkNet Alpha sẽ ra mắt trên Mainnet Ethereum vào tháng 11*
* Đã đến lúc xây dựng trên StarkNet

### Sơ Lược Lịch Sử

Chúng tôi đã công bố tầm nhìn của mình về[StarkNet](https://starkware.co/product/starknet/)vào đầu năm: mang lại khả năng mở rộng lớn cho Ethereum trong khi vẫn duy trì bảo mật L1, tương tác không được phép và phân cấp.\
Chúng tôi đã phát hành**[StarkNet Alpha](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)**trên mạng thử nghiệm công khai vào tháng 6. Phiên bản này hỗ trợ các hợp đồng thông minh tính toán chung hoàn toàn không được phép. Kể từ đó, chúng tôi đã nâng cấp nó hai lần: lần đầu tiên lên**Alpha 1**— cung cấp thông tin[L1<>L2 và dữ liệu trên chuỗi](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), sau đó lên**Alpha 2**— hỗ trợ khả năng kết hợp[](https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc).

StarkNet Alpha 2 hiện hỗ trợ các hợp đồng thông minh có thể kết hợp để tính toán chung ở trạng thái giống như Ethereum, với khả năng các hợp đồng L1 và L2 tương tác với nhau. Đọc thêm[tại đây](https://www.cairo-lang.org/docs/hello_starknet/index.html).

### StarkNet Alpha trên Mainnet là gì?

StarkNet Alpha trên Mainnet sẽ hỗ trợ các tính năng tương tự như các tính năng hiện có trên mạng thử nghiệm công khai Goerli.

#### **những gì mong đợi**

Vì StarkNet vẫn đang được phát triển nên chúng tôi muốn giới thiệu các khả năng theo kiểu từng bước và đảm bảo đáp ứng kỳ vọng của nhà phát triển ở từng bước. Hai khía cạnh đặc biệt quan trọng mà chúng tôi muốn nhấn mạnh là:

* **Triển khai hợp đồng thông minh được phép**: Chúng tôi sẽ làm theo hướng dẫn hợp lý được giới thiệu bởi các đồng nghiệp của chúng tôi trong Bản tổng hợp lạc quan: bắt đầu với triển khai hợp đồng*được phép*. Giao thức chỉ định cách yêu cầu đưa hợp đồng thông minh của bạn vào danh sách trắng ban đầu này sẽ được xuất bản trong vài tuần tới.
* **Không đảm bảo khả năng tương thích ngược**: chúng tôi hy vọng quá trình chuyển đổi trong tương lai từ StarkNet Alpha sang StarkNet Beta sẽ bao gồm cả việc tạo lại trạng thái. Mạng sẽ bắt đầu từ khối 0 và các ứng dụng sẽ phải triển khai lại hợp đồng của chúng. Hơn nữa, các nhà phát triển và người dùng nên lưu ý rằng StarkNet Beta dự kiến có thể không tương thích ngược với StarkNet Alpha, ví dụ như các nhà phát triển có thể cần sửa đổi hợp đồng của họ. Rõ ràng, chúng tôi sẽ cố gắng cho phép chuyển đổi dễ dàng cho các ứng dụng, với những thay đổi bắt buộc tối thiểu.

#### Các tính năng ngắn hạn bổ sung

Là một phần của quá trình chuyển đổi StarkNet Alpha từ testnet sang Mainnet, chúng tôi sẽ:

1. Thêm các nhà xây dựng vào hợp đồng.
2. Cải thiện khung thử nghiệm.
3. Đối với các khối và giao dịch, hãy chuyển từ sử dụng ID sang sử dụng hàm băm.

Chúng tôi dự định tiếp tục triển khai các tính năng mới theo nhịp đều đặn, giống như chúng tôi đã thực hiện trên mạng thử nghiệm công khai. Trong thời gian tới, chúng tôi có kế hoạch nâng cấp như sau:

1. Hợp đồng tài khoản và Hợp đồng mã thông báo — mở đường cho các ứng dụng DeFi tương tác với StarkNet theo cách quen thuộc.
2. Cải thiện chức năng hợp đồng — hỗ trợ khả năng nâng cấp hợp đồng và các sự kiện.
3. Warp: trình biên dịch Solidity-to-Cairo do Nethermind phát triển sẽ cho phép chuyển đổi suôn sẻ từ hợp đồng thông minh Solidity sang hợp đồng thông minh StarkNet.
4. Chữ ký Ethereum: hỗ trợ riêng cho ECDSA trên secp256k1 sẽ cho phép tích hợp dễ dàng hơn với các ví hiện có.
5. StarkNet Full Node: Full Node sẽ cho phép người dùng tham gia vào mạng với các yêu cầu phần cứng ngang bằng với yêu cầu của Ethereum Full Node.

#### Cơ chế phí

Cơ chế phí sẽ được bật ngay khi hợp đồng tài khoản và hợp đồng mã thông báo được thêm vào StarkNet Alpha.

Tất cả các giao dịch được gửi tới StarkNet sẽ phải chịu một khoản phí được thiết kế để trang trải chi phí L1 và ngoài chuỗi. Phí ban đầu sẽ được tính bằng ETH. Chi phí của một giao dịch đơn lẻ sẽ giảm khi StarkNet tăng quy mô của nó (như trường hợp của tất cả các hệ thống dựa trên STARK hiện có). Khi xây dựng các cơ chế tính phí ban đầu, chúng tôi ưu tiên sự đơn giản hơn là định giá chính xác các giao dịch theo tài nguyên mà chúng tiêu thụ. Hy vọng cơ chế này sẽ được tinh chỉnh và cải thiện theo thời gian.

Nhằm mục đích biến StarkNet thành một mạng bền vững và khuyến khích các nhà khai thác và nhà phát triển của nó, một phần doanh thu thu được từ phí sẽ được phân phối cho các nhà phát triển ứng dụng và nhà phát triển cốt lõi của StarkNet.

#### Bảo vệ

Mô hình bảo mật của StarkNet Alpha trên Mainnet sẽ tuân theo mô hình hiện tại trên testnet:

* Mọi chuyển đổi trạng thái đều được hỗ trợ bởi bằng chứng STARK, do đó được đảm bảo là hợp lệ.
* Tất cả dữ liệu trạng thái sẽ được xuất bản trên chuỗi, vì vậy trạng thái sẽ được xây dựng hoàn toàn từ L1.
* Sẽ có một trình sắp xếp duy nhất.
* Mạng sẽ có thể nâng cấp mà không bị trễ thời gian.

### Hệ sinh thái StarkNet đang phát triển

Việc đưa StarkNet ra thế giới đã thu hút một làn sóng lớn các nhà phát triển quan tâm đến việc tìm hiểu Cairo và phát triển qua StarkNet. Họ đã cung cấp phản hồi vô giá và thật vui khi thấy các cuộc thảo luận sôi nổi trên StarkNet[Discord](https://discord.gg/uJ9HZTUk2Y).

Hơn nữa, StarkNet đang được phát triển không chỉ bởi nhóm StarkWare mà còn bởi một số nhóm mạnh nhất trong hệ sinh thái chuỗi khối:

* Nethermind đang làm việc trên hai dự án:

1. **[Warp](https://github.com/NethermindEth/warp)**: trình biên dịch Solidity to Cairo

2. **[Du hành](https://voyager.online/)**: trình thám hiểm khối StarkNet

* Open Zeppelin đang triển khai[Hợp đồng tiêu chuẩn](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)cho StarkNet và cũng bắt đầu làm việc trên môi trường của nhà phát triển:[Nile](https://github.com/martriay/nile).
* ShardLabs đang làm việc trên[plugin StarkNet HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)và trên một khung thử nghiệm tốt hơn.
* Nhóm Erigon đang làm việc để mở rộng Ethereum Full Node của họ để hỗ trợ StarkNet (tên mã: Fermion). Họ đang làm việc với chúng tôi để thiết kế các cơ chế cốt lõi của StarkNet.
* Equilibrium đang hoạt động trên triển khai StarkNet Full Node trong Rust,
* Dịch vụ kiểm tra Cairo: Trong những tháng tới, ABDK, ConsenSys Diligence, Peckshield và Trail of Bits sẽ tiến hành kiểm tra Cairo.
* Kiểm tra StarkNet: chúng tôi bắt đầu kiểm tra nền tảng của mạng:

1. **CryptoExperts**sẽ tiến hành kiểm tra Trình xác minh Solidity của Cairo.
2. Bằng chứng**LEAN chính thức**của thông số kỹ thuật Cairo gần đây đã được hoàn thành và xuất bản dưới dạng[bài báo](https://arxiv.org/abs/2109.14534)và repo GitHub[](https://github.com/starkware-libs/formal-proofs).

Mong đợi nhiều sự hợp tác thú vị hơn sẽ được xuất bản trong những tháng tới!

### STARK đang mở rộng quy mô ngày nay

Chúng tôi tiếp cận sự ra mắt của StarkNet Alpha với sự tự tin, vì StarkEx, SaaS mở rộng quy mô độc lập của chúng tôi, đã chứng minh cách STARK có thể mở rộng quy mô các ứng dụng Ethereum. Chúng tôi đã ra mắt StarkEx cho[dYdX](https://dydx.exchange/)(hợp đồng vĩnh viễn),[DeversiFi](https://www.deversifi.com/)(giao dịch và thanh toán giao ngay), cũng như cho[Immutable](https://www.immutable.com/)và[Sorare](https://sorare.com/)(đúc và giao dịch NFT). Chúng tôi thấy chi phí gas/tx của họ giảm 100X–200X, xuống còn khoảng 650 gas/tx trong Validium (dữ liệu ngoài chuỗi) và 1100 gas/tx cho ZK-Rollup.

Đến nay, StarkEx đã giải quyết 80 tỷ đô la trong các giao dịch và hơn 27 triệu giao dịch, vượt xa bất kỳ giải pháp L2 nào khác — và tất cả chúng cộng lại.

### Diễn

Chưa bao giờ có thời điểm tốt hơn để tham gia hệ sinh thái StarkNet đang phát triển bằng cách xây dựng dApp tiếp theo của bạn hoặc các công cụ hữu ích dành cho nhà phát triển.

Chúng tôi mời bạn:

1. Tham gia[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y), nơi bạn có thể gặp gỡ và tham gia vào cộng đồng StarkNet.
2. [Bắt đầu học](https://www.cairo-lang.org/docs/hello_starknet/index.html)cách viết hợp đồng thông minh StarkNet.
3. [Gửi tin nhắn trực tiếp cho chúng tôi](https://twitter.com/StarkWareLtd)— nhóm của chúng tôi rất mong muốn giúp các ý tưởng và sáng kiến của bạn trở thành hiện thực.

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet