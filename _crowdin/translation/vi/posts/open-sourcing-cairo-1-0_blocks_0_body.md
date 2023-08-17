### TL; DR

* **Cairo 1.0 là mã nguồn mở! Đây chỉ là bước đầu tiên hướng tới mã nguồn mở ngăn xếp StarkNet.**
* Bây giờ chúng tôi trình bày[cái nhìn đầu tiên](https://github.com/starkware-libs/cairo)vào trình biên dịch Cairo 1.0. Bây giờ bạn có thể bắt đầu thử nghiệm với mã Cairo 1.0 cơ bản
* Cairo 1.0 về cốt lõi rất giống với Rust
* Hãy coi đó là một hương vị đầu tiên, không phải là một bản phát hành. Nhiều cải tiến đang trên đường. Phiên bản đầu tiên của trình biên dịch được lên kế hoạch vào đầu Q1 năm sau.
* Cairo 1.0 chưa được hỗ trợ trên StarkNet. Nó sẽ được hỗ trợ trên StarkNet trong Q1 năm tới.

### giới thiệu

Vào năm 2020, chúng tôi đã phát hành[Cairo](https://eprint.iacr.org/2021/1063.pdf), một ngôn ngữ lập trình hoàn chỉnh Turing hỗ trợ khả năng tính toán có thể kiểm chứng. Cairo bắt đầu như một ngôn ngữ lắp ráp và dần dần trở nên biểu cảm hơn. Hai tháng trước, chúng tôi đã công bố[Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), giải quyết một số vấn đề chính trong tình hình hiện tại:

* Mặc dù cú pháp của Cairo đã được cải thiện đáng kể kể từ khi thành lập, nhưng trải nghiệm của nhà phát triển luôn có thể cải thiện. Cairo 1.0 là một ngôn ngữ được đánh máy đầy đủ lấy cảm hứng từ rỉ sét, giúp việc viết cùng một logic dễ dàng hơn và ít mắc lỗi hơn.
* Trình biên dịch hiện tại được phát triển trong cùng một kho lưu trữ với chính StarkNet, khiến việc theo dõi các thay đổi ngôn ngữ trở nên khó khăn hơn. Trình biên dịch Cairo 1.0 được viết từ đầu, cho phép phát triển tính năng nhanh hơn và thu hút nhiều sự tham gia của cộng đồng hơn.
* Mọi tính toán giờ đây đều có thể chứng minh được. Hiện tại, một chương trình Cairo có thể không thành công với các đầu vào cụ thể (ví dụ: bằng cách đạt được lệnh \`assert 1=2\` trong một số nhánh tính toán), khiến phép tính không thể chứng minh được. Với Cairo 1.0, các chương trình có thể được chứng minh ở mọi nhánh có thể. Điều này đặc biệt quan trọng đối với khả năng chống kiểm duyệt và bảo vệ DOS trong StarkNet.

Hôm nay, chúng tôi đánh dấu cột mốc quan trọng đầu tiên trong việc đạt được các mục tiêu trên khi chúng tôi chuyển quá trình phát triển sang kho lưu trữ công khai và**mã nguồn mở Cairo 1.0!**Giờ đây, lần đầu tiên các nhà phát triển có thể biên dịch và thực thi các chương trình Cairo 1.0 đơn giản. Điều này cho phép các nhà phát triển bắt đầu thử nghiệm Cairo 1.0 và dần dần làm quen với các tính năng mới, ngay cả khi ở giai đoạn này, họ chưa thể triển khai nó trên StarkNet.

### Khả năng hiện tại

Hiện tại, bạn có thể biên dịch và thực thi các chương trình cơ bản của Cairo. Trong khi nhiều cải tiến về cú pháp/ngôn ngữ vẫn đang được tiến hành, điều này cho phép bạn làm quen với Cairo 1.0 và tận hưởng các bản nâng cấp khi chúng xuất hiện.

**Lưu ý rằng việc viết hợp đồng StarkNet vẫn chưa được hỗ trợ.**Cú pháp StarkNet (biến lưu trữ/hợp đồng gọi/sự kiện và các lệnh gọi hệ thống khác) sẽ được thêm vào trong vài tuần tới.

### Ví dụ về mã

Để minh họa sự khác biệt giữa cú pháp cũ và Cairo 1.0, chúng tôi đã chọn hiển thị một vài triển khai/hương vị khác nhau để tìm số Fibonacci thứ n.

### Ví dụ I: Ghép các biểu thức

Trong Cairo 1.0, bạn có thể sử dụng các biểu thức[khớp](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match)giống như rỉ sét. Bạn sẽ không còn sợ các câu lệnh if/else có thể dẫn đến việc thu hồi tham chiếu nữa!

![](/assets/code01.png)

### Ví dụ II: Kiểu dữ liệu

Trong khi Cairo 0 hoạt động với nỉ và con trỏ, thì ở Cairo 1.0, chúng tôi có quyền truy cập riêng vào các loại dữ liệu phức tạp trong ngôn ngữ. Dưới đây, bạn có thể tìm thấy một ví dụ tạo ra một mảng gồm n số Fibonacci đầu tiên.

![](/assets/code02.png)

Như bạn có thể thấy ở trên, thay vì làm việc trực tiếp với các con trỏ bộ nhớ, chúng tôi sử dụng `Array::<felt>gõ \` và hàm \`array_append\`.

### Ví dụ III: cấu trúc & quyền sở hữu

Đoạn mã sau minh họa việc sử dụng các cấu trúc trong Cairo 1.0.

![](/assets/code03.png)

> Đoạn sau đây dành cho Rustaceans trong số khán giả. Cairo 1.0 quản lý bộ nhớ theo cách tương tự như rỉ sét. Đặc biệt, nó sử dụng các khái niệm về quyền sở hữu[và mượn](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Do đó, bằng cách truy cập một thành viên của cấu trúc \`FibResult\` (trong trường hợp này là \`result.value\`), chúng tôi đã di chuyển \`result\`, nghĩa là trừ khi FibResult có thể sao chép được, chúng tôi không thể sao chép truy cập lại vào \`result.index\`. Để khắc phục điều này, chúng tôi thêm thuộc tính \`#\[derive(Copy)]\` của loại \`FibResult\`. Trong các phiên bản sau, chúng tôi sẽ thêm tính năng tự động giải cấu trúc cho các cấu trúc. Điều này sẽ cho phép di chuyển quyền sở hữu của một thành viên mà không cần chạm vào các thành viên khác (đặc biệt, đoạn mã trên sẽ biên dịch ngay cả khi \`FibResult\` không có thuộc tính sao chép).

**Cụ thể, lưu ý rằng Cairo 1.0 hoàn toàn trừu tượng hóa mô hình bộ nhớ gốc (không xác định chỉ đọc) của Cairo.**

## Ví dụ IV: Lan truyền lỗi

Đoạn mã sau tính toán số Fibonacci thứ n, nhưng không giống như các ví dụ trước, tất cả các đầu vào đều thuộc loại uint128. Lưu ý rằng điều này giải quyết một điểm khó khăn lớn khi xử lý các uint ở Cairo 0. Ở đây, uint128 (và trong tương lai là uint256) là các kiểu gốc.

![](/assets/0_s8bhjf_ade3carmi.png)

Việc cộng hai số nguyên 128 bit có thể gây tràn. Đoạn mã trên sử dụng Tùy chọn[enum](https://doc.rust-lang.org/rust-by-example/std/option.html)và toán tử[dấu chấm hỏi](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html)để xử lý trường hợp tràn trong một trong các phép bổ sung trung gian. So sánh điều này với cú pháp bổ sung[hiện tại](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256, trong đó hàm \`unit256_check\` phải được gọi để đảm bảo tính hợp lý. Ngoài ra, trong tương lai gần, chúng tôi sẽ thêm khái niệm \`panic\` vào ngôn ngữ (tương tự như macro[panic](https://doc.rust-lang.org/rust-by-example/std/panic.html)trong rỉ sét) và các lỗi đơn giản như tràn bổ sung sẽ không thể bắt được và tự động lan truyền, điều đó có nghĩa là bạn sẽ không phải sử dụng \`Option\` hoặc \`?\` khi thêm uint.

## Hãy tự mình thử

Bây giờ bạn có thể biên dịch và chạy các chương trình Cairo 1.0 hiện được hỗ trợ! Thực hiện theo các hướng dẫn[](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)này về cách sử dụng lệnh \`cairo-run\`. Lưu ý rằng dưới mui xe,[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), được phát triển bởi[Lambdaclass](https://lambdaclass.com/), được sử dụng để thực thi.

Bạn có thể tìm thêm ví dụ để giúp bạn bắt đầu[tại đây](https://github.com/starkware-libs/cairo2/tree/main/examples). Lưu ý rằng đây chỉ là cái nhìn đầu tiên về quá trình phát triển trình biên dịch; trong những tuần tới, chúng tôi sẽ cải thiện CLI cùng với trình biên dịch.

## Các kế hoạch trong tương lai

Trọng tâm của phiên bản đầu tiên của Trình biên dịch, được lên kế hoạch cho đầu Q1, là hỗ trợ tất cả chức năng hiện có của StarkNet trong Cairo 1.0. Ngoài ra, chúng tôi đang làm việc để mở rộng khả năng của trình biên dịch Cairo 1.0. Trong những tuần tới, bạn có thể mong đợi:

* Khả năng của StarkNet — viết hợp đồng thông minh và sử dụng lệnh gọi hệ thống.
* vòng lặp
* Chức năng thư viện mới
* Máy chủ ngôn ngữ được cải thiện
* Một khái niệm bản địa về khí StarkNet

Hãy chắc chắn để theo dõi và theo dõi tiến trình biên dịch!