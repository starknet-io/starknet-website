### TL; DR

* Chúng tôi đang phát hành Cairo 1.0-alpha.2, mang đến nhiều tính năng mới cho ngôn ngữ
* Hiện có thể triển khai hợp đồng ERC20
* Những tính năng ngôn ngữ mới này sẽ được áp dụng trong phiên bản StarkNet-v0.11.0 sắp tới

### Các tính năng mới!

Cairo 1.0 đang tiếp tục tốc độ cải tiến nhanh chóng. Bản phát hành hôm nay giới thiệu, trong số những thứ khác, tất cả các tính năng cần thiết để viết hợp đồng ERC-20.

Để đề cập đến một số tính năng mới:

* từ điển
* Sự kiện trong hợp đồng
* Ánh xạ các biến lưu trữ
* hỗ trợ đặc điểm
* Loại suy luận
* phương pháp

Xem danh sách đầy đủ trong kho lưu trữ GitHub [.](https://github.com/starkware-libs/cairo)

Chúng ta hãy xem một ví dụ về hợp đồng ERC20 (tất nhiên, ví dụ cụ thể đầy đủ là trên[GitHub](https://github.com/starkware-libs/cairo/blob/main/crates/cairo-lang-starknet/test_data/erc20.cairo)) để minh họa trường hợp sử dụng của một sự kiện và ánh xạ trong bộ lưu trữ:

![](/assets/0_i4ch5-4rxxal4rkt.png)

### Nhảy xuống nước!

Chúng tôi tiếp tục làm việc trên hai vectơ song song:

1. Phát triển Cairo 1.0 ở tốc độ tối đa để tương thích đầy đủ tính năng với Cairo cũ.
2. Phát triển Starknet v0.11.0 sẽ hỗ trợ các hợp đồng được viết bằng Cairo 1.0

Trong thời gian chờ đợi, chúng tôi khuyến khích các nhà phát triển bắt đầu viết bằng Cairo 1.0 và làm quen với nó.

Đối với bất kỳ câu hỏi nào — bạn có thể sử dụng Cairo 1.0 Discord[kênh](https://discord.com/channels/793094838509764618/1065544063245365288).

Đối với bất kỳ đề xuất hoặc phản hồi nào — vui lòng mở số[số](https://github.com/starkware-libs/cairo/issues)trong kho lưu trữ Cairo.