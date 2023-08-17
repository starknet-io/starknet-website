Đổi mới công nghệ trong chuỗi khối đã phát triển mạnh mẽ trong vài năm qua — STARK, SNARK, EIP-1559, Ethereum Merge — đều là những thành tựu công nghệ to lớn. Tuy nhiên, thiết kế UX và UI đã không theo kịp. Mọi người vẫn bị mắc kẹt với các cụm từ hạt giống 16 từ và việc truy cập vào DeFi mà không có trung gian tập trung vẫn còn quá đáng sợ đối với nhiều người. Để đưa một tỷ người dùng tiếp theo vào Web3, việc cải thiện trải nghiệm tích hợp của người dùng là rất quan trọng.

Như FTX đã chứng minh (và Gemini, Celsius và Mt. Gox), việc duy trì quyền tự giám sát đối với tài sản của một người là cực kỳ quan trọng. Tuy nhiên, cho đến gần đây, ví tự quản lý vẫn còn rắc rối và khó hiểu đối với người dùng bình thường. Hầu hết mọi người quên mật khẩu Web2 của họ hàng tháng; làm cách nào để người dùng giữ cụm từ hạt giống và khóa riêng của họ an toàn mãi mãi?

Nói một cách đơn giản, đó là một cơn ác mộng về bảo mật. Như chúng ta đã thấy vô số lần, một động thái sai lầm, cho dù do những kẻ xấu khởi xướng hoặc sơ suất, có thể dẫn đến tổn thất hàng triệu đô la.

Là điểm tiếp xúc đầu tiên cho người dùng tiền điện tử mới, ví Ethereum phải dễ sử dụng, an toàn và có thể tùy chỉnh để phù hợp với nhu cầu của từng người dùng. Điều này đòi hỏi các nhà phát triển phải tích hợp tính đơn giản của các sản phẩm tài chính Web2 với các tính năng của Web3.

Đây chính xác là những gì trừu tượng hóa tài khoản đạt được.

Tính năng trừu tượng hóa tài khoản cải thiện tính an toàn và bảo mật của các sản phẩm ví tự quản lý bằng cách loại bỏ sự phụ thuộc của người dùng vào khóa cá nhân và làm cho ví dễ lập trình hơn. Với trải nghiệm người dùng được cải thiện này, các ví không giam giữ cuối cùng cũng có thể mở rộng quy mô cho hàng triệu người dùng tiền điện tử chính thống.

Nhưng để hiểu đầy đủ tác động của việc trừu tượng hóa tài khoản, chúng ta phải làm mới bản thân về cách thức hoạt động của tài khoản Ethereum.

### Khái niệm cơ bản về tài khoản Ethereum

Có hai loại tài khoản Ethereum:

1. Tài khoản sở hữu bên ngoài (EOA)
2. Tài khoản hợp đồng (CA)

Hãy chia nhỏ từng phần hơn nữa.

### Tài khoản thuộc sở hữu bên ngoài

Các tài khoản thuộc sở hữu bên ngoài, như MetaMask và Coinbase Wallet, là loại tài khoản điển hình cho người dùng Ethereum. Mỗi EOA bao gồm một khóa riêng và khóa chung, được gọi là cặp khóa.

Tất cả các giao dịch được ủy quyền và ký bằng khóa riêng. Sau khi một giao dịch được ký, EVM sẽ xác minh rằng chữ ký đó hợp lệ bằng cách sử dụng địa chỉ tài khoản của EOA. Logic được mã hóa cứng trong EVM biểu thị rằng tài khoản (đối tượng chứa mã thông báo của bạn) và khóa riêng (người ký) được ghép thành một.

Mất khóa riêng đồng nghĩa với việc mất tiền hoặc thậm chí là mất quyền kiểm soát tài khoản của bạn mãi mãi.

### tài khoản hợp đồng

Trong khi đó, tài khoản hợp đồng, đồng nghĩa với tài khoản trừu tượng, là hợp đồng thông minh được triển khai trên chuỗi khối Ethereum. Các hợp đồng này được kiểm soát bởi logic mã và không yêu cầu khóa riêng. Không giống như EOA, tài khoản hợp đồng không thể bắt đầu giao dịch. Thay vào đó, các giao dịch của họ được kích hoạt bởi các hướng dẫn từ EOA.

### Tại sao trừu tượng hóa tài khoản lại quan trọng

Việc trừu tượng hóa tài khoản đòi hỏi phải trừu tượng hóa logic ủy quyền được mã hóa cứng khỏi EOA, biến mỗi tài khoản thành một hợp đồng thông minh có thể lập trình có thể được điều chỉnh để đáp ứng nhu cầu của bất kỳ cá nhân nào.

