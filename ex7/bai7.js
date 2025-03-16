let students = [
    {name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    {name: "Hà Bích Ngọc", scores: { math: 8, english: 10, literature: 9 } },
    {name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];


function check(students) {
    return students.filter(function(sl){
            let tbc = (sl.scores.math + sl.scores.english + sl.scores.literature ) / 3  
            return tbc > 8 
    });
}

console.log(check(students))