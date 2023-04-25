Khả năng mở rộng chuỗi khối luôn là một chủ đề nóng. Gần như mọi mạng blockchain đều chào mời số lượng giao dịch mỗi giây (TPS) cao như một điểm bán hàng. Tuy nhiên, TPS không phải là thước đo hợp lệ để so sánh các mạng blockchain với — khiến việc đánh giá hiệu suất tương đối của chúng trở thành một thách thức. Hơn nữa, số lượng TPS lớn thường phải trả giá — điều này đặt ra câu hỏi: các mạng này có thực sự mở rộng quy mô hay chúng chỉ tăng thông lượng?

Vì vậy, hãy xem xét cách xác định khả năng mở rộng, sự cân bằng nào được thực hiện để đạt được nó và tại sao Bản tổng hợp hiệu lực là giải pháp khả năng mở rộng cuối cùng.

### Không phải tất cả các giao dịch đều được thực hiện bình đẳng

Đầu tiên, chúng ta cần thiết lập khẳng định của mình rằng số liệu đơn giản và thuận tiện của TPS không phải là thước đo chính xác về khả năng mở rộng.

Để đền bù cho các nút thực hiện giao dịch (và để ngăn chặn người dùng spam mạng bằng tính toán không cần thiết), các chuỗi khối tính phí tỷ lệ thuận với gánh nặng tính toán áp dụng cho chuỗi khối. Trong Ethereum, độ phức tạp của gánh nặng tính toán được đo bằng*gas.*Bởi vì gas là một thước đo rất thuận tiện về độ phức tạp của giao dịch, thuật ngữ này sẽ được sử dụng trong suốt bài viết này cho cả các chuỗi khối không phải Ethereum, mặc dù nó thường dành riêng cho Ethereum.

Các giao dịch khác nhau đáng kể về độ phức tạp và do đó, chúng tiêu thụ bao nhiêu gas. Bitcoin, đồng tiền tiên phong của các giao dịch ngang hàng không tin cậy, chỉ hỗ trợ tập lệnh Bitcoin thô sơ. Những lần chuyển đơn giản này từ địa chỉ này sang địa chỉ khác sử dụng ít gas. Ngược lại, các chuỗi hợp đồng thông minh như Ethereum hoặc Solana hỗ trợ một máy ảo và các ngôn ngữ lập trình hoàn chỉnh Turing cho phép thực hiện các giao dịch phức tạp hơn nhiều. Do đó, các dApp như Uniswap cần nhiều gas hơn.

Đây là lý do tại sao không có ý nghĩa gì khi so sánh TPS của các chuỗi khối khác nhau. Thay vào đó, những gì chúng ta nên so sánh là khả năng tính toán — hoặc thông lượng.

Tất cả các Chuỗi khối đều có kích thước khối (có thể thay đổi) và thời gian tạo khối để xác định số lượng*đơn vị tính toán*có thể được xử lý trên mỗi khối và tốc độ**một khối mới có thể được thêm vào. Cùng với nhau, hai biến này xác định*thông lượng*của một chuỗi khối.

### Điều gì hạn chế khả năng mở rộng?

Các chuỗi khối cố gắng trở thành các mạng toàn diện, phi tập trung tối đa. Để đạt được điều này, hai thuộc tính cơ bản phải được kiểm tra.

#### **1. yêu cầu phần cứng**

Sự phân cấp của mạng chuỗi khối được xác định bởi khả năng của nút yếu nhất trong mạng để xác minh chuỗi khối và giữ trạng thái của nó. Do đó, chi phí để chạy một nút (phần cứng, băng thông và lưu trữ) nên được giữ ở mức thấp nhất có thể để cho phép càng nhiều cá nhân càng tốt trở thành người tham gia không được phép trong mạng không tin cậy.

#### 2**.**Tăng trưởng Nhà nước

Tăng trưởng trạng thái đề cập đến việc blockchain phát triển nhanh như thế nào. Thông lượng mà một chuỗi khối cho phép xảy ra trên mỗi đơn vị thời gian càng nhiều thì chuỗi khối đó càng phát triển nhanh hơn. Các nút đầy đủ lưu trữ lịch sử của mạng và chúng phải có khả năng xác thực trạng thái của mạng. Trạng thái của Ethereum được lưu trữ và tham chiếu bằng cách sử dụng các cấu trúc hiệu quả như cây cối. Khi trạng thái phát triển, các lá và nhánh mới được thêm vào nó, khiến việc thực hiện một số hành động nhất định trở nên phức tạp và tốn thời gian hơn bao giờ hết. Khi chuỗi phát triển về quy mô, nó sẽ làm xấu đi khả năng thực thi trong trường hợp xấu nhất của các nút, dẫn đến thời gian xác thực các khối mới ngày càng dài. Theo thời gian, điều này cũng làm tăng tổng thời gian cần thiết để một nút đầy đủ đồng bộ hóa.

