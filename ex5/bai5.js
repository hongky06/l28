let company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};
console.log(company.name)
console.log("nhan vien cong ty")
company.employees.forEach(function(el ,index){
    console.log(el.name)
});