### TL; DR

* StarkWare cung cấp nhiều chế độ Dữ liệu sẵn có (DA) để khách hàng lựa chọn, tùy theo mức độ ưu tiên của họ
* Có ba cách tiếp cận Tính khả dụng của dữ liệu đối với bằng chứng STARK, tất cả chúng đều đã có sẵn trong quá trình sản xuất:\
  —**Tổng hợp**: sổ cái được xuất bản trực tiếp trên chuỗi khối\
  —**Xác thực**: Ủy ban về tính khả dụng của dữ liệu bảo vệ sổ cái, chỉ với một hàm băm được lưu trữ trên chuỗi\
  —**Tập**: ứng dụng có thể cho phép người dùng chọn chế độ DA của họ — Rollup hoặc Validium — cho mỗi và mọi giao dịch
* Bất kể DA nào được sử dụng — tính hợp lệ của tất cả các giao dịch được đảm bảo bởi STARK

### Giới thiệu

Tính đến tháng 11 năm 2022,[StarkEx](https://starkware.co/starkex/)đã thanh toán hơn 750 tỷ đô la khối lượng giao dịch và hơn 270 triệu giao dịch trên Ethereum. Trong không gian NFT, cung cấp năng lượng cho các ứng dụng như ImmutableX và Sorare, StarkEx đã đúc hơn 85 triệu NFT với mức giá rẻ hơn 1000 lần so với thực hiện điều này trực tiếp trên Ethereum. Công nghệ dựa trên STARK đang mở rộng quy mô Ethereum. Ví dụ: trong một tuần, StarkEx đã chạy số lượng giao dịch gấp 1,6 lần so với Ethereum (12 triệu trên StarkEx so với 7,5 triệu trên Ethereum) trong khi chiếm chưa đến 0,1% không gian khối Ethereum. Và nó thực hiện tất cả những điều này trong khi cung cấp cho người dùng mức độ bảo mật giống như thể họ đang giải quyết trực tiếp trên Ethereum.

### Làm thế nào để StarkWare đạt được điều này?

Người dùng gửi các giao dịch trên Lớp 2 (StarkEx hoặc StarkNet), các giao dịch này được nhóm và gửi đến một bộ chứng minh STARK. Người chứng minh STARK này biết trạng thái của sổ cái trước và sau khi các giao dịch này được xử lý. Người chứng minh tạo ra bằng chứng STARK chứng thực tính hợp lệ của trạng thái mới của sổ cái sau khi các giao dịch này đã được thực hiện. Trạng thái mới và bằng chứng STARK được gửi đến trình xác minh STARK trên chuỗi. Việc xác minh bằng chứng này diễn ra tự động thông qua hợp đồng thông minh bất biến trên Ethereum.

Kiến trúc này cung cấp những gì tốt nhất của cả hai thế giới: chúng ta có thể có chi phí giao dịch thấp, trong khi vẫn có Ethereum ở giữa với tư cách là trọng tài trung lập. Ethereum với tư cách là người phân xử không chỉ là thứ dễ sở hữu; nó cung cấp bảo mật quan trọng cho người dùng cuối. Giờ đây, người dùng giao dịch có thể yên tâm rằng tiền của họ được bảo đảm bằng Ethereum và các giao dịch là bất biến sau khi chúng được xác minh trên Ethereum. Người dùng cũng hoàn toàn tự quản lý tiền của mình. Tự lưu giữ rất quan trọng vì nó đảm bảo rằng người dùng luôn có quyền truy cập vào tiền của họ mà không cần phụ thuộc vào bất kỳ bên thứ ba nào.

### Dữ liệu sẵn có phù hợp với tất cả những điều này ở đâu?

Điều quan trọng là phải nhấn mạnh cả những gì bằng chứng này đang làm cũng như những gì nó không phải</em>*làm. Bằng chứng đang chứng thực tính hợp lệ của trạng thái mới, nhưng nó không cho bạn biết trạng thái mới là gì. Đối với điều đó, bạn cần dữ liệu sẵn có. Nếu chúng ta chỉ có bằng chứng, thì chuỗi khối biết rằng những gì đã gửi là hợp lệ, nhưng nó không biết trạng thái mới (ví dụ: số dư sổ cái) là gì! Người tiêu dùng dữ liệu này bao gồm những người dùng có giao dịch trong các bằng chứng này. Dữ liệu sẽ được cung cấp cho họ nếu họ muốn rút tiền trên Ethereum mà không cần tin tưởng vào nhà điều hành Lớp 2. Điều này mang lại cho người dùng toàn quyền tự quản lý tiền của họ.</p>

Một ví dụ tương tự cho điều này là giáo viên trung học của bạn yêu cầu bạn chứng minh rằng x bằng x. Điều này là tầm thường để chứng minh. Điều khó trả lời hơn: x thực sự bằng bao nhiêu? Đối với điều đó, bạn cần một phần thông tin riêng biệt. Có thể là x bằng 5 hoặc một giá trị khác. Tương tự như vậy, trên chuỗi khối, bằng chứng STARK có thể được gửi tới hợp đồng thông minh của trình xác minh STARK để xác minh. Và người xác minh có thể chứng thực rằng bằng chứng là hợp lệ (x=x). Nhưng bạn cần một đầu vào riêng để cho bạn biết x (số dư sổ cái mới) là bao nhiêu.

Có ba cách tiếp cận để cung cấp dữ liệu này:

#### Chế độ cuộn lên

Chế độ tổng số đảm bảo rằng trạng thái của sổ cái được lưu trữ trên Ethereum cùng với các bằng chứng. Chế độ tổng số hiện được[dYdX](https://dydx.exchange/)sử dụng trong sản xuất và cũng được sử dụng bởi mạng[Public StarkNet](http://starknet.io/)L2. Lợi ích ở đây rất rõ ràng: người ta có thể tạo lại trạng thái của sổ cái bằng cách chỉ tương tác với chuỗi khối Ethereum. Hàm ý của điều này là bạn, với tư cách là người dùng cuối, có thể nói chuyện một cách đáng tin cậy với hợp đồng thông minh có liên quan trên Ethereum và rút tiền của bạn ngay cả khi hệ thống Lớp 2 ngừng hoạt động.

#### hợp lệ

Trong Chế độ tổng hợp, phần lớn chi phí gas Ethereum được chuyển đến Tính khả dụng của dữ liệu chứ không phải xác minh bằng chứng. Điều này là do việc lưu trữ dữ liệu trên blockchain rất tốn gas. Ở chế độ Validium, thông tin sổ cái không được gửi đến Ethereum. Thay vào đó, nó được lưu trữ ngoài chuỗi với Ủy ban về tính sẵn có của dữ liệu. Ethereum lưu trữ một hàm băm của thông tin sổ cái này. Ủy ban về tính khả dụng của dữ liệu này bao gồm một nhóm tối thiểu các thành viên độc lập giám sát việc cập nhật trạng thái chính xác cũng như giữ một bản sao của dữ liệu đã được xử lý. Mỗi phiên bản StarkEx có thể tạo đại biểu của riêng mình. Thành viên đại biểu cho các ứng dụng hiện có đang chạy trên StarkEx bao gồm các thực thể như[Consensys](https://consensys.net/),[Nethermind](https://nethermind.io/),[Iqlusion](https://iqlusion.io/)và[Cephalopod](https://cephalopod.equipment/).

Những lợi ích ở đây là rõ ràng. Không cần phải trả phí gas Ethereum để lưu trữ thông tin sổ cái trên chuỗi. Thay vào đó, thứ duy nhất được lưu trữ trên Ethereum là một hàm băm duy nhất của thông tin sổ cái. Nếu bạn muốn rút tiền từ Lớp 2 một cách đáng tin cậy bằng cách nói chuyện với Ethereum, bạn chỉ cần có chữ ký điện tử của một trong các thành viên của Ủy ban Dữ liệu Sẵn có. Các thành viên DAC sẽ sử dụng mật mã để chứng minh rằng bạn có quyền sở hữu các khoản tiền đó.

Một lợi ích tiềm ẩn khác của Tính khả dụng của Dữ liệu Validium là tính bảo mật đối với những người đọc chuỗi khối. Trong Chế độ tổng số, số dư của mỗi tài khoản tại thời điểm mỗi bằng chứng được gửi sẽ được công khai. Với Validium, dữ liệu này bị ẩn khỏi chuỗi khối — chỉ có Ủy ban về tính sẵn có của dữ liệu mới biết điều này, vì dữ liệu này được lưu giữ ngoài chuỗi. Mức độ bảo mật này cho phép nhiều trường hợp sử dụng khác nhau trong đó việc làm xáo trộn dữ liệu giao dịch là rất quan trọng.

#### ý chí

Volition là kiến trúc có sẵn dữ liệu cung cấp lựa chọn giữa Chế độ hợp lệ và Tổng số ở cấp độ giao dịch. Nó thực hiện điều này bằng cách giữ một sổ cái trực tuyến và một sổ cái khác với Ủy ban tính sẵn có của dữ liệu. Người dùng có thể chọn giữa chế độ Xác thực và Tổng số cho từng giao dịch riêng lẻ.

Hãy tưởng tượng rằng bạn mua một NFT thực sự đắt tiền như Bored Ape hoặc Cryptopunk, trên một ứng dụng chạy trên StarkEx. Bạn có thể muốn sử dụng Chế độ tổng số để bảo mật dữ liệu cho NFT đó, vì bạn muốn có một bản ghi về giao dịch cụ thể đó được lưu trữ trên Ethereum. Tuy nhiên, sau đó bạn có thể mua một NFT thực sự rẻ (ví dụ: áo choàng cho nhân vật của bạn trong trò chơi chuỗi khối) và trong trường hợp đó, bạn sẽ rất vui khi tiết kiệm tiền bằng cách sử dụng Validium.

Nếu bạn quan tâm đến quy mô đạt được bằng các bằng chứng của STARK, vui lòng đến và xây dựng dựa trên chúng tôi.



Bạn luôn có thể gửi email tới[info@starkware.co](mailto:info@starkware.co)và một người sẽ nhận được email của bạn.