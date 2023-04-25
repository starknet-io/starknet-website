### TL; DR

* Các bản tổng hợp hiệu lực không bị giới hạn về thông lượng giống như L1. Điều này dẫn đến TPS có khả năng cao hơn nhiều đối với các bản tổng hợp hợp lệ L2.
* Lộ trình hiệu suất của StarkNet đề cập đến một yếu tố chính trong hệ thống: trình sắp xếp thứ tự.
* Chúng tôi trình bày ở đây lộ trình cải tiến hiệu suất:\
  — Song song hóa trình sắp xếp thứ tự\
  — Triển khai gỉ mới cho VM Cairo\
  — Triển khai lại trình sắp xếp trong gỉ\
* Các nhà cung cấp dịch vụ, đã được thử nghiệm trong trận chiến như hiện tại, không phải là nút cổ chai và có thể xử lý nhiều hơn những gì họ làm bây giờ!

### giới thiệu

StarkNet đã ra mắt trên Mainnet gần một năm trước. Chúng tôi bắt đầu xây dựng StarkNet bằng cách tập trung vào chức năng. Bây giờ, chúng tôi chuyển trọng tâm sang cải thiện hiệu suất bằng một loạt các bước sẽ giúp nâng cao trải nghiệm StarkNet.

Trong bài đăng này, chúng tôi giải thích lý do tại sao có nhiều loại tối ưu hóa chỉ áp dụng được trong các bản tổng hợp hợp lệ và chúng tôi sẽ chia sẻ kế hoạch của mình để triển khai các bước này trên StarkNet. Một số bước này đã được triển khai trong StarkNet Alpha 0.10.2, được phát hành trên Testnet vào ngày 16 tháng 11 và hôm qua trên Mainnet. Nhưng trước khi thảo luận về các giải pháp, chúng ta hãy xem lại những hạn chế và nguyên nhân của chúng.

### Giới hạn khối: rollup hợp lệ so với L1

Một cách tiếp cận tiềm năng để tăng khả năng mở rộng chuỗi khối và tăng TPS sẽ là dỡ bỏ các giới hạn khối (về gas/kích thước) trong khi vẫn giữ thời gian khối không đổi. Điều này sẽ đòi hỏi nhiều nỗ lực hơn từ các nhà sản xuất khối (trình xác thực trên L1, trình sắp xếp theo trình tự trên L2) và do đó yêu cầu triển khai các thành phần đó hiệu quả hơn. Để đạt được mục tiêu này, bây giờ chúng tôi chuyển trọng tâm sang tối ưu hóa trình sắp xếp chuỗi StarkNet, chúng tôi sẽ mô tả chi tiết hơn trong các phần sau.

Một câu hỏi tự nhiên phát sinh ở đây. Tại sao việc tối ưu hóa trình tự trình tự bị giới hạn đối với các bản tổng hợp hợp lệ, nghĩa là tại sao chúng ta không thể triển khai các cải tiến tương tự trên L1 và tránh hoàn toàn sự phức tạp của các bản tổng hợp hợp lệ? Trong phần tiếp theo, chúng tôi khẳng định rằng có sự khác biệt cơ bản giữa hai loại này, cho phép một loạt các tối ưu hóa trên L2 không áp dụng được cho L1.

### Tại sao thông lượng L1 bị hạn chế?

Thật không may, việc dỡ bỏ các giới hạn khối trên L1 gặp phải một cạm bẫy lớn. Bằng cách tăng tốc độ tăng trưởng của chuỗi, chúng tôi cũng tăng nhu cầu từ các nút đầy đủ, những người đang cố gắng theo kịp trạng thái gần đây nhất. Vì các nút đầy đủ L1 phải thực hiện lại tất cả lịch sử, nên kích thước khối tăng cao (về gas) gây áp lực đáng kể lên chúng, một lần nữa dẫn đến các máy yếu hơn rời khỏi hệ thống và không có khả năng chạy các nút đầy đủ chỉ cho các thực thể đủ lớn. Do đó, người dùng sẽ không thể tự xác minh trạng thái và tham gia vào mạng một cách đáng tin cậy.

Điều này khiến chúng tôi hiểu rằng thông lượng L1 nên bị hạn chế, để duy trì một hệ thống an toàn và phi tập trung thực sự.

### Tại sao các rào cản tương tự không ảnh hưởng đến các bản tổng hợp hợp lệ?

