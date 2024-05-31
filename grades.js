//создаем массив с оценками студентов
let grades = new Array();
let gradesShow=document.getElementById("gradesArray");

for (let el=0; el<12; el++){
    grades.push(Math.floor(Math.random() * 100) + 1);
}
console.log(grades);

gradesShow.innerHTML = `Оценки студентов: ${grades}`;

//ищем средннее арифметическое массива
let sum=0;
for(let num of grades){
    sum+=num;
};
let average = (sum / grades.length).toFixed(2);
console.log(average);

let averageShow= document.getElementById("average");
averageShow.innerHTML = `средний балл: ${average}`;

//минимальное значение массива
let minGrade=Math.min.apply(null, grades);
console.log(minGrade);
let minGradeShow=document.getElementById('min');
minGradeShow.innerHTML = `минимальный балл: ${minGrade}`;
//максимальное значение массива
let maxGrade=Math.max.apply(null, grades);
console.log(maxGrade);
let maxGradeShow=document.getElementById('max');
maxGradeShow.innerHTML = `максимальный балл: ${maxGrade}`;

//оценки больше 60 баллов из массива
let goodGrades = grades.filter(function(elem){
    if(elem>=60){
        return true;
    }
    else{
        return false
    }
});
console.log(goodGrades);
console.log(goodGrades.length);
let goodGradesShow=document.getElementById('good');
goodGradesShow.innerHTML = `Количество студентов, получивших балл более 60: ${goodGrades.length}`;

//оценки ниже 60 баллов
let notgoodGrades = grades.filter(function(elem){
    if(elem<60){
        return true;
    }
    else{
        return false
    }
});
console.log(notgoodGrades);
console.log(notgoodGrades.length);
let notgoodGradesShow=document.getElementById('notgood');
notgoodGradesShow.innerHTML = `Количество студентов, получивших балл менее 60: ${notgoodGrades.length}`;

//буквенные оценки
let lettersGrade=[];
for(let item of grades){
    if(item>=80 && item<=100){
        lettersGrade.push('A');
    }
    else if(item>=60 && item<=79){
        lettersGrade.push('B');
    }
    else if(item>=40 && item<=59){
        lettersGrade.push('C');
    }
    else if(item<40){
        lettersGrade.push('D');
    }
};
console.log(lettersGrade);
let newGradesShow=document.getElementById("newGrades");
newGradesShow.innerHTML = `оценки буквенная шкала: ${lettersGrade}`;