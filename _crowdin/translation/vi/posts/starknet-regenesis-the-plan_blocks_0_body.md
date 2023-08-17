### TL; DR

* Chúng tôi đang chia sẻ một kế hoạch chi tiết cho Regenesis, kế hoạch này đã được định hình bởi các cuộc thảo luận rộng rãi với cộng đồng StarkNet. Đặc biệt cảm ơn Kuba@SWM.
* Regenesis sẽ theo sau việc phát hành Cairo 1.0, giúp hệ thống trở nên an toàn hơn bằng cách cho phép các hợp đồng StarkNet đơn giản và an toàn hơn
* Người dùng nên chuẩn bị cập nhật ví của họ trong giai đoạn chuyển đổi
* Các nhà phát triển sẽ được yêu cầu chuyển hợp đồng của họ sang Cairo 1.0

### Giới thiệu

StarkNet Alpha đang tiến tới Regenesis, một bước quan trọng đối với sản xuất. Trong bản cập nhật này, chúng tôi muốn chia sẻ thêm chi tiết về động lực chính cho Regenesis —[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)— và để bắt đầu giải thích những gì nó sẽ yêu cầu từ người dùng và nhà phát triển. Sau Regenesis, StarkNet sẽ chỉ hoạt động với các hợp đồng dựa trên Cairo 1.0 và sẽ bắt đầu từ một khối genesis mới với trạng thái hiện có.

Regenesis sẽ yêu cầu gì từ người dùng? Một bản cập nhật đơn giản của ví của họ. Nó sẽ yêu cầu gì từ những người xây dựng dapp của StarkNet? Chuyển hợp đồng của họ sang Cairo 1.0 và tuân theo hướng dẫn nâng cấp đơn giản. Cụ thể, sẽ không có khởi động lại từ trạng thái sạch và chúng tôi sẽ giữ nguyên phiên bản StarkNet, nghĩa là sẽ không cần di chuyển**.**

Kế hoạch Regenesis là bảo toàn hoàn toàn trạng thái của các ứng dụng và không gây ra bất kỳ thời gian ngừng hoạt động nào cho các ứng dụng. Do đó, các ứng dụng tuân theo các nguyên tắc mà chúng tôi cung cấp sẽ có thể khởi chạy trên StarkNet Alpha Mainnet ngay lập tức mà không có bất kỳ sự xáo trộn nào đối với hoạt động của chúng và người dùng của chúng trong quá trình Tái tạo. Chúng tôi cam kết hợp tác với cộng đồng và cung cấp mọi hỗ trợ cần thiết để quá trình này diễn ra suôn sẻ nhất có thể.

Chúng tôi đang thực hiện hướng đi này là kết quả của các cuộc thảo luận rộng rãi với cộng đồng, bao gồm một đề xuất quan trọng của nhóm Software Mansion.

### Tại sao tái sinh?

#### Cairo 1.0 và Sierra

Động lực chính cho Regenesis là tận dụng các khả năng mới do Cairo 1.0 mang lại — cụ thể là khả năng bảo vệ hệ điều hành DOS, khả năng chống kiểm duyệt và đo khí, những thứ cần thiết cho StarkNet với tư cách là một mạng phi tập trung.

Cairo 1.0 sẽ đảm bảo rằng mọi giao dịch đều có thể được chứng minh. Điều này sẽ cho phép StarkNet bao gồm các giao dịch được hoàn nguyên trong các khối và tạo bằng chứng về việc thực hiện chúng. Cơ chế này sẽ cho phép các trình sắp xếp thứ tự được thanh toán khi thực hiện các giao dịch được hoàn nguyên, tăng khả năng bảo vệ DOS chống lại các tác nhân độc hại. Ngoài ra, Cairo 1.0 sẽ hỗ trợ đo lường khí đốt, điều này sẽ cho phép StarkNet chuyển sang thị trường phí trực quan hơn. Cuối cùng, điều này sẽ cho phép StarkNet giới thiệu các giao dịch bắt buộc từ L1 và sẽ nâng cao khả năng chống kiểm duyệt của mạng.

Để đạt được những lợi ích này, hợp đồng Cairo v0 và Cairo 1.0 không thể kết hợp với nhau. Các tuyên bố sai không thể được chứng minh là không chính xác, cũng như việc theo dõi khí đốt không thể xảy ra, nếu chúng tôi có một số hợp đồng Cairo v0. Để đạt được điều đó, chúng tôi sẽ cần loại bỏ hoàn toàn mã Cairo v0 khỏi trạng thái StarkNet, do đó, Regenesis.

**Sau Regenesis, chúng ta sẽ có một hệ thống Starknet hoàn toàn dựa trên Cairo 1.0.**

#### Đơn giản hóa mã và giao thức

StarkNet, khi vẫn còn ở giai đoạn Alpha, đã trải qua nhiều thay đổi. Mọi phiên bản cho đến nay đều thay đổi cấu trúc giao dịch, khối và hệ điều hành StarkNet. Điều này khiến một số mã bị lỗi thời. Tuy nhiên, các nút đầy đủ và nhà cung cấp cơ sở hạ tầng (chẳng hạn như bộ lập chỉ mục và trình khám phá trạng thái) cần phải biết và triển khai tất cả các hành vi trong quá khứ của các phiên bản StarkNet Alpha để đồng bộ hóa với trạng thái một cách đáng tin cậy. Nếu không có Regenesis, gánh nặng này có thể là trở ngại lớn đối với các nhà phát triển, những người sẽ xem xét việc xây dựng các dịch vụ như vậy cho StarkNet.

