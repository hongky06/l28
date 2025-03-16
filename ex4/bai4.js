let rectangle = {
    width: 10,
    height: 5,
    getArea: function (){
        return this.width * this.height;
        // this : nó tham chiếu đến chính đối tượng đó. vd : this.width = 10
    }
    
}
alert(`dien tich = ${rectangle.getArea()}`)