**Chỉ khi xem xét phối cảnh nút đầy đủ, chúng ta mới thấy sức mạnh thực sự do các bản tổng hợp hợp lệ mang lại.**Nút đầy đủ L1 cần thực hiện lại toàn bộ lịch sử để đảm bảo tính chính xác của trạng thái hiện tại. Các nút StarkNet chỉ cần xác minh bằng chứng STARK và việc xác minh này cần lượng tài nguyên tính toán thấp hơn theo cấp số nhân. Cụ thể, việc đồng bộ hóa từ đầu không nhất thiết phải thực thi; một nút có thể nhận kết xuất trạng thái hiện tại từ các đồng nghiệp của nó và chỉ xác minh thông qua bằng chứng STARK rằng trạng thái này hợp lệ. Điều này cho phép chúng tôi tăng thông lượng của mạng mà không cần tăng các yêu cầu từ nút đầy đủ.

Do đó, chúng tôi kết luận rằng trình sắp xếp thứ tự L2 tuân theo toàn bộ phạm vi tối ưu hóa không thể thực hiện được trên L1.

### Lộ trình hiệu suất phía trước

Trong các phần tiếp theo, chúng ta sẽ thảo luận về những phần nào hiện đang được lên kế hoạch cho trình sắp xếp chuỗi StarkNet.

### song song hóa trình tự

Bước đầu tiên trong lộ trình của chúng tôi là giới thiệu song song hóa việc thực hiện giao dịch. Điều này đã được giới thiệu trong StarkNet alpha 0.10.2, được phát hành hôm qua trên Mainnet. Bây giờ chúng ta đi sâu vào việc song song hóa là gì (đây là phần bán kỹ thuật, để tiếp tục lộ trình, hãy chuyển sang phần tiếp theo).

Vậy “song song hóa giao dịch” nghĩa là gì? Một cách ngây thơ, việc thực hiện song song một khối các giao dịch là không thể vì các giao dịch khác nhau có thể phụ thuộc vào nhau. Điều này được minh họa trong ví dụ sau đây. Hãy xem xét một khối có ba giao dịch từ cùng một người dùng:

* Giao dịch A: đổi USDC lấy ETH
* Giao dịch B: trả ETH cho một NFT
* Giao dịch C: đổi USDT lấy BTC

Rõ ràng, Tx A phải xảy ra trước Tx B, nhưng Tx C hoàn toàn độc lập với cả hai và có thể được thực hiện song song. Nếu mỗi giao dịch cần 1 giây để thực hiện, thì thời gian sản xuất khối có thể giảm từ 3 giây xuống 2 giây bằng cách giới thiệu song song hóa.

Mấu chốt của vấn đề là chúng ta không biết trước các phụ thuộc của giao dịch. Trong thực tế, chỉ khi chúng tôi thực hiện giao dịch B từ ví dụ của chúng tôi, chúng tôi mới thấy rằng nó phụ thuộc vào những thay đổi được thực hiện bởi giao dịch A. Chính thức hơn, sự phụ thuộc xuất phát từ thực tế là giao dịch B đọc từ các ô lưu trữ mà giao dịch A đã ghi vào. Chúng ta có thể coi các giao dịch giống như một biểu đồ phụ thuộc, trong đó có một cạnh từ giao dịch A đến giao dịch B nếu A ghi vào một ô lưu trữ được B đọc và do đó phải được thực thi trước B. Hình dưới đây cho thấy một ví dụ về biểu đồ phụ thuộc như vậy:

