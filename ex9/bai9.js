let book = []
let choice;
let thutu = 0
menu = (`
    1.Thêm sách mới.
    2.Hiển thị danh sách sách.
    3.Tìm kiếm sách theo tiêu đề (khong co chu de xin sua de thanh tim bang ten sach).
    4.Cập nhật trạng thái mượn/trả sách theo id sách.
    5.Xóa sách theo id sách ra khỏi danh sách.
    6.Sắp xếp sách theo giá tăng dần.
    7.Thoát.
`)
while (choice !== 7) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let name = prompt("moi ban nhap ten sach");
            let author = prompt("moi ban nhap ten tac gia")
            let year = +prompt("moi ban nhap nam xuat ban")
            let price = +prompt("moi ban nhap gia sach")
            let inAvailable = false;


            let newbook = {
                id: thutu++,
                ten: name,
                tacgia: author,
                nam: year,
                giatien: price,
                trangthai: inAvailable
            }

            book.push(newbook)
            alert("them sach thanh cong")
            console.table(book)
            break;
        case 2:
            console.table(book)
            break;
        case 3:
            let searchtacgia = prompt("moi ban nhap ten tac gia")
            // nếu muốn tìm tất cả những sách của tác giả thì dùng filter => trả về một mang cac sach 
            let vitritacgia = book.findIndex(function(sl){
                return sl.tacgia === searchtacgia  // tra ve vi tri phan tu trong mang 
            })
            if(vitritacgia !== -1 ){
                let serchbook = book[vitritacgia]
                alert("da tim thay tac gia ")
                console.table(serchbook)
            }else{
                alert("khong tim thay tac gia")
            }
            break;
            case 4:
                let searchid =+prompt("moi ban nhap id muon tim")
                console.table(book)
                if (Number.isInteger(searchid) && searchid >= 0) {
                    let vitri_id = book.findIndex(sl => sl.id === searchid);
    
                    if (vitri_id !== -1) {
                        let idsach = book[vitri_id];
                        idsach.trangthai = !idsach.trangthai;  
                        
                        alert("Cập nhật trạng thái thành công!");
                        console.table([idsach]);
                    } else {
                        alert("Không tìm thấy sách với ID này!");
                    }
                } else {
                    alert("ID nhập không hợp lệ");
                }
                break;
                case 5:
                    let search_id =+prompt("moi ban nhap id muon tim")
                    console.table(book)
                   
                    if (Number.isInteger(search_id) && search_id >= 0) {
                        let vitri_id = book.findIndex(sl => sl.id === search_id);
        
                        if (vitri_id !== -1) {
                            book.splice(vitri_id , 1)  
                            alert("xoa thanh cong");
                            console.table(book);
                        } else {
                            alert("Không tìm thấy sách với ID này!");
                        }
                    } else {
                        alert("ID nhập không hợp lệ");
                    }
                    break;
                case 6:
                    if (book.length > 0) {
                        book.sort((a, b) => a.giatien - b.giatien);
                        alert("Đã sắp xếp sách theo giá tăng dần.");
                        console.table(book);
                    } else {
                        alert("Danh sách sách trống, không thể sắp xếp.");
                    }
                    break;
                   
    }
}   