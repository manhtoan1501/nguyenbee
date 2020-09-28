import React from 'react';

class Form extends React.Component {

    render() {

        return (
            <div style={{ maxWidth: 800, backgroundColor: '#aaaaaaa', padding: 20 }}>
                <p style={{ fontSize: 65, fontWeight: 900 }} >Forms</p>
                <p style={{ color: "grey", fontSize: 20 }}>
                    Trong React, HTML form element sẽ hoạt động hơi khác một chút so
                    với các DOM element còn lại, form element sẽ giữ và tự xử lí một
                    số state nội bộ (internal state) của riêng nó. Ví dụ như form dưới
                    trong HTML sẽ nhận vào giá trị của input name.
                </p>
                <div style={{ height: 170, backgroundColor: "black", borderRadius: 10 }} >
                    <p style={{ color: 'white' }}>
                        {/* {code.toString()} */}
                    </p>
                </div>
                <p>
                    Thẻ form này có các hành vi của một HTML form mặc đinh: đó là là khi user ấn vào nút sumit để gửi thông tin, nó vẫn sẽ browsing (chuyển trang) sang một trang mới. Và tất nhiên ở React thì form element vẫn sẽ xử lí hệt như thế. Nhưng ở những trường hợp thường gặp, sẽ tiện lợi hơn khi ta sử dụng một hàm (function) trong Javascript để xử lí quá trình gửi dữ liệu (submission) của form, function đó sẽ có thể truy cập vào dữ liệu (data) của form khi người dùng tương tác với form. Kĩ thuật vừa được đề cập ở trên là một quy chuẩn có tên “controlled components”.
                </p>
            </div>
        );
    }
}

export default Form;