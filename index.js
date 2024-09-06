function bai1() {
    const num = document.getElementById("num").value * 1;
    let res = `<span style="background-color: orange;" > Số ${num} là số dương</span>`;
    if(num > 0){
        res = `<span style="background-color: orange;" > Số ${num} là số dương</span>`;
    } else if(num == 0){
        res = `<span style="background-color: orange;" > Số ${num} không phải là dương hoặc âm </span>`;
    } else {
        res = `<span style="background-color: orange;" >Số ${num} là số âm </span> `;
    }
    const ThongBao = document.getElementById("ThongBao");
    ThongBao.innerHTML = res;
};

function bai2() {
    const num_1 = document.getElementById("num_1").value * 1;
    let res = `<span style="background-color: orange;" ></span>`;
    if(num_1 >= 6){
        res = `<span style="background-color: orange;" > Đã đủ tuổi</span>`;
    } else {
        res = `<span style="background-color: orange;" > Không đủ tuổi </span> `;
    }
    const ThongBao_1 = document.getElementById("ThongBao_1");
    ThongBao_1.innerHTML = res;
};

function bai3() {
    const num_2 = document.getElementById("num_2").value * 1;
    let res = `<span style="background-color: orange;" ></span>`;
    if(num_2 %2 == 0){
        res = `<span style="background-color: orange;" > Đây là số chẵn</span>`;
    } else {
        res = `<span style="background-color: orange;" > Đây là số lẻ </span> `;
    }
    const ThongBao_2 = document.getElementById("ThongBao_2");
    ThongBao_2.innerHTML = res;
};

function bai4() {
    const num_3 = document.getElementById("num_3").value * 1;
    let res = `<span style="background-color: orange;" ></span>`;
    if(num_3 >= 16){
        res = `<span style="background-color: orange;" > Đã đủ tuổi</span>`;
    } else {
        res = `<span style="background-color: orange;" > Không đủ tuổi </span> `;
    }
    const ThongBao_3 = document.getElementById("ThongBao_3");
    ThongBao_3.innerHTML = res;
};

function bai5() {
    const luong = document.getElementById("luong").value * 1;
    const sanpham = document.getElementById("sanpham").value * 1;
    let sum  = 0;
    let res = `<span style="background-color: orange;" ></span>`;
    if(sanpham >= 100){
        sum = luong + (luong * 0.1);
        res = `<span style="background-color: orange;" > Đã có thưởng : Lương của bạn là ${sum}</span>`;
    } else {
        sum = luong;
        res = `<span style="background-color: orange;" > Không có thưởng : Lương của bạn là ${sum}</span>`;
    }
    const ThongBao_4 = document.getElementById("ThongBao_4");
    ThongBao_4.innerHTML = res;
};

function bai6() {
    const tienTra = document.getElementById("tienTra").value * 1;
    let sum  = 0;
    let res = `<span style="background-color: orange;" ></span>`;
    if(tienTra >= 500){
        sum = tienTra - (tienTra * 0.2);
        res = `<span style="background-color: orange;" > Đã giảm giá : Tiền trả của bạn là ${sum}</span>`;
    } else {
        sum = tienTra;
        res = `<span style="background-color: orange;" > Không giảm giá : Tiền trả của bạn là ${sum}</span>`;
    }
    const ThongBao_5 = document.getElementById("ThongBao_5");
    ThongBao_5.innerHTML = res;
};

function bai7() {
    const password = document.getElementById("password").value;
    let sum = password.length;
    let res = `<span style="background-color: orange;" ></span>`;
    if(sum == 0){
        res = `<span style="background-color: orange;" > Vui lòng nhập password</span>`;
    } else if(sum >= 8) {
        res = `<span style="background-color: orange;" > Password mạnh</span>`;
    } else {
        res = `<span style="background-color: orange;" > Password yếu</span>`;
    }
    const ThongBao_6 = document.getElementById("ThongBao_6");
    ThongBao_6.innerHTML = res;
};

function bai8() {
    const soDiem = document.getElementById("soDiem").value * 1;
    let res = `<span style="background-color: orange;" ></span>`;
    if(soDiem < 50){
        res = `<span style="background-color: orange;" > Điểm yếu</span>`;
    } else if(soDiem >=50 && soDiem < 65){
        res = `<span style="background-color: orange;" > Điểm trung bình </span>`;
    } else if(soDiem >= 65 && soDiem <80){
        res = `<span style="background-color: orange;" > Điểm khá </span>`;
    } else if(soDiem >= 80 && soDiem < 90){
        res = `<span style="background-color: orange;" > Điểm giỏi </span>`;
    } else if(soDiem >= 90){
        res = `<span style="background-color: orange;" > Điểm xuất sắc </span>`;
    }
    const ThongBao_7= document.getElementById("ThongBao_7");
    ThongBao_7.innerHTML = res;
};