![](https://miro.medium.com/max/641/0*I-qGgxdJJmqmgZWM)

Trong ví dụ trên, mỗi cột có thể được thực hiện song song và đây là cách sắp xếp tối ưu (trong khi ngây thơ, chúng ta sẽ thực hiện các giao dịch 1–9 theo tuần tự).

Để khắc phục thực tế là biểu đồ phụ thuộc không được biết trước, chúng tôi giới thiệu***song song hóa lạc quan***, theo tinh thần của[BLOCK-STM](https://malkhi.com/posts/2022/04/block-stm/)do Aptos Labs phát triển, cho trình giải trình tự StarkNet. Theo mô hình này, chúng tôi cố gắng chạy các giao dịch song song một cách lạc quan và thực hiện lại khi tìm thấy xung đột. Ví dụ: chúng tôi có thể thực hiện song song các giao dịch 1–4 từ hình 1, chỉ để sau đó phát hiện ra rằng Tx4 phụ thuộc vào Tx1. Do đó, việc thực thi của nó là vô ích (chúng tôi đã chạy nó tương ứng với cùng trạng thái mà chúng tôi đã chạy Tx1, trong khi lẽ ra chúng tôi nên chạy nó với trạng thái do áp dụng Tx1). Trong trường hợp đó, chúng tôi sẽ thực hiện lại Tx4.

Lưu ý rằng chúng ta có thể thêm nhiều tối ưu hóa trên song song hóa lạc quan. Ví dụ, thay vì ngây thơ chờ đợi mỗi lần thực thi kết thúc, chúng ta có thể hủy bỏ một lần thực thi ngay khi chúng ta tìm thấy một phụ thuộc làm mất hiệu lực của nó.

Một ví dụ khác là tối ưu hóa lựa chọn thực hiện lại giao dịch nào. Giả sử rằng một khối bao gồm tất cả các giao dịch từ hình 1 được đưa vào một trình sắp xếp thứ tự có năm lõi CPU. Đầu tiên, chúng tôi cố gắng thực hiện song song các giao dịch 1–5. Nếu thứ tự hoàn thành là Tx2, Tx3, Tx4, Tx1 và cuối cùng là Tx5, thì chúng ta sẽ tìm thấy phụ thuộc Tx1→Tx4 chỉ sau khi Tx4 đã được thực thi — cho biết rằng nó sẽ được thực hiện lại. Một cách ngây thơ, chúng tôi cũng có thể muốn thực thi lại Tx5 vì nó có thể hoạt động khác đi khi thực thi Tx4 mới. Tuy nhiên, thay vì chỉ thực hiện lại tất cả các giao dịch sau Tx4 hiện đã bị vô hiệu hóa, chúng ta có thể duyệt qua biểu đồ phụ thuộc được tạo từ các giao dịch mà việc thực thi của chúng đã kết thúc và chỉ thực hiện lại các giao dịch phụ thuộc vào Tx4.

### Một triển khai Rust mới cho Cairo-VM

Hợp đồng thông minh trong StarkNet được viết ở Cairo và được thực thi bên trong Cairo-VM, thông số kỹ thuật này xuất hiện trong bài báo[Cairo](https://eprint.iacr.org/2021/1063.pdf). Hiện tại, trình sắp xếp thứ tự đang sử dụng triển khai[python](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/cairo/lang/vm)của Cairo-VM. Để tối ưu hóa hiệu suất triển khai VM, chúng tôi đã đưa ra nỗ lực viết lại VM trong tình trạng rỉ sét. Nhờ vào công việc tuyệt vời của[Lambdaclass](https://lambdaclass.com/), những người hiện là một nhóm vô giá trong hệ sinh thái StarkNet, nỗ lực này sẽ sớm thành hiện thực.

Việc triển khai rỉ sét của VM,[cairo-rs](https://github.com/lambdaclass/cairo-rs), hiện có thể thực thi mã Cairo gốc. Bước tiếp theo là xử lý việc thực thi hợp đồng thông minh và tích hợp với trình sắp xếp chuỗi Pythonic. Sau khi được tích hợp với cairo-rs, hiệu suất của trình sắp xếp thứ tự dự kiến sẽ cải thiện đáng kể.

### Triển khai lại trình tự sắp xếp trong Rust

Sự thay đổi của chúng tôi từ python sang gỉ để cải thiện hiệu suất không chỉ giới hạn ở Cairo VM. Bên cạnh những cải tiến được đề cập ở trên, chúng tôi dự định viết lại trình sắp xếp theo trình tự từ đầu. Ngoài các lợi thế bên trong của Rust, điều này tạo cơ hội cho các tối ưu hóa khác cho trình sắp xếp thứ tự. Liệt kê một vài, chúng ta có thể tận hưởng những lợi ích của cairo-rs mà không cần giao tiếp với python-rust và chúng ta có thể thiết kế lại hoàn toàn cách lưu trữ và truy cập trạng thái (ngày nay dựa trên cấu trúc[Patricia-Trie](https://docs.starknet.io/documentation/develop/State/starknet-state/#state_commitment)).

### Còn những câu tục ngữ thì sao?

Trong suốt bài đăng này, chúng tôi đã không đề cập đến yếu tố có lẽ nổi tiếng nhất về tính hợp lệ - câu tục ngữ. Người ta có thể tưởng tượng rằng là thành phần được cho là phức tạp nhất của kiến trúc, nó phải là nút thắt cổ chai và do đó, là trọng tâm của việc tối ưu hóa. Thật thú vị, chính các thành phần “tiêu chuẩn” hơn hiện là nút thắt cổ chai của StarkNet. Ngày nay, đặc biệt với[bằng chứng đệ quy](https://medium.com/starkware/recursive-starks-78f8dd401025), chúng tôi có thể đưa nhiều giao dịch hơn lưu lượng truy cập hiện tại trên Testnet/Mainnet vào một bằng chứng. Trên thực tế, ngày nay, các khối StarkNet được chứng minh cùng với các giao dịch StarkEx, trong đó các khối sau đôi khi có thể phát sinh vài trăm nghìn NFT.

### Bản tóm tắt

Song song hóa, Rust, v.v. — chuẩn bị tinh thần để có TPS được cải thiện trong các phiên bản StarkNet sắp tới.