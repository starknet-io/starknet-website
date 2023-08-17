[bài đăng](https://medium.com/@starkware/part-1-starknet-sovereignty-a-decentralization-proposal-bca3e98a01ef)trước đây của chúng tôi đã giải thích StarkNet là gì, nó đang dần dần được phân cấp như thế nào và cung cấp bản tóm tắt về hai cơ chế phân cấp của nó. Bài đăng này thảo luận về quy trình phân cấp StarkNet, vai trò của Tổ chức StarkNet và nhu cầu về mã thông báo gốc mới cho StarkNet. Cuối cùng, nó thảo luận về những cân nhắc bổ sung đối với việc quản trị của StarkNet trong tương lai.

### Nguyên tắc phân quyền

[Công nghệ STARK](https://eprint.iacr.org/2018/046.pdf)đã trưởng thành và an toàn, nhưng cho đến nay nó mới được triển khai và sử dụng chủ yếu dưới dạng dịch vụ tập trung trên Ethereum ([StarkEx](https://starkware.co/starkex/)) và phiên bản Alpha của dịch vụ phi tập trung ([StarkNet](https://starkware.co/starknet/)). StarkNet nên có sẵn dưới dạng hàng hóa công cộng thực sự không cần cấp phép, giống như Ethereum hoặc Internet. Vì vậy, chúng tôi cam kết đẩy mạnh hơn nữa tính phi tập trung của StarkNet và bốn nguyên tắc sau để hướng dẫn thay đổi:

**Sức sống.**StarkNet sẽ không dựa vào một công ty duy nhất làm nhà điều hành. Các công ty có thể ngừng tồn tại hoặc có thể quyết định ngừng phục vụ mạng. Sau khi phân cấp, các tình huống như vậy sẽ không làm sập StarkNet.

**Chống kiểm duyệt.**Về mặt lý thuyết, một công ty có thể quyết định hoặc bị buộc phải kiểm duyệt các giao dịch và hợp đồng thông minh cụ thể trong khi thực hiện các giao dịch khác. StarkNet sẽ sử dụng một mô hình phi tập trung để bảo vệ chống lại kịch bản như vậy.

**Minh bạch.**Nâng cấp và bảo trì phần mềm là một phần tất yếu của bất kỳ dịch vụ phi tập trung nào. Những hành động như vậy phải được thảo luận một cách minh bạch để cộng đồng được thông báo và kiểm soát công nghệ. Cộng đồng người dùng, nhà điều hành và nhà phát triển StarkNet lớn hơn phải làm việc cùng nhau để xác định các bản nâng cấp và bảo trì thông qua một quy trình minh bạch, công bằng, có sự tham gia và toàn diện.

**Sáng tạo.**StarkNet phải cho phép bất kỳ nhà phát triển nào tham gia xây dựng cơ sở hạ tầng và ứng dụng cốt lõi của mình, để ngăn chặn độc quyền và tăng cường sử dụng các chuỗi khối một cách sáng tạo và có lợi cho xã hội trên quy mô lớn.

Phi tập trung hóa là một vấn đề khó khăn, không nên tiếp cận một cách vội vàng. Đề xuất quản trị của StarkNet, được chia sẻ ở đây, có thể sẽ phát triển và thay đổi theo thời gian. Những gì tiếp theo chỉ là lần lặp lại đầu tiên của nó.

### Sự thành lập

Quỹ sẽ là một tổ chức phi lợi nhuận hoạt động theo sứ mệnh và sẽ được cấp Token StarkNet (xem[bài đăng tiếp theo](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)). Chúng tôi dự đoán nhiệm vụ của Tổ chức sẽ là duy trì StarkNet như một hàng hóa công cộng. StarkNet là cơ sở hạ tầng không cần cấp phép nên có sẵn cho tất cả mọi người. Nó phải được duy trì tốt để được an toàn và hiệu quả cho việc sử dụng công cộng. Nó cũng không được phân biệt đối xử giữa người dùng, nhà điều hành và nhà phát triển của nó. Quỹ sẽ được dành riêng để thúc đẩy các mục tiêu phân cấp được nêu ở trên: tính sống động, khả năng chống kiểm duyệt, tính minh bạch và tính sáng tạo.

Khả năng tồn tại và khả năng chống kiểm duyệt của StarkNet đạt được tốt nhất nhờ sự đồng thuận phi tập trung và không được phép thông qua cuộc bầu chọn người lãnh đạo bằng chứng cổ phần để sắp xếp và chứng minh các giao dịch được nén bởi STARK. Mặc dù cơ chế đó được tự động hóa, nhưng nó dựa vào phần mềm giao thức hoạt động tốt được điều hành bởi các nút trên mạng cũng như tính hợp lệ và khả năng hoạt động liên tục của chuỗi khối Ethereum cơ bản. Do đó, Tổ chức cũng sẽ hoạt động như một nguồn tài nguyên cho sự phát triển liên tục, tài liệu và xuất bản phần mềm giao thức đó, đặc biệt là khi nó liên quan đến sửa lỗi và cải thiện hiệu quả.

Ngoài việc bảo trì định kỳ, chúng tôi dự đoán các cuộc tranh luận sôi nổi trong cộng đồng về các thay đổi tính năng hoặc các nâng cấp cơ bản khác đối với giao thức. Điều này là không thể tránh khỏi trong các hệ thống không được phép, bằng chứng lịch sử là cuộc tranh luận về kích thước khối của Bitcoin, sự hợp nhất bằng chứng cổ phần của Ethereum và nhiều ví dụ khác trong hệ sinh thái tiền điện tử. Các quyết định phát triển phần mềm này không chỉ mang tính toán học khách quan và đạt được hiệu quả, mà còn liên quan đến các đánh giá giá trị chủ quan và đánh đổi tính năng. Trong nhiều cộng đồng blockchain, các quyết định này được đưa ra một cách không chính thức mà không có bất kỳ quy tắc tranh luận rõ ràng hoặc quy trình ra quyết định nào. Ngay cả việc không đưa ra quyết định cũng là một quyết định có lợi cho hiện trạng. Để tránh những vấn đề này, nhiệm vụ của Quỹ cũng sẽ bao gồm phát triển, thử nghiệm và triển khai các quy trình ra quyết định của cộng đồng để giải quyết các câu hỏi công nghệ thiết yếu. Cơ chế đó sẽ là trung tâm của các cuộc thảo luận về cập nhật giao thức, giải quyết tranh chấp và tài trợ hàng hóa công cộng. Quỹ sẽ thúc đẩy tính minh bạch bằng cách phân phối thông tin cần thiết để đưa ra các quyết định này và sẽ duy trì kho lưu trữ thông tin đó để tham khảo trong tương lai.

### Tại sao mã thông báo?

StarkNet luôn được hình dung là một giao thức được điều hành bởi cộng đồng, tuy nhiên vẫn chưa có cách rõ ràng nào để xác định chính xác ai bao gồm cộng đồng này. *Mã thông báo sẽ cho phép những người ủng hộ cộng đồng thực hiện công việc góp phần vào sự thành công của hệ sinh thái đóng vai trò quản trị hệ sinh thái đó.*

Ngoài ra, một dịch vụ công bằng, cởi mở và chống kiểm duyệt chỉ có thể thực hiện được nếu một số bên xuất hiện để cạnh tranh để thực hiện công việc hỗ trợ dịch vụ phi tập trung và điều đó chỉ có thể được đảm bảo nếu những người lao động đó được trả công cho vai trò là người điều hành mạng của họ .

Do đó, việc bao gồm các mã thông báo như một phần của công nghệ mạng như StarkNet là cần thiết. Và mặc dù có thể đạt được khả năng chống kiểm duyệt thanh toán bằng cách sử dụng mã thông báo không bản địa hiện có, chẳng hạn như Bitcoin hoặc Ether (ETH), chúng tôi tin rằng cách tiếp cận như vậy sẽ thất bại theo thời gian trong việc cung cấp cho người dùng mạng một cộng đồng riêng biệt và tiếng nói trong các quyết định.

Mã thông báo gốc thưởng cho các thành viên của cộng đồng phát triển mạng sẽ thúc đẩy hệ sinh thái đến một mức độ mà việc sử dụng mã thông báo không phải gốc sẽ không. Ngoài ra, nếu mã thông báo không có nguồn gốc, các cú sốc kinh tế từ các quyết định được đưa ra trong các hệ sinh thái khác có thể ảnh hưởng đến dịch vụ của StarkNet cũng như người dùng và nhà cung cấp của nó.

### Mã thông báo sẽ được sử dụng để làm gì?

Mã thông báo sẽ là cơ chế vận hành mạng (phí), duy trì và bảo mật mạng (sự tham gia đồng thuận) cũng như quyết định các giá trị và mục tiêu chiến lược của mạng (quản trị).

**Phí giao dịch:**Hiện tại, phí trong StarkNet được thanh toán bằng Ether (ETH). Nhưng sau này, chúng tôi dự đoán các khoản phí sẽ được thanh toán độc quyền bằng Mã thông báo StarkNet gốc. Để hỗ trợ trải nghiệm người dùng tốt, các cơ chế trên chuỗi tự động và phi tập trung sẽ cho phép người dùng thanh toán phí bằng ETH.

**Đặt cược:**Một số dịch vụ quan trọng đối với tính sống động và tính bảo mật của StarkNet có thể yêu cầu đặt cược Mã thông báo StarkNet. Các dịch vụ này có thể bao gồm sắp xếp trình tự, đạt được sự đồng thuận L2 tạm thời trước khi đạt được kết quả cuối cùng của L1, các dịch vụ chứng minh STARK và cung cấp tính khả dụng của dữ liệu, đó là một vài ví dụ. Chúng tôi hy vọng các dịch vụ này sẽ được phân cấp vào năm 2023.

**Quản trị:**Các đề xuất cải thiện StarkNet sẽ yêu cầu ngưỡng hỗ trợ mã thông báo tối thiểu, sẽ được xác định sau. Bỏ phiếu, trực tiếp hoặc thông qua ủy quyền, sẽ được yêu cầu đối với tất cả các thay đổi đối với giao thức cần thiết cho sự hoạt động, bảo mật và bảo trì của StarkNet. Ví dụ: tất cả các bản cập nhật lớn cho Hệ điều hành StarkNet sẽ yêu cầu sự chấp thuận của chủ sở hữu mã thông báo.

### Những phản ánh cuối cùng về quản trị

Các cơ chế quản trị phi tập trung vẫn còn ở giai đoạn sơ khai và không có dự án nào trong không gian này cung cấp cho chúng tôi một mô hình mô phỏng hấp dẫn. Bỏ phiếu thường xuyên và trực tiếp bởi tất cả những người nắm giữ mã thông báo có phải là con đường tốt nhất không? Tương đối đơn giản để thiết kế điều này như một cơ chế công nghệ, nhưng nó có thể khó sử dụng và có thể đặc quyền không công bằng cho những người nắm giữ một số lượng lớn mã thông báo, thay vì những người tích cực sử dụng mạng.

Khi xem xét cách tiếp cận tốt nhất, chúng tôi khuyên bạn nên xem xét các biện pháp kiểm tra và cân bằng giữa một số cấu trúc riêng biệt có thẩm quyền từ cộng đồng những người nắm giữ Mã thông báo StarkNet.

Chúng tôi cũng khuyên những người nắm giữ Mã thông báo StarkNet nên tận dụng tốt kiến thức chuyên môn của các nhà phát triển cốt lõi. Trong tất cả các hệ sinh thái blockchain, các nhà phát triển cốt lõi đóng vai trò trung tâm trong việc bảo mật, duy trì và phát triển công nghệ cơ bản. Do đó, việc xác định vai trò chính thức cho họ trong quy trình quản trị là điều đáng cân nhắc.

Bài[ba thứ](https://medium.com/@starkware/part-3-starknet-token-design-5cc17af066c6)trong loạt bài này mô tả thiết kế của Mã thông báo StarkNet: các cân nhắc thiết kế mã thông báo chính và các giai đoạn phân bổ mã thông báo khác nhau.