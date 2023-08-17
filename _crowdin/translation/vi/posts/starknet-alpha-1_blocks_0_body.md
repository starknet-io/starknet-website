### TL; DR

StarkNet Alpha 1 có hai tính năng mới:

* Tương tác L1<>L2
* Dữ liệu trên chuỗi

### Giới thiệu

Vào đầu năm, chúng tôi đã thông báo rằng StarkWare đang xây dựng[StarkNet](https://starkware.co/product/starknet/), một ZK-Rollup¹ dựa trên STARK phi tập trung không được phép hoạt động như một mạng L2 trên Ethereum. StarkNet cho phép bất kỳ dApp nào đạt được quy mô không giới hạn cho tính toán của nó — mà không ảnh hưởng đến khả năng kết hợp và bảo mật của Ethereum.

Tháng trước,[StarkNet Alpha 0](https://medium.com/starkware/starknet-planets-alpha-on-ropsten-e7494929cb95)đã được phát hành ra thế giới. Lần đầu tiên, các nhà phát triển có thể viết[bất](https://kobi.one/2021/07/14/stardrop.html)hợp đồng thông minh nào và triển khai nó một cách không cần xin phép vào ZK-Rollup. Người dùng có thể gửi các giao dịch đến mạng, theo kiểu Ethereum.

Hôm nay chúng tôi sẽ phát hành một phiên bản mới; Anpha 1. Chúng tôi đang phát hành các tính năng trên cơ sở cuốn chiếu để cho phép các nhà phát triển tương tác với các tính năng mới sớm nhất có thể. Chúng tôi dự đoán rằng điều này sẽ thắt chặt chu kỳ phản hồi và cho phép phản hồi của cộng đồng để nhanh chóng cải thiện StarkNet.

### **Tính năng Alpha 1**

#### Tương tác L1<>L2

Alpha 1 bao gồm một giao thức nhắn tin L1<>L2, cho phép các nhà phát triển triển khai các luồng giao dịch liền mạch giữa L1 và L2. Các nhà phát triển hiện có thể gửi tin nhắn từ hợp đồng trên L1 đến hợp đồng trên L2 và ngược lại.

Một trong những điểm hay của ZK-Rollups là các cập nhật trạng thái là cuối cùng, không có bất kỳ sự chậm trễ nào. Điều này có nghĩa là các tin nhắn được gửi từ L2 đến L1 có thể được chuyển tiếp ngay lập tức đến hợp đồng đích của chúng. Điều này mở ra cách xây dựng các ứng dụng thực sự có thể tương tác giữa các lớp.

Quan tâm đến việc thử nó ra? Cách tốt nhất để bắt đầu là làm theo hướng dẫn[tại đây](https://www.cairo-lang.org/docs/hello_starknet/l1l2.html).

Giao thức L1<>L2 của chúng tôi phụ thuộc rất nhiều vào các L2 khác (cụ thể là Chủ nghĩa lạc quan và Arbitrum) mà công việc trước đây trong lĩnh vực này đã ảnh hưởng đến thiết kế của chúng tôi.

#### Tính khả dụng của dữ liệu trên chuỗi

Bản cập nhật trạng thái của StarkNet hiện cũng được xuất bản dưới dạng dữ liệu trực tuyến trên Ethereum. Điều này cho phép bất kỳ người dùng nào xây dựng đầy đủ trạng thái của StarkNet từ dữ liệu L1. Mỗi cập nhật trạng thái bao gồm khác biệt trạng thái, nghĩa là bộ nhớ nào đã được thay đổi và giá trị mới của nó.

Ở đây cũng vậy, ZK-Rollup cho thấy sức mạnh của nó. Ngược lại với Bản tổng hợp lạc quan, trong đó dữ liệu của giao dịch đầy đủ phải được gửi trên chuỗi, trong ZK-Rollups, chỉ dữ liệu tối thiểu tuyệt đối cần thiết để lấy được độ khác biệt trạng thái mới được gửi trên chuỗi.

Hãy xem xét một ví dụ điển hình, tiên tri về giá. Một giao dịch để cập nhật dự đoán giá thường chứa nhiều giao dịch nhưng chỉ cập nhật một ô lưu trữ; giá của cặp. Dữ liệu trên chuỗi cần thiết cho một bản cập nhật trạng thái có chứa các giao dịch tiên tri về giá trong Bản tổng hợp lạc quan tăng tuyến tính với số lượng bản cập nhật, trong khi ở bản ZK-Rollup, nó sẽ luôn là một bản cập nhật lưu trữ duy nhất.

Ngoài ra, các thuật toán nén có thể được áp dụng cho dữ liệu đã xuất bản và tính hợp lệ của chúng sẽ được chứng thực bằng bằng chứng STARK, giúp giảm thêm dấu chân trên chuỗi. Các phiên bản tương lai của StarkNet sẽ giới thiệu các tối ưu hóa sáng tạo trong lĩnh vực này.

#### Hệ điều hành StarkNet

Chúng tôi cũng đang phát hành mã Hệ điều hành StarkNet. Hệ điều hành StarkNet là chương trình Cairo chạy StarkNet. Hệ điều hành xử lý mọi thứ được thực hiện trên mạng — triển khai hợp đồng, thực hiện giao dịch, thông báo L1<>L2, v.v. Kiến trúc và thiết kế của hệ điều hành StarkNet sẽ được giải thích chi tiết trong một bài đăng riêng.

#### Tính năng bổ sung

Không chỉ phát triển StarkNet Alpha, chúng tôi còn không ngừng cải tiến Cairo. Để biết mô tả đầy đủ về các tính năng mới trong Cairo v0.3.0, hãy xem ghi chú phát hành[tại đây](https://github.com/starkware-libs/cairo-lang/releases/tag/v0.3.0).

### Hệ sinh thái đang phát triển

Ngoài công việc liên tục trên StarkNet Core, công việc của hệ sinh thái trên StarkNet không ngừng mở rộng. Chúng tôi rất vui mừng được cộng tác với một số nhóm tài năng nhất từ hệ sinh thái.

Fermion, nỗ lực Full Node đầu tiên của StarkNet, được phát triển bởi nhóm Erigon (trước đây là TurboGeth). Dựa trên kiến thức khổng lồ của họ thu được khi làm việc trên Ethereum, chúng tôi có thể hợp tác với họ để xây dựng một Full Node mạnh mẽ, kết hợp nhiều bài học kinh nghiệm trong khi xây dựng Ethereum, đồng thời hưởng lợi từ quy mô do STARK cung cấp.

Nethermind đang làm việc trên Warp, một trình biên dịch từ EVM sang Cairo. Bị ràng buộc bởi văn hóa của chúng tôi là chỉ trình bày các công cụ mới khi chúng đã sẵn sàng, tất cả những gì chúng tôi có thể nói là, hãy sớm mong đợi những tin tức thú vị về mặt này! Tuy nhiên, chúng ta có thể nói rằng chúng đang di chuyển với tốc độ chóng mặt.

### Những mục tiêu trong tương lai là gì

Điểm dừng tiếp theo trên con đường đến với StarkNet của chúng tôi sẽ là khả năng kết hợp — cho phép các hợp đồng tương tác với nhau. Giữ nguyên.

[StarkWare](https://starkware.co/)

1 Như chúng tôi đã nói trước đây, ZK-Rollup hiện là một thuật ngữ được sử dụng phổ biến, nhưng rất dễ gây hiểu lầm: các giải pháp này (hiện tại) không cung cấp kiến thức bằng không.

**Update (tháng 11 năm 2021):**StarkNet Alpha hoạt động trên Ethereum Mainnet