### Tác động bất lợi của việc tăng thông lượng

#### 1. Đếm nút

Các yêu cầu tối thiểu để chạy một nút và số lượng nút là:

* Bitcoin¹: Dung lượng ổ cứng 350 GB, kết nối 5 Mbit/s, RAM 1 GB, CPU >1 Ghz. **Số nút: ~10.000**
* Ethereum²: Dung lượng đĩa SSD 500GB+, kết nối 25 Mbit/s, RAM 4–8GB, CPU 2–4 lõi. **Số nút: ~6.000**
* Solana³: Dung lượng đĩa 1,5TB+ SSD, kết nối 300 Mbit/s, RAM 128GB CPU 12+ lõi. **Số nút: ~1.200**

Lưu ý rằng các yêu cầu về CPU, băng thông và lưu trữ đối với các nút cần thiết cho thông lượng của chuỗi khối càng lớn thì càng có ít nút trên mạng — dẫn đến khả năng phân cấp yếu hơn và mạng ít toàn diện hơn.

#### 2. Đã đến lúc đồng bộ hóa một nút đầy đủ

Khi chạy một nút lần đầu tiên, nó phải đồng bộ hóa với tất cả các nút hiện có, tải xuống và xác thực, trạng thái của mạng từ khối gốc đến đầu chuỗi. Quá trình này phải nhanh và hiệu quả nhất có thể để cho phép bất kỳ ai đóng vai trò là người tham gia giao thức mà không được phép.

Lấy[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)và[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)của Jameson Lopp làm chỉ báo, Bảng 1 so sánh thời gian cần thiết để đồng bộ hóa một nút đầy đủ của Bitcoin so với Ethereum so với Solana trên PC cấp người tiêu dùng trung bình.

![Bảng 1. So sánh thông lượng chuỗi khối và đồng bộ hóa nút](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "Bảng 1. So sánh thông lượng chuỗi khối và đồng bộ hóa nút")

Bảng 1 chứng minh rằng việc tăng thông lượng dẫn đến thời gian đồng bộ hóa lâu hơn vì ngày càng nhiều dữ liệu cần được xử lý và lưu trữ.

Mặc dù các cải tiến đối với phần mềm nút liên tục được thực hiện để giảm thiểu thách thức của chuỗi khối đang phát triển (giảm dung lượng đĩa, tốc độ đồng bộ hóa nhanh hơn, khả năng phục hồi sự cố mạnh hơn, mô đun hóa một số thành phần, v.v.), các nút rõ ràng vẫn không thể theo kịp tốc độ tăng đến thông lượng.

### Khả năng mở rộng nên được xác định như thế nào?

Khả năng mở rộng là thuật ngữ bị xuyên tạc nhiều nhất trong không gian chuỗi khối. Mặc dù việc tăng thông lượng là mong muốn, nhưng đó chỉ là một phần của bài toán.

***Khả năng mở rộng**có nghĩa là có thêm**giao dịch**cho**phần cứng giống nhau**.*

Vì lý do đó, khả năng mở rộng có thể được chia thành hai loại.

#### khả năng mở rộng trình tự

