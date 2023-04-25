### TL; DR

* **Phí hiện bắt buộc trên Testnet, sắp có trên Mainnet**
* Mô hình nhà máy hợp đồng hiện có thể thực hiện được!
* StarkNet đang giới thiệu các lớp hợp đồng
* Cuộc gọi đại biểu được thay thế bằng cuộc gọi thư viện

### giới thiệu

Chúng tôi rất vui được giới thiệu StarkNet Alpha 0.9.0! Đây là một phiên bản quan trọng trong đó StarkNet thực hiện các bước quan trọng hướng tới sự trưởng thành, với những bổ sung đáng kể cho cả chức năng và thiết kế giao thức.

**Phí là bắt buộc**(hiện chỉ có trên Testnet, cho đến phiên bản 0.9.0 sẽ có trên Mainnet) — bất kỳ L2 thịnh vượng nào cũng phải có hệ thống phí độc lập của riêng mình. Sau khi giới thiệu phí như một tính năng tùy chọn trong phiên bản 0.8.0, giờ đây chúng tôi cảm thấy tự tin khi đưa chúng vào như một thành phần cốt lõi của giao thức và biến chúng thành bắt buộc. Thêm chi tiết dưới đây.

Một thay đổi quan trọng khác ở cấp độ giao thức là việc giới thiệu các Lớp hợp đồng và phân tách lớp/thực thể. Điều này cho phép sử dụng đơn giản hơn chức năng \`delegate_call\` và triển khai từ các hợp đồng hiện có, cho phép mẫu xuất xưởng trên StarkNet.

### Các lớp hợp đồng

Lấy cảm hứng từ lập trình hướng đối tượng, chúng tôi phân biệt giữa mã hợp đồng và việc triển khai nó. Chúng tôi làm như vậy bằng cách tách các hợp đồng thành các lớp và các trường hợp.

Hợp đồng**lớp**là định nghĩa của hợp đồng: Mã byte Cairo, thông tin gợi ý, tên điểm nhập và mọi thứ cần thiết để xác định rõ ràng ngữ nghĩa của nó. Mỗi lớp được xác định bởi hàm băm lớp của nó (tương tự như tên lớp từ các ngôn ngữ OOP).

Hợp đồng**thể hiện**, hay đơn giản là hợp đồng, là hợp đồng được triển khai tương ứng với một số lớp. Lưu ý rằng chỉ các trường hợp hợp đồng mới hoạt động như hợp đồng, nghĩa là có bộ nhớ riêng và có thể gọi được bằng các giao dịch/hợp đồng khác. Một lớp hợp đồng không nhất thiết phải có một phiên bản được triển khai trong StarkNet. Việc giới thiệu các lớp đi kèm với một số thay đổi về giao thức.

#### 'Khai báo' giao dịch

Chúng tôi đang giới thiệu một loại giao dịch mới cho StarkNet: giao dịch['khai báo'](https://docs.starknet.io/docs/Blocks/transactions#declare-transaction), cho phép khai báo loại hợp đồng**.**Không giống như giao dịch \`triển khai\`, giao dịch này không triển khai một thể hiện của lớp đó. Trạng thái của StarkNet sẽ bao gồm danh sách các lớp được khai báo. Các lớp mới có thể được thêm vào thông qua giao dịch \`declare\` mới.

#### Các nhà máy hợp đồng và cuộc gọi hệ thống 'triển khai'.

Khi một lớp được khai báo, nghĩa là giao dịch \`declare\` tương ứng đã được chấp nhận, chúng ta có thể triển khai các thể hiện mới của lớp đó. Để làm được điều này, chúng tôi sử dụng lệnh gọi hệ thống \`deploy\` mới, có các đối số sau:

* Lớp băm
* Muối
* đối số xây dựng

Cuộc gọi tòa nhà 'triển khai' sau đó sẽ triển khai một phiên bản mới của lớp hợp đồng đó, có địa chỉ[](https://docs.starknet.io/docs/Contracts/contract-address)sẽ được xác định bởi ba tham số ở trên và địa chỉ của người triển khai (hợp đồng đã gọi lệnh gọi hệ thống).

Việc bao gồm các triển khai bên trong một giao dịch gọi cho phép chúng tôi định giá và tính phí cho các triển khai mà không cần phải xử lý các triển khai và yêu cầu khác nhau. Để biết thêm thông tin về phí triển khai, hãy xem[tài liệu](https://docs.starknet.io/docs/Fees/fee-mechanism#deployed-contracts).

Tính năng này giới thiệu các nhà máy hợp đồng vào StarkNet, vì bất kỳ hợp đồng nào cũng có thể gọi tòa nhà chọc trời \`triển khai\`, tạo hợp đồng mới.

#### Chuyển từ 'Cuộc gọi đại biểu' sang 'Cuộc gọi thư viện'

Việc giới thiệu các lớp cho phép chúng tôi giải quyết một vấn đề nổi tiếng trong cơ chế gọi ủy quyền của Ethereum: Khi một hợp đồng thực hiện lệnh gọi ủy quyền cho một hợp đồng khác, nó chỉ cần lớp của nó (mã của nó) chứ không phải một phiên bản thực (bộ nhớ của nó). Do đó, việc phải chỉ định một phiên bản hợp đồng cụ thể khi thực hiện cuộc gọi ủy quyền là một cách làm không tốt (thực tế, nó đã dẫn đến một số lỗi trong hợp đồng Ethereum) — chỉ cần chỉ định lớp.

Lệnh gọi hệ thống \`delegate_call\` cũ hiện không còn được dùng nữa (các hợp đồng cũ đã được triển khai sẽ tiếp tục hoạt động, nhưng**hợp đồng sử dụng \`delegate_call\` sẽ không còn biên dịch**) và được thay thế bằng lệnh gọi hệ thống library_call mới. lấy hàm băm lớp (của lớp đã khai báo trước đó) thay vì địa chỉ cá thể hợp đồng. Lưu ý rằng chỉ có một hợp đồng thực tế có liên quan đến cuộc gọi thư viện, vì vậy chúng tôi tránh sự mơ hồ giữa hợp đồng cuộc gọi và hợp đồng triển khai.

#### Điểm cuối API mới

Chúng tôi đã thêm hai điểm cuối mới vào API, cho phép truy xuất dữ liệu liên quan đến lớp:

* \`get_class_by_hash\`: trả về định nghĩa lớp dựa trên hàm băm của lớp
* \`get_class_hash_at\`: trả về hàm băm lớp của hợp đồng đã triển khai với địa chỉ hợp đồng

Lưu ý rằng để lấy trực tiếp loại hợp đồng đã triển khai, thay vì thực hiện hai phương pháp trên, bạn có thể sử dụng điểm cuối \`get_full_contract\` cũ, điểm cuối này sẽ được đổi tên trong các phiên bản sau. Tất cả các điểm cuối được đề cập ở trên cũng có thể sử dụng được từ[StarkNet CLI](https://docs.starknet.io/docs/CLI/commands).

#### lệ phí

Chúng tôi tiếp tục kết hợp các khoản phí vào StarkNet, biến chúng thành bắt buộc (đầu tiên là trên Testnet và sau đó là trên Mainnet) đối với các giao dịch ``[invoke](https://docs.starknet.io/docs/Blocks/transactions#invoke-function)\`. Giao dịch \`declare\` sẽ không yêu cầu phí vào thời điểm này. Tương tự, các giao dịch \`triển khai`` cũng sẽ không yêu cầu phí, tuy nhiên, lưu ý rằng loại giao dịch này rất có thể sẽ không được dùng nữa trong các phiên bản sau.

Một số câu hỏi mở vẫn còn trong lĩnh vực này, những câu hỏi nổi bật nhất là cách tính phí khai báo hợp đồng và triển khai tài khoản StarkNet. Chúng tôi sẽ giải quyết những vấn đề này trong các phiên bản sau.

### Cái gì tiếp theo?

Theo lộ trình mà chúng tôi đã công bố vào</a>

2, chúng tôi cam kết cải thiện hiệu suất của StarkNet nói chung và hiệu suất của trình sắp xếp thứ tự nói riêng, để nhận được phản hồi nhanh hơn của người dùng về các giao dịch của họ. Trong phiên bản tiếp theo, chúng tôi dự định đưa tính năng song song hóa vào trình sắp xếp thứ tự, cho phép sản xuất khối nhanh hơn.</p> 

Phiên bản chính tiếp theo của StarkNet sẽ tập trung vào cấu trúc tài khoản của StarkNet, theo cách tương tự như[ERC-4337](https://medium.com/infinitism/erc-4337-account-abstraction-without-ethereum-protocol-changes-d75c9d94dc4a). Với điều này, chúng tôi sẽ hoàn thiện cách thức hoạt động của các tài khoản StarkNet, thực hiện một bước quan trọng khác hướng tới việc áp dụng hàng loạt!