Do đó, trước khi đi vào sản xuất và để chuẩn bị cho một thế giới phi tập trung với nhiều triển khai công cụ cơ sở hạ tầng, chúng tôi dự định giảm độ phức tạp của giao thức. Chúng tôi sẽ đạt được điều này bằng cách không yêu cầu cơ sở hạ tầng trong tương lai thực thi bất kỳ mã StarkNet 0.x nào và đánh dấu khối đầu tiên sau giai đoạn chuyển tiếp làm điểm khởi đầu.

### Ôn tái sinh? Dòng thời gian tổng thể

Regenesis sẽ theo sau việc phát hành Cairo 1.0, dự kiến sẽ diễn ra vào cuối năm 2022. Trong quý 1 năm 2023, StarkNet sẽ được cập nhật để hỗ trợ Cairo 1.0 và chúng tôi đặt mục tiêu chuyển sang mạng hoàn toàn dựa trên Cairo 1.0 vào cuối quý 1.

**Người dùng và ứng dụng sẽ phải thực hiện chuyển đổi trong giai đoạn này.**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### Vậy tôi cần biết những gì?

Các nhà phát triển ứng dụng cần lưu ý các khía cạnh sau xung quanh Regenesis:

1. Đảm bảo hợp đồng của bạn đã sẵn sàng để nâng cấp. Toàn bộ kỹ thuật của kế hoạch được chia sẻ trong[Diễn đàn cộng đồng StarkNet](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080). Khi các chi tiết sẽ được hoàn thiện, chúng tôi sẽ chia sẻ một hướng dẫn ngắn gọn.
2. Đảm bảo bạn đã sẵn sàng chuyển mã của mình sang Cairo 1.0. Xem phần tiếp theo để biết tất cả các chi tiết mới nhất.

#### Chuyển hợp đồng của bạn sang Cairo 1.0

Cairo 1.0 hứa hẹn rất nhiều cho các nhà phát triển StarkNet. Một cải tiến trên Cairo hiện tại sẽ an toàn hơn, tốt hơn và dễ dàng hơn để viết hợp đồng, với cú pháp được cải thiện, hệ thống loại chính thức (có ai là uint256 bản địa không?) và hơn thế nữa. Các nhà phát triển sẽ được yêu cầu chuyển các hợp đồng StarkNet hiện tại của họ sang cú pháp Cairo 1.0. Tuy nhiên, vì cấu trúc mã và logic sẽ giữ nguyên nên nỗ lực này dự kiến sẽ không đáng kể so với nỗ lực phát triển ứng dụng ngay từ đầu.

Trong bối cảnh này, cần lưu ý rằng bạn có thể chọn kiểm tra lại phiên bản Cairo 1.0 của ứng dụng của mình. Nếu trước đây ứng dụng của bạn đã được kiểm tra, quy trình kiểm tra lại sẽ rẻ hơn và đơn giản hơn đáng kể vì kiểm toán viên đã quen thuộc với logic của bạn.

Chúng tôi sẽ phát hành tất cả tài liệu về Cairo 1.0, cùng với các hướng dẫn và hội thảo trong quý 4 năm 2022.

### Tôi là Người dùng StarkNet. Tôi nên làm gì?

Là người dùng, bạn có thể sẽ phải thực hiện một số hành động trong quá trình Tái tạo. Ít nhất, bạn sẽ phải nâng cấp hợp đồng tài khoản của mình. Không làm điều đó trong khoảng thời gian chuyển tiếp (dài vài tháng) sẽ dẫn đến việc mất tài khoản của bạn. Tùy thuộc vào lộ trình nâng cấp do các nhà phát triển ứng dụng StarkNet mà bạn đang sử dụng lựa chọn, bạn có thể phải thực hiện thêm các bước.

Chúng tôi xin nhắc mọi người rằng StarkNet vẫn đang trong giai đoạn Alpha và người dùng được yêu cầu chú ý đến thông tin liên lạc của StarkNet và các ứng dụng họ đang sử dụng. Bạn có trách nhiệm đảm bảo nâng cấp sớm lên hệ thống mới. *Trở thành người sử dụng sớm không phải lúc nào cũng dễ dàng và chúng tôi tin tưởng bạn sẽ thực hiện phần việc của mình!*

### để kết luận

Cairo 1.0 sắp ra mắt, cung cấp nhiều lợi ích và cải tiến thú vị cho StarkNet và các nhà phát triển của nó. Để đạt được những điều này, cần có một sự kiện Regenesis của mạng. May mắn thay, chúng tôi có ý tưởng thiết kế giúp quá trình này giảm thiểu sự gián đoạn — hoàn toàn liền mạch cho người dùng và khá đơn giản cho các ứng dụng.

Chúng tôi khuyên bạn nên tham gia thảo luận cộng đồng[](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)và chia sẻ nhận xét cũng như mối quan tâm của mình, cũng như cập nhật các bước bạn cần thực hiện với tư cách là nhà phát triển ứng dụng trên StarkNet.