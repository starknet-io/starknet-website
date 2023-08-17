### TL; DR

* Chứng minh đệ quy có sẵn trên Mainnet, mở rộng các ứng dụng StarkEx cũng như StarkNet bằng một bằng chứng duy nhất
* Nó tăng quy mô và mang lại lợi ích về chi phí và độ trễ (một sự kiện hiếm hoi và thú vị về quy mô và độ trễ di chuyển song song và không phải là sự đánh đổi)
* Nó tạo tiền đề cho L3 và các lợi ích khác. Hãy đọc bài đăng trên blog về[Chứng minh đệ quy](https://medium.com/@starkware/recursive-starks-78f8dd401025). Đó là thứ tuyệt vời 😉

### Mở rộng quy mô!

Bằng chứng đệ quy - được cung cấp bởi tính toán chung của Cairo - hiện đang được sản xuất. Điều này đánh dấu một sự thúc đẩy lớn đối với sức mạnh của quy mô L2 với STARK. Nó sẽ nhanh chóng mang lại sự gia tăng gấp nhiều lần về số lượng giao dịch có thể được ghi vào Ethereum thông qua một bằng chứng duy nhất.

Cho đến thời điểm hiện tại, quy mô STARK đã hoạt động bằng cách “cuộn” hàng chục hoặc thậm chí hàng trăm nghìn giao dịch thành một bằng chứng duy nhất, được ghi vào Ethereum. Với đệ quy, nhiều bằng chứng như vậy có thể được “cuộn lại” thành một bằng chứng duy nhất.

Phương pháp này hiện đang được sản xuất cho vô số ứng dụng dựa trên Cairo: ứng dụng chạy trên StarkEx, công cụ mở rộng quy mô SaaS của StarkWare và StarkNet, bản tổng hợp không được phép.

### Câu chuyện cho đến nay

Kể từ bằng chứng đầu tiên trên Mainnet, vào tháng 3 năm 2020, những phát triển sau đây đã định hình cách sử dụng STARK.

### nhân rộng dựa trên STARK

Vào tháng 6 năm 2020, giải pháp mở rộng quy mô dựa trên STARK đầu tiên —[StarkEx](https://youtu.be/P-qoPVoneQA)— đã được triển khai trên Ethereum Mainnet. StarkEx có một Người kiểm chứng thực hiện các phép tính lớn ngoài chuỗi và tạo ra bằng chứng STARK về tính chính xác của chúng và một Người xác minh xác minh bằng chứng này trên chuỗi. Các ràng buộc cho lần triển khai đầu tiên này được các kỹ sư của StarkWare “viết tay”, do đó hạn chế đáng kể tốc độ tính năng cho StarkEx. Chúng tôi kết luận rằng cần có một ngôn ngữ lập trình để hỗ trợ chứng minh khả năng tính toán chung — Cairo.

#### Cairô

Vào mùa hè năm 2020, Cairo đã xuất hiện[đầu tiên trên Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Cairo là viết tắt của Đại diện trung gian đại số CPU (AIR) và bao gồm một AIR duy nhất xác minh tập lệnh của “CPU” này. Nó đã mở ra cơ hội cho các bằng chứng mã hóa cho logic kinh doanh phức tạp hơn, cho các câu lệnh tính toán tùy ý và để thực hiện điều đó một cách nhanh hơn và an toàn hơn. Một chương trình Cairo có thể chứng minh việc thực thi logic của một ứng dụng. Nhưng một chương trình Cairo cũng có thể là sự kết hợp của nhiều ứng dụng như vậy — SHARP.

#### SẮC

SHARP — một Trình chứng minh được CHIA SẺ — nhận các giao dịch từ một số ứng dụng riêng biệt và chứng minh tất cả chúng trong một bằng chứng STARK duy nhất. Các ứng dụng kết hợp các lô giao dịch của chúng, lấp đầy dung lượng của bằng chứng STARK nhanh hơn. Các giao dịch được xử lý với tốc độ và độ trễ được cải thiện. Biên giới tiếp theo: Bằng chứng đệ quy, nhưng không chỉ dành cho một số logic được mã hóa cứng, mà còn dành cho**tính toán chung**.

Để hiểu toàn bộ lợi ích của Chứng minh đệ quy, bạn nên hiểu thêm một chút về cách chứng minh (không đệ quy) đã được SHARP thực hiện cho đến nay. Bản vẽ 1 mô tả một luồng không đệ quy điển hình:

![Hình 1: Một luồng chứng minh không đệ quy điển hình](/assets/recursive_starks_01.png "Hình 1: Một luồng chứng minh không đệ quy điển hình")

Ở đây, báo cáo đến theo thời gian. Khi đạt đến ngưỡng dung lượng (hoặc thời gian) nhất định, một câu lệnh kết hợp lớn (còn gọi là Train) sẽ được tạo. Tuyên bố kết hợp này chỉ được chứng minh khi tất cả các tuyên bố riêng lẻ đã được nhận. Chứng minh này mất nhiều thời gian để chứng minh (đại khái là tổng thời gian cần thiết để chứng minh từng mệnh đề riêng lẻ).

Việc chứng minh các câu lệnh cực lớn cuối cùng bị giới hạn bởi các tài nguyên điện toán có sẵn như bộ nhớ. Trước khi đệ quy, đây thực sự là rào cản hạn chế khả năng mở rộng của chứng minh STARK.

### Chứng minh đệ quy là gì?

Với bằng chứng STARK, thời gian cần thiết để chứng minh một tuyên bố gần như tuyến tính với thời gian cần thiết để thực hiện tuyên bố đó. Ngoài ra, nếu việc chứng minh một câu lệnh mất thời gian T, thì việc xác minh bằng chứng mất khoảng log(T) thời gian, thường được gọi là "nén logarit". Nói cách khác, với STARK, bạn dành ít thời gian hơn cho việc xác minh tuyên bố hơn là tính toán nó.

[Cairo](https://starkware.co/cairo/)cho phép thể hiện các tuyên bố tính toán chung có thể được chứng minh bằng bằng chứng STARK và được xác minh bởi các trình xác minh STARK tương ứng.

Đây là lúc cơ hội để thực hiện[đệ quy](https://en.wikipedia.org/wiki/Recursion)bắt đầu: Cũng giống như cách chúng ta viết chương trình Cairo chứng minh tính đúng đắn của hàng nghìn giao dịch, chúng ta cũng có thể viết chương trình Cairo xác minh nhiều bằng chứng STARK. Chúng tôi có thể tạo một bằng chứng duy nhất chứng thực tính hợp lệ của nhiều bằng chứng “ngược dòng”. Đây là những gì chúng tôi gọi là Chứng minh đệ quy.

Do nén logarit và thời gian chứng minh gần như tuyến tính, việc chứng minh xác minh bằng chứng STARK mất thời gian tương đối ngắn (dự kiến sẽ chỉ mất vài phút trong tương lai gần).

Khi triển khai Đệ quy, SHARP có thể chứng minh các câu lệnh khi chúng đến. Bằng chứng của họ có thể được hợp nhất nhiều lần thành bằng chứng đệ quy theo nhiều mẫu khác nhau cho đến khi, tại một thời điểm nhất định, bằng chứng kết quả được gửi tới hợp đồng xác minh trên chuỗi. Một mô hình điển hình được mô tả trong Hình 2:

![Hình 2: Một luồng chứng minh đệ quy điển hình.](/assets/recursive_starks_02.png "Hình 2: Một luồng chứng minh đệ quy điển hình.")

### Lợi ích tức thì của việc chứng minh đệ quy

#### Giảm chi phí trên chuỗi

Ngay lập tức, chúng tôi “nén” nhiều bằng chứng thành một, nghĩa là chi phí xác minh trên chuỗi cho mỗi giao dịch thấp hơn (trong đó mỗi tuyên bố có thể bao gồm nhiều giao dịch).

Với đệ quy, rào cản tài nguyên tính toán (ví dụ: bộ nhớ) giới hạn kích thước bằng chứng cho đến nay, sẽ bị loại bỏ, vì mỗi câu lệnh có kích thước giới hạn có thể được chứng minh riêng biệt. Do đó, khi sử dụng đệ quy, kích thước đệ quy Train hiệu quả gần như không giới hạn và chi phí cho mỗi giao dịch có thể giảm theo đơn đặt hàng độ lớn.

Về mặt thực tế, mức giảm phụ thuộc vào độ trễ có thể chấp nhận được (và tốc độ giao dịch đến). Ngoài ra, vì mỗi bằng chứng thường đi kèm với một số đầu ra, chẳng hạn như dữ liệu trên chuỗi, nên có giới hạn về lượng dữ liệu có thể được ghi trên chuỗi cùng với một bằng chứng duy nhất. Tuy nhiên, giảm chi phí theo một mức độ lớn và thậm chí tốt hơn là có thể đạt được một cách tầm thường.

#### Giảm độ trễ

Mẫu Chứng minh đệ quy làm giảm độ trễ của việc chứng minh Chuỗi câu lệnh lớn. Đây là kết quả của hai yếu tố:

1. Các tuyên bố đến có thể được chứng minh**song song với**(trái ngược với việc chứng minh một tuyên bố kết hợp cực kỳ lớn).
2. Không cần phải đợi đến câu lệnh cuối cùng trong Chuyến tàu mới bắt đầu chứng minh. Thay vào đó, bằng chứng có thể được kết hợp với các tuyên bố mới khi chúng đến. Điều này có nghĩa là độ trễ của câu lệnh cuối cùng tham gia một Train, gần bằng thời gian cần thiết để chứng minh câu lệnh cuối cùng đó cộng với thời gian cần thiết để chứng minh một câu lệnh Trình xác minh đệ quy (chứng thực cho tất cả các câu lệnh đã được đưa lên tàu này) Tàu cụ thể).

Chúng tôi đang tích cực phát triển và tối ưu hóa độ trễ của việc chứng minh câu lệnh Trình xác minh đệ quy. Chúng tôi hy vọng điều này sẽ đạt được thứ tự vài phút trong vòng vài tháng. Do đó, SHARP hiệu quả cao có thể cung cấp độ trễ từ vài phút đến vài giờ, tùy thuộc vào sự đánh đổi so với chi phí trên chuỗi cho mỗi giao dịch. Điều này thể hiện một cải tiến có ý nghĩa đối với độ trễ của SHARP.

#### Tạo điều kiện thuận lợi cho L3

Sự phát triển của tuyên bố Trình xác minh đệ quy ở Cairo cũng mở ra khả năng gửi bằng chứng tới StarkNet, vì tuyên bố đó có thể được đưa vào hợp đồng thông minh của StarkNet. Điều này cho phép xây dựng các triển khai[L3 trên StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)công khai (mạng L2).

Mẫu đệ quy cũng áp dụng cho tập hợp các bằng chứng từ L3, được xác minh bằng một bằng chứng duy nhất trên L2. Do đó, siêu quy mô cũng đạt được ở đó.

### Lợi ích tinh tế hơn

#### đệ quy ứng dụng

Đệ quy thậm chí còn mở ra nhiều cơ hội hơn cho các nền tảng và ứng dụng mong muốn mở rộng hơn nữa chi phí và hiệu suất của chúng.

Mỗi bằng chứng STARK chứng thực tính hợp lệ của một tuyên bố được áp dụng cho một số đầu vào được gọi là “đầu vào công khai” (hoặc “đầu ra của chương trình” theo thuật ngữ Cairo). Về mặt khái niệm, đệ quy STARK nén hai bằng chứng với đầu vào*hai*thành bằng chứng*một*với hai đầu vào. Nói cách khác, trong khi số lượng bằng chứng giảm đi, số lượng đầu vào không đổi. Sau đó, các đầu vào này thường được ứng dụng sử dụng để cập nhật một số trạng thái trên L1 (ví dụ: để cập nhật trạng thái gốc hoặc thực hiện rút tiền trên chuỗi).

Nếu câu lệnh đệ quy được phép là*nhận biết ứng dụng*, tức là nhận ra ngữ nghĩa của chính ứng dụng, nó có thể nén hai bằng chứng thành một*cũng như*kết hợp hai đầu vào thành một. Câu lệnh kết quả chứng thực tính hợp lệ của tổ hợp đầu vào dựa trên ngữ nghĩa của ứng dụng, do đó có tên là Đệ quy ứng dụng (ví dụ, xem Hình 3)..

![Hình 3: Ví dụ đệ quy ứng dụng](/assets/recursive_starks_03.png "Hình 3: Ví dụ đệ quy ứng dụng")

Ở đây, Tuyên bố 1 chứng thực cập nhật trạng thái từ A đến B và Tuyên bố 2 chứng thực cập nhật thêm từ B lên C. Bằng chứng của Tuyên bố 1 và Tuyên bố 2 có thể được kết hợp thành tuyên bố thứ ba, chứng thực cập nhật trực tiếp từ A đến C . Bằng cách áp dụng logic tương tự theo cách đệ quy, người ta có thể giảm đáng kể chi phí cập nhật trạng thái cho đến yêu cầu về độ trễ cuối cùng.

Một ví dụ quan trọng khác của Đệ quy ứng dụng là nén dữ liệu tổng số từ nhiều bằng chứng. Ví dụ: đối với Bản tổng hợp hiệu lực chẳng hạn như StarkNet, mọi cập nhật lưu trữ trên L2 cũng được bao gồm dưới dạng dữ liệu truyền trên L1, để đảm bảo tính khả dụng của dữ liệu. Tuy nhiên, không cần gửi nhiều bản cập nhật cho cùng một phần tử lưu trữ, vì chỉ giá trị cuối cùng của các giao dịch được chứng thực bằng bằng chứng đã xác minh là cần thiết cho tính khả dụng của dữ liệu. Việc tối ưu hóa này đã được thực hiện trong một khối*đơn*StarkNet. Tuy nhiên, bằng cách tạo bằng chứng cho mỗi khối, Đệ quy ứng dụng có thể nén dữ liệu tổng số này trên*nhiều khối*L2. Điều này có thể giúp giảm chi phí đáng kể, cho phép khoảng thời gian chặn ngắn hơn trên L2 mà không làm mất khả năng mở rộng của các bản cập nhật L1.

Đáng chú ý: Đệ quy ứng dụng có thể được kết hợp với đệ quy bất khả tri của ứng dụng như được mô tả trước đó. Hai tối ưu hóa này là độc lập.

#### Giảm độ phức tạp của trình xác minh trên chuỗi

Độ phức tạp của trình xác minh STARK phụ thuộc vào loại tuyên bố mà nó được thiết kế để xác minh. Đặc biệt, đối với các câu lệnh Cairo, độ phức tạp của trình xác minh phụ thuộc vào các yếu tố cụ thể được cho phép trong ngôn ngữ Cairo và cụ thể hơn là các phần mềm tích hợp được hỗ trợ (nếu chúng tôi sử dụng phép ẩn dụ CPU cho Cairo, thì các phần tử tích hợp sẵn tương đương với vi -mạch trong CPU: các tính toán được thực hiện thường xuyên đến mức chúng yêu cầu tính toán được tối ưu hóa của riêng chúng).

Ngôn ngữ Cairo tiếp tục phát triển và ngày càng cung cấp nhiều tiện ích tích hợp hữu ích hơn. Mặt khác, Trình xác minh đệ quy chỉ yêu cầu sử dụng một tập hợp con nhỏ của các phần mềm cài sẵn này. Do đó, một SHARP đệ quy có thể hỗ trợ thành công bất kỳ câu lệnh nào ở Cairo bằng cách hỗ trợ ngôn ngữ đầy đủ trong trình xác minh đệ quy. Cụ thể, Trình xác minh Solidity L1 chỉ cần xác minh bằng chứng đệ quy và do đó có thể được giới hạn ở một tập hợp con ổn định hơn của ngôn ngữ Cairo: Trình xác minh L1 không cần phải cập nhật các bản tích hợp mới nhất và tốt nhất. Nói cách khác, việc xác minh các câu lệnh phức tạp không ngừng phát triển được chuyển xuống L2, để Trình xác minh L1 xác minh các câu lệnh đơn giản và ổn định hơn.

#### Giảm dấu chân máy tính

Trước khi sử dụng đệ quy, khả năng tổng hợp nhiều câu lệnh thành một bằng chứng bị giới hạn bởi kích thước tối đa của câu lệnh có thể được chứng minh trên các phiên bản điện toán có sẵn (và thời gian cần thiết để tạo ra các bằng chứng đó).

Với đệ quy, không còn cần phải chứng minh các tuyên bố cực lớn như vậy. Do đó, có thể sử dụng các phiên bản điện toán nhỏ hơn, ít tốn kém hơn và sẵn có hơn (mặc dù có thể cần nhiều phiên bản điện toán hơn so với phiên bản nguyên khối lớn). Điều này cho phép triển khai các phiên bản chứng minh trong nhiều môi trường vật lý và ảo hơn so với trước đây.

### Bản tóm tắt

Bằng chứng đệ quy về tính toán chung hiện phục vụ nhiều hệ thống sản xuất, bao gồm cả StarkNet, trên Mainnet Ethereum.

Lợi ích của đệ quy sẽ được nhận ra dần dần, vì nó tiếp tục cho phép những cải tiến mới và nó sẽ sớm mang lại quy mô siêu lớn, cắt giảm phí gas và cải thiện độ trễ bằng cách mở khóa tiềm năng song song hóa.

Nó sẽ mang lại những lợi ích đáng kể về chi phí và độ trễ cùng với các cơ hội mới như L3 và đệ quy ứng dụng. Việc tối ưu hóa hơn nữa Trình xác minh đệ quy đang diễn ra và dự kiến sẽ cung cấp các lợi ích về chi phí và hiệu suất thậm chí còn tốt hơn theo thời gian.



**Gidi Kaempfer**, Trưởng bộ phận Kỹ thuật lõi, StarkWare