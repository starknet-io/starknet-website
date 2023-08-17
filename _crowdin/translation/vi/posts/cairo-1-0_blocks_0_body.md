### TL; DR

* Cairo 1.0 là bản phát hành chính đầu tiên sau bản giới thiệu[của Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)hai năm trước
* Cairo 1.0 sẽ cung cấp cho các nhà phát triển một ngôn ngữ lập trình an toàn hơn, đơn giản hơn và dễ sử dụng hơn
* Trung tâm của Cairo 1.0 sẽ là**Sierra**, một lớp đại diện trung gian hứa hẹn sự ổn định lâu dài hơn cho các chương trình của Cairo
* Sierra cải tiến Cairo để phục vụ trong mạng không cần cấp phép:\
  -**Bảo vệ mạng**: nó cho phép bảo vệ DoS mạnh mẽ hơn\
  -**Bảo vệ người dùng**: nó cho phép kháng kiểm duyệt cấp EthereumCairo 1.0 sẽ ảnh hưởng đến StarkNet theo nhiều cách. Nó cũng sẽ ảnh hưởng đến[Regenesis](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Chúng tôi sẽ đăng thêm thông tin về Regenesis trong vài tuần tới.

### Giới thiệu

Vào năm 2020, chúng tôi đã phát hành Cairo, một ngôn ngữ lập trình hoàn chỉnh của Turing và đã tiến một bước lớn hướng tới việc hỗ trợ tính toán có thể kiểm chứng bằng STARK. Hôm nay, chúng tôi công bố**Cairo 1.0**, tiến bộ lớn nhất của Cairo cho đến nay. Nó sẽ giới thiệu một ngôn ngữ cải tiến, với các tính năng sẽ nâng cao khả năng sử dụng, an toàn và tiện lợi. Nó được thiết kế để hỗ trợ các yêu cầu của StarkNet như một mạng không được phép, cho phép giao thức trở nên đơn giản và an toàn hơn.\
Quá trình phát triển đang diễn ra và chúng tôi hy vọng bản phát hành đầu tiên sẽ sớm ra mắt.

Trong bài đăng này, chúng tôi sẽ mô tả hành trình của Cairo cho đến nay và chia sẻ chi tiết về các tính năng sắp tới.

### Hành trình Cairo

Cho đến năm 2020, kiến thức chuyên biệt là cần thiết để xây dựng các chương trình có thể chứng minh được STARK cho tính toán chung. Điều đó chỉ có thể xảy ra đối với những người hiểu toán học phức tạp đằng sau STARK. Cụ thể, đối với mọi logic nghiệp vụ, tức là mọi phép tính, người ta cần tạo một Biểu diễn trung gian đại số (AIR) — một tập hợp các ràng buộc đa thức biểu thị phép tính cụ thể.

Cairo ra đời từ nhận thức rằng tính toán có thể kiểm chứng nên được cung cấp cho các nhà phát triển ở khắp mọi nơi. Cairo giúp các nhà phát triển có thể khai thác sức mạnh của STARK.

Kể từ đó, cộng đồng nhà phát triển đã tận dụng Cairo để xây dựng một cách nhiệt tình. Mọi thứ trong hệ sinh thái StarkNet phát triển mạnh ngày nay đều dựa trên Cairo. Từ[StarkNet](https://starkware.co/starknet/)đến[StarkEx](https://starkware.co/starkex/), các ứng dụng do Cairo cung cấp đã xử lý hơn 220 triệu giao dịch, đúc hơn 65 triệu NFT và xử lý các giao dịch trị giá 700 tỷ đô la, tất cả đều được thanh toán trên Ethereum.

Mặc dù Cairo làm cho STARK có thể truy cập được, nhưng ban đầu nó được thiết kế dưới dạng hợp ngữ và do đó, nó được viết dưới dạng ngôn ngữ cấp thấp.

![Một ví dụ cho các chương trình ban đầu được viết ở Cairo](/assets/cairocode_01.png "Một ví dụ cho các chương trình ban đầu được viết ở Cairo")

Được thúc đẩy bởi phản hồi từ các nhà phát triển và sự gia tăng của[StarkNet](https://starkware.co/starknet/), chúng tôi dần dần làm cho Cairo trở nên biểu cảm hơn và thân thiện hơn với nhà phát triển.

![Một ví dụ từ hợp đồng ERC-20 Cairo thể hiện sự hỗ trợ của các biến, câu lệnh if, lỗi và thư viện UINT256](/assets/cairocode_02.png "Một ví dụ từ hợp đồng ERC-20 Cairo thể hiện sự hỗ trợ của các biến, câu lệnh if, lỗi và thư viện UINT256")

Nhưng chúng tôi sớm kết luận rằng đã đến lúc phải thực hiện một bước tiến lớn và thay vì cải thiện từng bước cho Cairo, hãy thực hiện một sự chuyển đổi táo bạo hơn.

### Cairo 1.0

Đối với Cairo 1.0, chúng tôi đã xây dựng một trình biên dịch hoàn toàn mới từ đầu, trình biên dịch này sẽ cung cấp cho các nhà phát triển các tính năng an toàn và sẽ cho phép họ viết hợp đồng theo cách đơn giản và rõ ràng hơn.

#### Giới thiệu Sierra: đảm bảo mọi cuộc chạy ở Cairo đều có thể được chứng minh

Phần bổ sung chính trong Cairo 1.0 là Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra tạo thành một lớp biểu diễn trung gian mới giữa Cairo 1.0 và mã byte Cairo. Mục tiêu của Sierra là đảm bảo rằng mọi hoạt động của Cairo - tức là một chương trình Cairo và đầu vào của nó - đều có thể được chứng minh (xem thêm bên dưới).

Sierra hứa hẹn với các nhà phát triển mã tốt hơn trong tương lai của Cairo Sự ổn định hơn nữa được cung cấp bởi thực tế là các hợp đồng StarkNet sẽ không cần biên dịch lại trong trường hợp cải tiến hệ thống cơ bản (ví dụ: thay đổi kiến trúc CPU AIR, cải tiến bản dịch cuối cùng từ Sierra sang mã byte Cairo).

**Chứng minh mọi lần chạy Cairo.**Ở Cairo cũ, một cuộc chạy Cairo có thể dẫn đến ba trường hợp — ĐÚNG, SAI hoặc thất bại. Chạy không thành công không thể được chứng minh. Sierra, đảm bảo rằng một lần chạy Cairo sẽ không bao giờ thất bại và chỉ có thể dẫn đến TRUE hoặc FALSE. Đổi lại, điều này đảm bảo rằng mọi hoạt động ở Cairo đều có thể được chứng minh.

Việc giới thiệu Sierra này có ý nghĩa quan trọng đối với StarkNet với tư cách là một mạng không được phép. Sierra đảm bảo rằng các giao dịch thậm chí được hoàn nguyên có thể được đưa vào các khối StarkNet. Thuộc tính này sẽ cho phép giao thức StarkNet duy trì tinh gọn và đơn giản mà không cần thêm các cơ chế kinh tế tiền điện tử phức tạp.\
Hai ví dụ có ý nghĩa:

1. Sequencer sẽ có thể thu phí đối với các giao dịch được hoàn nguyên, cho phép StarkNet ngăn chặn Sequencer DoS theo cách đã được thiết lập tốt.
2. Việc triển khai các giao dịch L1 bắt buộc sẽ có thể thực hiện được, cho phép StarkNet thừa hưởng toàn bộ khả năng chống kiểm duyệt của Ethereum.

### **Tính năng ngôn ngữ**

Cairo 1.0 sẽ cung cấp nhiều cải tiến cho ngôn ngữ lập trình. Không phải mọi thứ được liệt kê dưới đây sẽ là một phần của bản phát hành đầu tiên, nhưng nó là một phần của lộ trình.

#### **Cải thiện cú pháp**

* Không còn*local*và*tempvar*. Bây giờ chúng ta chỉ cần*let*để cai trị tất cả các biến.
* Cải thiện cú pháp câu lệnh*if*

```python
#Old
if cond != 0 {
  tempvar x = x+1;
} khác {
  tempvar x = x;
}
__________________________________
#New
if cond { x = x + 1; }
```

#### **Loại đảm bảo an toàn**

Trình biên dịch sẽ sử dụng kiểu gõ mạnh để cải thiện tính bảo mật của mã. Ví dụ:

* Con trỏ sẽ luôn trỏ đến bộ nhớ khởi tạo.
* Các từ điển sẽ luôn bị nén, thay vì để lại trách nhiệm gọi squash_dict cho lập trình viên.

#### **Dễ dàng sử dụng cấu trúc ngôn ngữ hơn**

Ví dụ:

* Đối với vòng lặp

```
đặt tổng = 0
for x in iter {
  sum = sum + x;
}
```

* biểu thức Boolean
* Số nguyên (với phép chia số nguyên thông thường 👯)
* Bảo vệ tràn cho các loại có liên quan
* điều kiện Boolean

```
# Cũ
Nếu cond1:
  nếu cond2:
       # Một số mã
  khác nếu cond3:
       # Cùng mã
__________________________________
# Mới
Nếu cond1 && (cond2 || cond3) { … }
```

#### **Một hệ thống loại hoàn chỉnh**

* Các kiểu dữ liệu trừu tượng (nghĩa là giống như rỉ sét enum)

```
enum Tùy chọn<T> {
 Một số: T,
 Không có,
}
kết quả trận đấu {
 Một số (r) => {..},
 Không có => {..},
}
```

* đặc điểm

```
đặc điểm Thêm<Uint256> {
    fn thêm(…) { … }
}

cho a: Uint256 = 1;
cho b: Uint256=4;
a + b; // Được đánh giá là 5 của loại Uint256.
```

#### **Thư viện trực quan hơn**

(ví dụ: dict, mảng)

* Số<Uint256, MyStruct>;
* Mảng<MyOtherStruct>;

#### **Mã được tối ưu hóa hơn**

Không cần nêu rõ ràng việc phân bổ các biến cục bộ — tự động phát hiện và thực hiện tự động.

#### **Tích hợp trình biên dịch tốt hơn**

Cho phép hỗ trợ IDE tốt hơn, quản lý gói và tạo điều kiện tốt hơn cho các đóng góp của cộng đồng.

### **Phần kết luận**

Hai năm sau khi Cairo lần đầu tiên được sử dụng trong sản xuất, chúng tôi đang phát triển Cairo 1.0, phiên bản này sẽ mang lại khả năng diễn đạt, bảo mật và cú pháp được cải thiện. Nó sẽ có một bước tiến dài, cho phép các nhà phát triển viết hợp đồng StarkNet của họ dễ dàng hơn.

Trong một bài đăng khác sắp ra mắt, chúng tôi sẽ chia sẻ thêm chi tiết về cách Cairo 1.0 sẽ ảnh hưởng đến quá trình tái tạo của StarkNet và cách các nhà phát triển nên chuẩn bị cho việc phát hành.