Theo giải thích của người đồng sáng lập Argent và Giám đốc Khoa học Julien Niset trong sự kiện[Stark @ Home](https://www.crowdcast.io/e/7olimxqv)gần đây, logic ủy quyền linh hoạt này cho phép các nhà phát triển tự do thử nghiệm với các tính năng tài khoản như…

**Người ký phần cứng:**Sử dụng vùng an toàn của iPhone hoặc Android để biến bất kỳ điện thoại thông minh nào thành ví phần cứng. Từ đó, người dùng có thể xác minh các giao dịch bằng dữ liệu sinh trắc học như dấu vân tay hoặc Apple Face ID. Chúng tôi đã bắt đầu thấy các ví tự quản lý như Braavos[triển khai tính năng này.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Cho phép người dùng thanh toán phí gas bằng bất kỳ mã thông báo nào hoặc thậm chí có cơ chế do bên thứ ba thiết kế thanh toán cho các giao dịch.

**Khôi phục xã hội:**Trong trường hợp khóa riêng tư bị mất hoặc bị xâm phạm, người dùng có thể ủy quyền khóa mới với tư cách là chủ sở hữu ví hợp pháp. Điều này có thể bao gồm nhiều phương pháp khôi phục thông qua các địa chỉ liên hệ đáng tin cậy, ví phần cứng hoặc dịch vụ của bên thứ ba. Ý tưởng là làm cho việc khôi phục quyền truy cập vào tài khoản của bạn dễ dàng như khôi phục mật khẩu tài khoản ngân hàng của bạn qua email.

**Xác thực đa yếu tố:**Tương tự như các phương pháp Web2 2FA phổ biến, người dùng có thể thiết lập hai (hoặc nhiều) phương thức xác thực cho ví tiền điện tử của họ, trong đó giao dịch chỉ được ký sau khi người dùng xác nhận phê duyệt thông qua tùy chọn thứ hai như email hoặc SMS. Người dùng cũng có thể thiết lập giới hạn chuyển khoản hàng ngày hoặc danh sách địa chỉ tài khoản mà ví tự động bị chặn tương tác.

**Chữ ký kháng lượng tử và tiết kiệm gas:**Sơ đồ chữ ký hiện tại của Ethereum, ECDSA, được tính toán rộng rãi (đọc là: phí gas cao hơn) và có thể bị máy tính lượng tử phá vỡ. Thông qua trừu tượng hóa chữ ký, các hợp đồng tài khoản khác nhau sử dụng các lược đồ chữ ký an toàn lượng tử và hiệu quả hơn. StarkNet sử dụng đường cong thân thiện với STARK độc quyền của riêng mình.

Các tính năng này không chỉ cung cấp cho người dùng khả năng bảo mật cao hơn và linh hoạt hơn mà quan trọng hơn là mang lại trải nghiệm người dùng tốt hơn gấp****.

Được Vitalik Buterin liệt kê là “ước mơ từ lâu” đối với cộng đồng nhà phát triển Ethereum, những đổi mới xung quanh việc trừu tượng hóa tài khoản, chủ yếu là EIP-2938 và EIP-3074, đã bùng nổ kể từ năm 2020. Tuy nhiên, cả hai đều cần phải đánh đổi xung quanh bảo mật và triển khai. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), sự phát triển hứa hẹn nhất cho đến nay, đề xuất một phiên bản trừu tượng hóa tài khoản mà không yêu cầu thay đổi giao thức Ethereum.

### **Tóm tắt tài khoản và Starknet**

Không giống như Bitcoin và Ethereum đang trang bị thêm các giao thức hiện tại của họ để hỗ trợ trừu tượng hóa tài khoản,[StarkNet](https://starkware.co/starknet/)đã triển khai trừu tượng hóa tài khoản kể từ ngày đầu tiên. Khi được kết hợp với khả năng mở rộng và khả năng của bằng chứng STARK của chúng tôi, tiềm năng đổi mới ví là vô hạn. Đây là lý do tại sao thế hệ ví tự quản lý tiếp theo, như Argent và Braavos, hiện đang được xây dựng trên mạng của chúng tôi.

Cách tiếp cận của StarkNet tương tự như EIP-4337,[thừa nhận rằng việc trừu tượng hóa tài khoản hoàn chỉnh](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)vẫn sẽ dẫn đến UX khó hiểu và[có thể mở ra cánh cửa](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)cho các cuộc tấn công vào trình sắp xếp thứ tự. Thay vào đó, nó nhằm mục đích đạt được cả trừu tượng hóa chữ ký và trừu tượng hóa thanh toán bằng cách tương hỗ hóa một số cơ sở hạ tầng bắt buộc trong và ngoài chuỗi.

Và mặc dù vẫn còn nhiều việc phải làm, nhưng tính trừu tượng của tài khoản đang đạt được sức hút vượt ra ngoài một nhóm nhỏ những người bản địa về tiền điện tử. Vào tháng 12,[Visa đã đề xuất ý tưởng](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)về việc sử dụng tính năng tóm tắt tài khoản để thiết lập thanh toán định kỳ tự động trên StarkNet. Sử dụng tài khoản có thể ủy quyền, người dùng có thể cấp quyền bắt đầu thanh toán cho hợp đồng thông minh được phê duyệt trước. Từ đó, hợp đồng thông minh sẽ được lập trình để khấu trừ số tiền thanh toán đã đặt vào một ngày cụ thể, trong một khoảng thời gian nhất định. Mặc dù Visa chưa tiết lộ kế hoạch cho các dịch vụ của riêng mình, nhưng chỉ riêng sự quan tâm đã nói lên nhiều điều và có thể báo trước một thế giới nơi các nền tảng đăng ký công nghệ lớn như Netflix và Spotify có thể chấp nhận tiền điện tử.

Còn tương lai nắm giữ những gì thì chỉ có thời gian mới trả lời được. Nhưng có một điều chắc chắn. Bằng cách làm cho ví dễ sử dụng và an toàn hơn, tính trừu tượng của tài khoản sẽ đóng vai trò là chất xúc tác mạnh mẽ để ví blockchain tự quản lý mở rộng quy mô cho hàng triệu người dùng tiền điện tử chính thống. Chúng tôi sẽ tiếp tục xây dựng trong khi chờ đợi.