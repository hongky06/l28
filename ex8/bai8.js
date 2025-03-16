let choice;
let quanly = []
let idtusinh = 0
let menu = (`
    1.Thêm nhân viên mới.
    2.Xóa nhân viên theo id
    3.Cập nhật mức lương của nhân viên theo id
    4.Tìm kiếm nhân viên theo tên.
    `)


while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            // lay thong tin tu nguoi dung
            const name = prompt("moi ban nhap ten")
            const chucvu = prompt("moi ban nhap chuc vu")
            const luong = prompt("moi ban nhap luong ")
            // 
            const newnhanvien = {
                id: idtusinh++,
                //Math.ceil(Math.random() * 1000000),
                ten: name,
                position: chucvu,
                salary: luong,
            }
            // truyen nhan vien vao mang toan cuc
            quanly.push(newnhanvien)
            alert("them nhan vien thanh cong")
            console.table(quanly)
            break;
        case 2:
            // lay id can xoa
            let deleteid = +prompt("moi ban nhap id can xoa")
            // tim kiem trong mang 
            let vitricanxoa = quanly.findIndex((function (sl) {
                return sl.id === deleteid
            }))
            console.log(vitricanxoa)
            if (vitricanxoa !== -1) {
                quanly.splice(vitricanxoa, 1)
                console.table(quanly)
                alert("xoa nhan vien thanh cong")
                // quanly.forEach(function (el, index) {
                //     el.id = index;
                // })
            } else {
                alert("khong tim thay")
            }
            break;
        case 3:
            let idcansua = +prompt("moi ban nhap id can sua luong")
            let vitricansualuong = quanly.findIndex(function (sl) {
                return sl.id == idcansua
            })
            if (vitricansualuong !== -1) {
                let nhanvien = quanly[vitricansualuong];
                console.table(`Tên: ${nhanvien.ten}, Lương: ${nhanvien.salary}`);
               let monnynew = +prompt(`moi ban nhap luong moi cho ${nhanvien.ten} `)
               nhanvien.salary = monnynew;
               console.table(` da cap nhat thanh con luong cho Tên: ${nhanvien.ten}, Lương: ${nhanvien.salary}`);
            }else{
                alert("khong tim thay")
            }
            break;
        case 4:
            let searchname = prompt("moi ban nhap ten tim kiem").toLowerCase().trim()
            let vitriname = quanly.findIndex(function(sl) {
                return sl.ten.toLowerCase().trim() === searchname
            })
            if(vitriname !== -1 ){
                let nhanvientimkiem = quanly[vitriname]
                console.table([nhanvientimkiem])
            } else {
                alert("Không tìm thấy nhân viên!");
            }
            break;
    }
}