class Student{
    constructor(name, classes, address, secretNumber, username){
        this.name = name;
        this.classes = classes;
        this._username = username;
        this._address= address;
        this._secretNumber = secretNumber;
    };
    get getAddress(){
        return this._address;
    }

    get getPaymentForExam(){
        const billing = this._secretNumber * 2;
        return `Estimado ${this.name}, usted tiene que pagar $${billing} para presentar su examen`;
    }

    set validateUserNAme(newUserName){
        if (newUserName === "spiderman" || newUserName === "usuarioMaldito") {
            console.log("No haga eso, lo estoy viendo");
            return;
        } else{
            this._username = newUserName;
            console.log(newUserName);
            return newUserName;
        }
    }
};

const emilio = new Student("Emilio", ["History", "Math", "Physics"], "Dilion Av", 150);

console.log(emilio);
console.log(emilio.getPaymentForExam);