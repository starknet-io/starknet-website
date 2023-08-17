### TL; DR

* Chúng tôi đang xây dựng StarkNet theo từng bước, bắt đầu bằng việc thiết lập**khả năng sử dụng**, sau đó cải thiện**hiệu suất**và cuối cùng chuyển sang**phân cấp**
* Chúng tôi đã đạt được mục tiêu đầu tiên: khả năng sử dụng. Điều này có nghĩa là chúng tôi đã cung cấp khả năng tính toán chung ở trạng thái giống như Ethereum (nhiều năm trước khi người ta cho rằng điều đó là khả thi)
* Chúng tôi hiện đang chuyển sang giai đoạn 2 của kế hoạch xây dựng gồm 3 phần: hiệu suất, tập trung vào thông lượng, chi phí giao dịch và độ trễ.
* Tiếp theo: Phân quyền

Chỉ một năm sau khi các kế hoạch cho[StarkNet](https://starknet.io/)lần đầu tiên được công bố, nền tảng này có chức năng rất tốt. Cộng đồng nhà phát triển đang phát triển vượt xa mong đợi của chúng tôi và cung cấp một loạt các dự án L2 Native mới.

Ưu tiên của chúng tôi trong năm qua là kích hoạt chính xác điều này, bằng cách tạo ra một StarkNet đang hoạt động với nhiều tính năng mở rộng nhanh chóng, cho phép các nhà phát triển tham gia trực tiếp.

Họ đã làm điều này với số lượng lớn. Một phong vũ biểu tốt là số lượt tải xuống cho[thư viện JavaScript cho StarkNet](https://www.starknetjs.com/): đã ở mức 5k kể từ khi có sẵn 4 tháng trước.

Tuy nhiên, mặc dù StarkNet cung cấp phép thuật nén mà chúng tôi đã hứa, nhưng hiện tại, nó còn lâu mới có thể làm được như vậy đối với đủ dApp với đủ thông lượng và điều này có thể gây ra sự thất vọng cho các nhà phát triển trong thời gian ngắn.

Công nghệ cốt lõi đã được thử nghiệm trong trận chiến của chúng tôi, chứng minh nhiều giao dịch bằng STARK và nén các bằng chứng, cần được thực hiện trước bằng cách gộp hoặc sắp xếp thứ tự các giao dịch. Đó là một quá trình mà nhóm StarkWare đã hoàn thiện một lần cho công cụ mở rộng quy mô[StarkEx](https://starkware.co/starkex/)và chúng tôi hiện đang làm việc để thực hiện lại điều đó cho nhu cầu của StarkNet.

Giờ đây, nhiều mục tiêu về khả năng sử dụng của chúng tôi đã đạt được, chúng tôi đang chuyển trọng tâm sang ưu tiên hàng đầu cho mục tiêu này. Tất cả đều là một phần trong lộ trình 3 giai đoạn của chúng tôi:**khả năng sử dụng**, tiếp theo là**hiệu suất của mạng**và sau đó là**phân cấp**. Sau một năm, chúng tôi muốn cung cấp cho bạn thông tin chi tiết — bản phác thảo về những phần đã sẵn sàng và những phần vẫn đang trong quá trình hoàn thiện.

### Câu chuyện cho đến nay

StarkNet Alpha đã được phát hành ra mạng thử nghiệm công khai vào tháng 6 và lên Mainnet vào tháng 11. Vào thời điểm triển khai Mainnet, StarkNet đã cung cấp khả năng tính toán chung ở trạng thái giống như Ethereum, điều mà nhiều người cho rằng phải mất nhiều năm nữa.

Trong suốt quá trình phát triển, chúng tôi đã chọn cách tiếp cận tập trung đầu tiên vào các chức năng quan trọng nhất và phát hành chúng ngay khi chúng khả dụng, về cơ bản là chia sẻ quá trình phát triển với cộng đồng. StarkNet còn lâu mới hoàn thiện về tính năng nhưng ngay cả bây giờ, các nhà phát triển đã có thể xây dựng các ứng dụng phức tạp và có ý nghĩa. Ngày nay, chúng tôi có hàng trăm nhà phát triển[đang xây dựng trên StarkNet,](https://starkware.notion.site/Projects-Building-on-StarkNet-a33dee55778a4515a9be9bdae02ee682)chục ứng dụng dApp và hơn chục nhóm bên ngoài đang phát triển công cụ và cơ sở hạ tầng cho hệ sinh thái StarkNet.

Một chuỗi nâng cấp đã cung cấp nhiều tính năng quan trọng, bao gồm nhắn tin L1<>L2, dữ liệu trên chuỗi và hỗ trợ khả năng kết hợp, hỗ trợ sự kiện, cơ chế phí cơ bản, khả năng nâng cấp hợp đồng, trừu tượng hóa tài khoản, khung thử nghiệm, công cụ dành cho nhà phát triển, xác nhận nhanh, số khối , chặn dấu thời gian, hỗ trợ hợp đồng tài khoản.

Cộng đồng nhà phát triển vừa quan tâm sâu sắc đến StarkNet vừa thực sự định hình sự phát triển của nó. Hiện tại, các tính năng đã được giới thiệu dựa trên phản hồi của nhà phát triển. Việc áp dụng có thể vượt xa mức tăng thông lượng, đó là lý do tại sao việc tăng này là ưu tiên lớn của chúng tôi hiện nay.

### Bước tiếp theo

Bây giờ chúng ta đã đạt đến khả năng sử dụng, đã đến lúc cải thiện hiệu suất của hệ thống. Hệ thống, ở trạng thái hiện tại, có khả năng hỗ trợ thông lượng giao dịch hạn chế. Cách để giải quyết vấn đề này là cải thiện hiệu suất của Nút Sequencer, tương đương với công cụ khai thác của StarkNet. Đó là “máy” sắp xếp các giao dịch sau khi chúng được gửi. Khi điều này được tối ưu hóa, thông lượng sẽ tăng vọt.

Để đạt được mục tiêu này, chúng tôi đang đồng thời phân tích xem các nút thắt cổ chai nằm ở đâu và giải quyết từng vấn đề một. Hiện tại, tất cả các tắc nghẽn đều liên quan đến quy trình giải trình tự, diễn ra trước khi chúng tôi gọi trình chứng minh STARK. Ngăn xếp chứng minh được thử nghiệm trong trận chiến đã sẵn sàng để hỗ trợ thông lượng giống như StarkEx trên StarkNet.

Chúng tôi hy vọng việc tối ưu hóa trình sắp xếp thứ tự sẽ là một quá trình kéo dài vài tháng, với những cải tiến dần dần trong suốt H1/22. Mục tiêu của chúng tôi là đạt được, vào đầu nửa cuối năm 2022, TPS cao hơn ít nhất một bậc so với Ethereum, với chi phí thấp hơn ít nhất hai bậc so với Ethereum. Và đó mới chỉ là khởi đầu.

Có lý do chính đáng để giai đoạn tối ưu hóa này cần thiết và StarkNet không được khởi chạy với trình sắp xếp thứ tự được tối ưu hóa sẵn sàng: StarkNet có thể đạt được khả năng sử dụng nhanh như vậy vì chúng tôi đã có một khởi đầu thuận lợi. Thay vì bắt đầu lại từ đầu và xây dựng một bộ giải trình tự hoàn toàn mới, chúng tôi đã sử dụng bộ xử lý từ StarkEx làm thành phần trung tâm.

Đây là một cách tuyệt vời để xây dựng. Nó không chỉ giao hàng nhanh chóng; nó có nghĩa là chúng tôi chắc chắn rằng chúng tôi đã xây dựng trên nền tảng vững chắc. Về cơ bản, StarkEx đã thử nghiệm chức năng cốt lõi điều khiển StarkNet, vì nó đã thu được hàng trăm tỷ đô la trong giao dịch tích lũy.

[StarkEx](https://starkware.co/starkex/)là công cụ mở rộng quy mô cho một số dApp thành công nhất sử dụng L2: dYdX (hợp đồng vĩnh viễn), DeversiFi (giao dịch và thanh toán giao ngay), cũng như cho Immutable và Sorare (đúc và giao dịch NFT).

Nhưng trình sắp xếp thứ tự được xây dựng cho họ và các ứng dụng khách StarkEx khác chỉ có thể sử dụng StarkNet cho đến nay. Mỗi người trong số họ đang xử lý rộng rãi cùng một loại giao dịch mỗi ngày. StarkNet là tất cả về**tính toán chung**, vì vậy nhu cầu của nó là không giới hạn. Khi trình sắp xếp thứ tự của nó nhận các giao dịch từ mempool, chúng có nhiều hình dạng và kích cỡ khác nhau. Ngoài ra, StarkNet cũng là một mạng mở, điều đó có nghĩa là có thêm chi phí tính toán không gặp phải trong StarkEx.

Thách thức hiện tại, cụ thể là tối ưu hóa trình sắp xếp thứ tự cho những nhu cầu mới này, là một công việc quan trọng, nhưng chúng tôi hiểu rõ về lộ trình cần thiết, trên cơ sở phát triển thành công StarkEx của chúng tôi.

### Tiếp theo: Phân quyền

StarkNet sẽ trở thành một mạng hoàn toàn phi tập trung, hoàn chỉnh với các cơ chế quản trị và bầu chọn lãnh đạo. Đạt được điều này sẽ trở thành trọng tâm chính của chúng tôi sau khi thông lượng tăng vọt và chi phí giảm xuống, đồng thời chúng tôi hy vọng sẽ có phiên bản phi tập trung đầu tiên vào cuối năm 2022. Chúng tôi dự đoán sẽ chia sẻ công khai kế hoạch phi tập trung hóa của mình trong những tháng tới.

Giống như thông lượng hạn chế hiện tại đại diện cho một giai đoạn tạm thời trong quá trình phát triển của StarkNet, mức độ tham gia của StarkWare hiện tại cũng chỉ là tạm thời. Chúng tôi coi mình như một loại giàn giáo, phục vụ một chức năng quan trọng trong giai đoạn xây dựng, nhưng sẽ bị lùi lại khi đến hạn.

Quá trình phát triển nút đầy đủ, bước đầu tiên thú vị hướng tới phân cấp, đã được tiến hành. Các nút đầy đủ sẽ cho phép mọi người nắm giữ và xác minh trạng thái của mạng cục bộ, theo dõi chính xác những gì đang xảy ra. Ba nhóm —*Erigon, Nethermind và Equilibrium*— đang phát triển các nút đầy đủ và có khả năng nhiều nút khác sẽ bắt đầu phát triển trong tương lai.

Trong một quá trình phát triển song song, các công việc chuẩn bị đang được tiến hành để mở phần mềm giải trình tự và chứng minh cho công chúng. Bất kỳ ai cũng có thể tham gia với tư cách là người giải trình tự hoặc người chứng thực trên StarkNet.

Một cấu trúc sẽ được phát triển để khuyến khích mọi người tham gia, bao gồm các phần thưởng kinh tế. Một phần phí của StarkNet sẽ được chuyển đến các trình sắp xếp thứ tự và chứng minh.

Trong trung hạn, chúng tôi hy vọng sẽ cung cấp trình sắp xếp thứ tự của chúng tôi cho các bên thứ ba và về lâu dài, chúng tôi cũng hy vọng sẽ thấy các nhóm khác nhau xây dựng trình sắp xếp thứ tự sẽ sắp xếp trình tự cho StarkNet.

### Luôn Cải tiến; Mãi Lắng Nghe

Khi trọng tâm chuyển sang thử thách tiếp theo, chúng tôi sẽ tiếp tục cải thiện những thành tích trong quá khứ. Và trong việc tiếp tục làm việc trên tất cả các lĩnh vực của[StarkNet](https://starknet.io/), chúng tôi sẽ luôn lắng nghe toàn bộ cộng đồng nhà phát triển. Vì vậy, hãy tham gia vào cuộc thảo luận, thông qua[Discord](https://discord.com/invite/uJ9HZTUk2Y), cộng đồng[StarkNet Shamans](https://www.google.com/search?client=safari&rls=en&q=StarkNet+Shamans&ie=UTF-8&oe=UTF-8),[Twitter](https://twitter.com/Starknet_Intern)hoặc một lộ trình khác và giúp định hình tương lai của quy mô chuỗi khối.