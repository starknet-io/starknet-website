### TL; DR

* STARK cho phép mở rộng quy mô chuỗi khối bằng cách chứng minh hiệu quả tính toàn vẹn của các tính toán
* StarkEx là một công cụ mở rộng quy mô dành riêng cho ứng dụng
* StarkNet là một mạng lớp 2 hợp đồng thông minh không được phép

### **STARK**

STARK (Lập luận kiến thức minh bạch, có thể mở rộng) là một hệ thống bằng chứng cho phép chứng minh và xác minh các tính toán. Nó cho phép xử lý một phép tính lớn, tạo ra bằng chứng cho tính đúng đắn của phép tính và sau đó xác minh bằng chứng trong rất ít bước.

STARK có thể đóng một vai trò quan trọng trong khả năng mở rộng chuỗi khối bằng cách cho phép thực hiện các tính toán lớn ngoài chuỗi, nơi rẻ hơn, chỉ để lại xác minh, yêu cầu một phần tính toán, được thực hiện trên chuỗi. Nói cách khác, bằng cách thực hiện rất ít bước trên chuỗi, trình xác minh khẳng định tính toàn vẹn của một phép tính lớn hơn nhiều đã được thực hiện ngoài chuỗi.

Sử dụng STARK, các giải pháp lớp 2 gộp lại với nhau và tính toán hàng nghìn giao dịch, sau đó xác minh tính hợp lệ của chúng trên chuỗi bằng một bằng chứng STARK duy nhất. Chi phí của quy trình trên chuỗi được phân chia giữa**tất cả**giao dịch trong lô. Điều này dẫn đến bảo mật Ethereum và chi phí gas thấp cho mỗi giao dịch.

Chi phí tính toán thấp sẽ mở ra một lớp ứng dụng mới mà trước đây không khả thi trên chuỗi. Các thuộc tính này làm cho STARK trở thành một khối xây dựng tuyệt vời để cải thiện trải nghiệm người dùng và giảm chi phí gas, đồng thời duy trì tính bảo mật của lớp thanh toán Ethereum.

StarkWare cung cấp hai giải pháp để mở rộng quy mô Ethereum với STARK: StarkEx và StarkNet.

### **StarkEx**

[StarkEx](https://starkware.co/starkex/)là một khuôn khổ để tạo các giải pháp mở rộng quy mô dành riêng cho ứng dụng được cấp phép. StarkEx là một hộp công cụ gồm[luồng ứng dụng](https://docs.starkware.co/starkex-v4/starkex-deep-dive/regular-flows)hữu ích mà các dự án có thể sử dụng để đạt được tính toán ngoài chuỗi giá rẻ. Một bằng chứng STARK, chứng thực tính đúng đắn của việc thực thi, được tạo ra ngoài chuỗi. Một bằng chứng như vậy có thể bao gồm tối đa 12.000–500.000 giao dịch (tùy thuộc vào loại giao dịch). Sau đó, bằng chứng được gửi đến Trình xác minh STARK để được chấp nhận trên chuỗi. Điều này có nghĩa là một lần xác minh cho tất cả các giao dịch — với chi phí gas được khấu hao cực kỳ thấp trên mỗi giao dịch.

Một vài ví dụ về các ứng dụng được triển khai trên StarkEx là dYdX (giao dịch vĩnh viễn), Immutable và Sorare (NFT — đào và giao dịch), DeversiFi (giao dịch giao ngay) và Celer (DeFi Pooling).

StarkWare liên tục bổ sung thêm nhiều luồng ứng dụng cho StarkEx, theo thị trường và nhu cầu của khách hàng.

### **StarkNet**

*[StarkNet](https://starkware.co/starknet/)là mạng lớp 2 không được phép, nơi bất kỳ người dùng hoặc nhà phát triển nào cũng có thể triển khai các hợp đồng thông minh được phát triển bằng ngôn ngữ Cairo.*

Có thể so sánh với trải nghiệm hợp đồng thông minh Ethereum, bên trong hệ sinh thái StarkNet, hợp đồng của bạn có thể tương tác với bất kỳ hợp đồng nào khác được triển khai trên StarkNet, cho phép các giao thức có thể kết hợp phong phú. Hợp đồng StarkNet cũng có thể tương tác với hợp đồng Ethereum thông qua truyền tin nhắn không đồng bộ.

Không giống như StarkEx, nơi các ứng dụng chịu trách nhiệm gửi giao dịch, StarkNet sắp xếp theo lô các giao dịch và gửi chúng để được xử lý và chứng minh. (Các trình sắp xếp chuỗi của StarkNet hiện đang được vận hành bởi StarkWare với các kế hoạch phi tập trung hóa trong tương lai.) Điều này có nghĩa là một khi các ứng dụng triển khai hợp đồng Cairo của họ, họ không phải lo lắng về việc chạy cơ sở hạ tầng Nhà điều hành bổ sung. StarkNet hỗ trợ chế độ sẵn có của dữ liệu Rollup, nghĩa là trạng thái của rollup được ghi vào Ethereum cùng với bằng chứng STARK.

Một cộng đồng nhà phát triển khổng lồ tham gia sâu vào hệ sinh thái StarkNet, xây dựng các ứng dụng, công cụ và cơ sở hạ tầng. Hàng chục ứng dụng đã có trên testnet — DeFi, trò chơi, bỏ phiếu, AI, v.v. Ngoài ra, các công cụ dành cho nhà phát triển như trình khám phá khối, khung và môi trường thử nghiệm cục bộ, SDK bằng một số ngôn ngữ, v.v., đang được Cộng đồng StarkNet xây dựng. Ngoài ra, các cuộc thảo luận tích cực diễn ra trong nền tảng[Shamans'](https://community.starknet.io/), đưa ra các đề xuất cải tiến, các tính năng tiềm năng và các phương pháp hay nhất.

### **Tóm lại**

Cả[StarkEx](https://youtu.be/P-qoPVoneQA)và StarkNet đều là các giải pháp mở rộng quy mô dựa trên STARK. Cả hai đều cung cấp khả năng mở rộng, chi phí gas thấp và Bảo mật, nhưng có các yêu cầu vận hành và mô hình khả năng tương tác khác nhau. StarkEx có thể là giải pháp phù hợp cho một ứng dụng phần lớn là độc lập và phù hợp với các API mà StarkEx cung cấp. StarkNet có thể phù hợp hơn với một giao thức yêu cầu tương tác đồng bộ với các giao thức khác hoặc có nhu cầu vượt xa những gì StarkEx cung cấp.

STARK đã cách mạng hóa cách các ứng dụng có thể được xây dựng trên Ethereum. StarkEx và StarkNet sẽ tiếp tục kích hoạt các ứng dụng trước đây không khả thi và đẩy các giới hạn của những gì có thể có trên chuỗi khối.

Bài viết này được viết với sự hợp tác của[Tim Gestson](https://twitter.com/IcemanTim)và nhóm[StarkWare](https://starkware.co/)