Trình tự mô tả hành động đặt hàng và xử lý các giao dịch trong mạng. Như đã được thiết lập trước đây, bất kỳ chuỗi khối nào cũng có thể tăng thông lượng của nó một cách đáng kể bằng cách tăng kích thước khối và rút ngắn thời gian tạo khối của nó — cho đến khi tác động tiêu cực đến sự phân cấp của nó được coi là quá đáng kể. Tuy nhiên, việc điều chỉnh các tham số đơn giản này không mang lại những cải tiến cần thiết. Về lý thuyết, EVM của Ethereum có thể[xử lý tới ~2.000 TPS](https://twitter.com/dankrad/status/1459607325854121989), không đủ để phục vụ nhu cầu không gian khối dài hạn. Để mở rộng quy mô trình tự, Solana đã thực hiện một số đổi mới ấn tượng: tận dụng môi trường thực thi có thể song song hóa và cơ chế đồng thuận thông minh, cho phép thông lượng hiệu quả hơn nhiều. Tuy nhiên, bất chấp những cải tiến của nó, nó không đủ và cũng không thể mở rộng. Khi Solana tăng thông lượng, chi phí phần cứng để chạy một nút và xử lý các giao dịch cũng tăng lên.

#### khả năng mở rộng xác minh

*Khả năng mở rộng xác minh mô tả các phương pháp giúp tăng thông lượng mà không gây gánh nặng cho các nút với chi phí phần cứng ngày càng tăng.*Cụ thể, nó đề cập đến những đổi mới về mật mã như Bằng chứng về tính hợp lệ. Chúng là lý do tại sao Bản tổng hợp hiệu lực có thể mở rộng quy mô chuỗi khối một cách bền vững.

**Rollup hiệu lực là gì?**

Bản tổng hợp hiệu lực (còn được gọi là “ZK-Rollups”) di chuyển tính toán và lưu trữ trạng thái ngoài chuỗi nhưng giữ một lượng nhỏ dữ liệu nhất định trên chuỗi. Một hợp đồng thông minh trên chuỗi khối cơ bản duy trì trạng thái gốc của Rollup. Trong Rollup, một loạt các giao dịch được nén ở mức độ cao, cùng với trạng thái gốc hiện tại, được gửi đến một Prover ngoài chuỗi. Prover tính toán các giao dịch, tạo bằng chứng hợp lệ của kết quả và gốc trạng thái mới, đồng thời gửi nó đến Trình xác minh trên chuỗi. Người xác minh xác minh bằng chứng hợp lệ và hợp đồng thông minh duy trì trạng thái của Rollup sẽ cập nhật nó sang trạng thái mới do Người chứng minh cung cấp.

**Làm thế nào để các Rollup hợp lệ mở rộng quy mô với cùng yêu cầu phần cứng?**

Mặc dù các Prover yêu cầu phần cứng cao cấp, nhưng chúng không ảnh hưởng đến tính phi tập trung của chuỗi khối; bởi vì tính hợp lệ của các giao dịch được đảm bảo bằng các bằng chứng có thể kiểm chứng về mặt toán học.

Điều quan trọng là các yêu cầu để xác minh bằng chứng. Do dữ liệu liên quan được nén ở mức độ cao và phần lớn được trừu tượng hóa thông qua tính toán nên tác động của nó đối với các nút của chuỗi khối cơ bản là tối thiểu*.*

Trình xác minh (các nút Ethereum) không yêu cầu phần cứng cao cấp và kích thước của lô không làm tăng yêu cầu phần cứng. Chỉ các chuyển đổi trạng thái và một lượng nhỏ dữ liệu cuộc gọi cần được xử lý và lưu trữ bởi các nút. Điều này cho phép tất cả các nút Ethereum xác minh các đợt Rollup hợp lệ bằng phần cứng hiện có của chúng.

**Giao dịch càng nhiều càng rẻ**

Trong các chuỗi khối truyền thống, càng nhiều giao dịch xảy ra, mọi người càng tốn kém hơn khi không gian khối được lấp đầy — và người dùng cần trả giá cao hơn nhau trong một thị trường phí để có được các giao dịch của họ.

Đối với Tổng số hiệu lực, động này bị đảo ngược. Xác minh một loạt giao dịch trên Ethereum có một chi phí nhất định. Khi số lượng giao dịch trong một đợt tăng lên, chi phí để xác minh lô đó tăng với tốc độ chậm hơn theo cấp số nhân. Việc thêm nhiều giao dịch hơn vào một lô dẫn đến phí giao dịch rẻ hơn mặc dù chi phí xác minh lô tăng lên — bởi vì nó được phân bổ dần trong số tất cả các giao dịch trong lô. Tổng số hiệu lực muốn có càng nhiều giao dịch càng tốt trong một đợt — để phí xác minh có thể được chia sẻ giữa tất cả người dùng. Khi kích thước lô tăng lên vô hạn, phí khấu hao trên mỗi giao dịch hội tụ về 0, nghĩa là càng nhiều giao dịch trên một Rollup hiệu lực, nó càng rẻ cho mọi người.

dYdX, một dApp được cung cấp bởi Bản tổng hợp hiệu lực, thường thấy kích thước lô trên 12.000 giao dịch. So sánh mức tiêu thụ gas của cùng một giao dịch trên Mainnet so với trên Rollup hiệu lực minh họa lợi ích về khả năng mở rộng:

Giải quyết giao dịch dYdX trên Ethereum Mainnet:**200.000 gas**

Giải quyết giao dịch dYdX trên StarkEx:**<500 gas**

Một cách khác để xem xét: Chi phí chính của Rollup hiệu lực tỷ lệ tuyến tính với số lượng người dùng trong cùng một đợt.

#### Tại sao Bản tổng hợp lạc quan không có khả năng mở rộng như người ta có thể nghĩ

Về lý thuyết, Tổng số lạc quan cung cấp các lợi ích về khả năng mở rộng gần giống như Tổng số hợp lệ. Nhưng có một điểm khác biệt quan trọng: Tổng số lạc quan tối ưu hóa cho trường hợp trung bình, trong khi Tổng số hiệu lực tối ưu hóa cho trường hợp xấu nhất. Bởi vì các hệ thống chuỗi khối hoạt động trong các điều kiện cực kỳ bất lợi, tối ưu hóa cho trường hợp xấu nhất là cách duy nhất để đạt được bảo mật.

Trong trường hợp xấu nhất của Bản tổng hợp lạc quan, các giao dịch của người dùng sẽ không được kiểm tra bởi những người kiểm tra gian lận. Vì vậy, để chống gian lận, người dùng phải đồng bộ hóa nút đầy đủ Ethereum, nút đầy đủ L2 và tự tính toán giao dịch đáng ngờ.

Trong trường hợp xấu nhất của Rollup hợp lệ, người dùng chỉ cần đồng bộ hóa một nút đầy đủ của Ethereum để xác minh bằng chứng hợp lệ, tiết kiệm cho họ gánh nặng tính toán.

Trái ngược với Rollup hợp lệ, chi phí của Rollup lạc quan tỷ lệ tuyến tính với số lượng giao dịch thay vì số lượng người dùng, khiến chúng đắt hơn.

### Mảnh ghép cuối cùng — Truy cập không cần cấp phép vào trạng thái Rollup

Để đảm bảo tính hợp lệ của các giao dịch, người dùng chỉ cần chạy một nút Ethereum. Tuy nhiên, người dùng và nhà phát triển có thể muốn xem và chạy trạng thái cũng như quá trình thực thi Tổng số cho các mục đích khác nhau. Nút L2 lập chỉ mục**đáp ứng nhu cầu này một cách hoàn hảo. Nó không chỉ cho phép người dùng xem các giao dịch trong mạng mà còn là một phần cơ sở hạ tầng quan trọng cần thiết để cơ sở hạ tầng hệ sinh thái hoạt động. Những người lập chỉ mục như The Graph, Alchemy, Infura; Các mạng của Oracle như Chainlink và trình khám phá khối, tất cả những mạng này đều được hỗ trợ đầy đủ bởi một nút L2 lập chỉ mục, không được phép.

### Phần kết luận

Nhiều cách tiếp cận để giải quyết khả năng mở rộng của chuỗi khối tập trung sai vào việc tăng thông lượng**. Tuy nhiên, điều này bỏ qua tác động của thông lượng đối với các nút: yêu cầu phần cứng ngày càng tăng để xử lý các khối và lưu trữ lịch sử mạng cũng như cách điều đó ngăn cản sự phân cấp của mạng.

Với sự ra đời của mật mã chứng minh tính hợp lệ, một chuỗi khối có thể đạt được**khả năng mở rộng thực sự**mà không gây gánh nặng cho các nút với chi phí ngày càng tăng và cho phép phân cấp rộng rãi. Giờ đây, có thể thực hiện nhiều giao dịch hơn với các tính toán mạnh mẽ và phức tạp hơn cho cùng một phần cứng, đảo ngược tình thế tiến thoái lưỡng nan của thị trường phí trong quy trình — càng nhiều hoạt động trên Bản tổng hợp hiệu lực thì càng rẻ!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)và[Louis Guthmann](https://twitter.com/GuthL)

¹ Từ<https://bitcoin.org/en/bitcoin-core/features/requirements>

² Từ<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ Từ<https://docs.solana.com/running-validator/validator-reqs>

⁴ Được đơn giản hóa và điều chỉnh mạnh mẽ cho các kích thước khối động trung bình