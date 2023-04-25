### TL; DR

* Alpha đang hoạt động trên Mainnet
* Nó hỗ trợ tính toán chung và khả năng tổng hợp
* Cộng đồng phát triển nhanh, phát triển công cụ và ứng dụng
* Các tính năng bổ sung sẽ được triển khai liên tục trong những tuần tới
* Tuyên bố miễn trừ trách nhiệm: đây là phiên bản Alpha (đọc bản in đẹp bên dưới)

### Giới thiệu

StarkNet Alpha sẽ ra mắt hôm nay trên Ethereum Mainnet!

StarkNet là một Rollup phi tập trung không được phép hoạt động như một mạng L2 trên Ethereum. StarkNet cho phép bất kỳ dApp nào đạt được quy mô không giới hạn cho tính toán của nó mà không ảnh hưởng đến khả năng kết hợp và bảo mật của Ethereum, nhờ vào sự phụ thuộc vào hệ thống bằng chứng mật mã an toàn nhất và có khả năng mở rộng nhất —[STARK](https://starkware.co/stark/). StarkNet được xây dựng trên ngôn ngữ lập trình[Cairo](https://starkware.co/cairo/), trình xác minh von-Neumann hoàn chỉnh Turing cấp sản xuất đầu tiên trên Ethereum. Cả Cairo và STARK đều do StarkWare phát triển nội bộ và đã hỗ trợ tất cả các ứng dụng cấp sản xuất của chúng tôi, đã giải quyết hơn 50 triệu tx và 250 tỷ đô la kể từ Mùa hè năm 2020.

Trong số các tính năng khác, StarkNet Alpha cho phép các hợp đồng thông minh tính toán chung hỗ trợ khả năng kết hợp, cả với các hợp đồng StarkNet khác và thông qua nhắn tin L1<>L2 với các hợp đồng L1. StarkNet Alpha hoạt động ở chế độ Tổng hợp, nghĩa là tất cả dữ liệu khác biệt về trạng thái được gửi trên chuỗi.

Trở lại vào tháng 1, chúng tôi đã chia sẻ lộ trình StarkNet[](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). Vào tháng 6, StarkNet Alpha đã hoạt động trên một mạng thử nghiệm công khai và đã được cập nhật các tính năng mới liên tục. Chúng tôi rất vui mừng vì đã hoàn thành trước thời hạn, một phần nhờ vào sự tin tưởng của chúng tôi vào ngăn xếp phần mềm STARK/Cairo được tôi luyện ở cấp độ sản xuất của chúng tôi.

### Bạn nên đối xử với StarkNet Alpha như thế nào?

Đầu tiên, hãy hết sức cẩn thận vì nhãn “Alpha” là có lý do. Mong đợi những thay đổi, bản sửa lỗi và cải tiến sắp tới. StarkNet Alpha vẫn chưa được kiểm tra và chúng tôi có thể trì hoãn việc kiểm tra như vậy cho đến khi mạng trưởng thành hơn (đọc tuyên bố từ chối trách nhiệm ở cuối bài đăng này để biết thêm thông tin).

Nói chung, chúng tôi đi theo con đường thận trọng và hợp lý được xác định bởi các đồng nghiệp của chúng tôi trong Bản tổng hợp lạc quan, cụ thể là Arbitrum và Optimism: khởi chạy mạng với một trình sắp xếp thứ tự duy nhất và các ứng dụng trong danh sách cho phép để đảm bảo các nhà phát triển của họ hiểu những rủi ro liên quan. Chúng tôi tiếp tục hoàn toàn cam kết phân quyền hoàn toàn cho StarkNet.

Và bạn nên đối xử với nền kinh tế của StarkNet Alpha như thế nào? Alpha sẽ bắt đầu mà không có phí giao dịch. Lần nâng cấp tiếp theo, chỉ vài tuần nữa, sẽ giới thiệu cơ chế tính phí — chúng tôi sẽ chia sẻ thêm chi tiết trong một bài đăng riêng.

### Bắt đầu xây dựng

Chúng tôi mời bạn bắt đầu viết các ứng dụng của riêng mình trên StarkNet bằng cách kiểm tra tệp (mới!) [trang web](http://starknet.io/)hoặc chuyển trực tiếp đến hướng dẫn[](https://starknet.io/docs/).

Nếu bạn đã sẵn sàng triển khai, vui lòng làm theo quy trình[giới thiệu](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)này; được tạo ra để đảm bảo tất cả các nhà phát triển đều nhận thức rõ về trạng thái sơ bộ của hệ thống.

### hệ sinh thái

Trong vài tháng qua, chúng tôi đã chứng kiến sự tăng trưởng đáng kinh ngạc về quy mô và hoạt động của cộng đồng StarkNet, tập hợp trên[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Hàng chục nhà phát triển — nhóm và cá nhân — trên toàn hệ sinh thái chuỗi khối đang đóng góp cho nỗ lực này. (Xem tuyên bố từ chối trách nhiệm ở cuối bài viết này)

#### Những công cụ phát triển

* OpenZeppelin đang xác định các hợp đồng tiêu chuẩn. [repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)và[thảo luận](https://github.com/OpenZeppelin/cairo-contracts/discussions)của họ đáng để theo dõi
* Bộ chuyển đổi[Warp](https://github.com/NethermindEth/warp)Solidity–>Cairo, được phát triển bởi Nethermind
* Shard Labs'[plugin HardHat](https://github.com/Shard-Labs/starknet-hardhat-plugin)và[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent đang phát triển công cụ, bao gồm nỗ lực chung của nó trên StarkNet.js, cùng với[Sean Han](https://twitter.com/seanjameshan), người tạo ra nó

#### cơ sở hạ tầng

**Trình khám phá khối**:

* [Dự án The Voyager](http://voyager.online/)của Nethermind
* [Eth.tx](https://ethtx.info/)sẽ cung cấp phân tích hỗ trợ và chế độ xem chi tiết về các giao dịch StarkNet

**Các nút đầy đủ**: hai nỗ lực đang được tiến hành: một là dự án Fermion do Erigon đứng đầu, hai là dự án[Pathfinder](https://github.com/eqlabs/pathfinder), do Equilibrium đứng đầu

**Ví**:

* [ArgentX](https://github.com/argentlabs/argent-x)là tiện ích mở rộng trình duyệt do Argent phát triển, đã có sẵn cho nhà phát triển
* Giải pháp quản lý khóa Torus đã sẵn sàng cho StarkNet
* Ledger đang phát triển một ứng dụng StarkNet gốc; sẽ được cung cấp trước khi kết thúc năm

**Kiểm toán Cairo**: ConsenSys Diligence, Trail of Bits, Peckshield và ABDK hoặc đang tiến hành kiểm tra Cairo hoặc sắp bắt đầu

**Dịch vụ API**: sau khi nút đầy đủ của StarkNet được cung cấp, các dịch vụ API sẽ được cung cấp bởi Figment, Chainstack và Infura

**Người lập chỉ mục**: chúng tôi sẽ làm việc để tích hợp TheGraph để hoạt động với StarkNet, cùng với nhóm Figment

### Con đường phía trước

Trong những tuần và tháng tới, chúng tôi sẽ nâng cấp Alpha với các khả năng sau:

* Cơ chế nâng cấp hợp đồng
* Cơ chế phí
* Sự kiện
* Bổ sung các tòa nhà chọc trời bị thiếu (get_block_number, get_block_timestamp, v.v.)
* Phiên bản xương của Volition
* Và hơn thế nữa …

Để liên tục theo dõi nỗ lực này, hãy xem lộ trình dự kiến[của các tính năng](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Nhìn xa hơn, chúng tôi tiếp tục đầu tư mạnh vào nghiên cứu tích cực trên nhiều mặt (hãy tham gia nỗ lực[Shamans](https://community.starknet.io/)):

* phân quyền
* mở rộng quy mô
* Dữ liệu sẵn có
* khuyến khích không được phép

### Kêu gọi hành động

* Bắt đầu viết hợp đồng trên mạng thử nghiệm StarkNet không cần cấp phép trên Goerli
* Tham gia[StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Tham gia các cuộc gọi cộng đồng
* Tham dự[Hội nghị thượng đỉnh hệ sinh thái StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)đầu tiên (27–28 tháng 1 năm 2022, Stanford CA)
* Tham gia[StarkNet Shamans](https://community.starknet.io/)để tìm hiểu sâu hơn về các thách thức nghiên cứu

### từ chối trách nhiệm

***StarkNet Alpha là một hệ thống mới và phức tạp chưa được kiểm toán đầy đủ. Giống như tất cả các hệ thống phần mềm phức tạp, hệ thống StarkNet có thể chứa các lỗi, trong những trường hợp cực đoan, có thể dẫn đến việc bạn mất toàn bộ số tiền. Vì vậy,***bước đi cẩn thận và hãy cẩn thận!******

*Hệ sinh thái StarkNet là một tập hợp lớn và phát triển nhanh chóng gồm các nhóm và cá nhân độc lập, mà StarkWare không giám sát và không chịu trách nhiệm. Bất kỳ dự án nào được phát triển bởi các thành viên hệ sinh thái đều có thể chứa lỗi, trong trường hợp cực đoan, có thể dẫn đến việc bạn mất toàn bộ số tiền. Hơn nữa, khi nhiều hợp đồng thông minh được triển khai, khả năng xảy ra các lỗi có hại ngoài ý muốn và thậm chí là các trò gian lận độc hại và kéo thảm sẽ tăng lên. Vì vậy, hãy coi tất cả các hợp đồng thông minh trên StarkNet giống như bạn coi các hợp đồng thông minh trên Ethereum và chỉ sử dụng những hợp đồng mà bạn có lý do chính đáng để tin tưởng là an toàn.*