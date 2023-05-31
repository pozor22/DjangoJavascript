var groupmates = [
    {
        "name": "Захар",
        "surname": "Захаров",
        "group": "БФИ2203",
        "marks": [2, 2, 2]
    },
    {
        "name": "Денис",
        "surname": "Денисович",
        "group": "БФИ2204",
        "marks": [3, 3, 5]
    },
    {
        "name": "Владимир",
        "surname": "Владимирович",
        "group": "БФИ2201",
        "marks": [5, 5, 5]
    },
    {
        "name": "Лиза",
        "surname": "Лизович",
        "group": "БФИ2105",
        "marks": [5, 5, 3]
    },
    {
        "name": "Саня",
        "surname": "Саня",
        "group": "БФИ2222",
        "marks": [2, 3, 5]
    }
]

var rpad = function(str, length)
{
    str = str.toString();
    while (str.length < length)
        str = str + ' ';
    return str;
};

var printStudents_group = function(students)
{
    var group = prompt("Введите группу");
    for (var i = 0; i < students.length; i++)
        if (students[i]['group'] == group)
        {
            console.log(
                rpad(students[i]['name'], 15),
                rpad(students[i]['surname'], 15),
                rpad(students[i]['group'], 8),
                rpad(students[i]['marks'], 20)
            );
        }
    console.log('\n');
};

var printStudents_good = function(students)
{
    var s = 0;
    var count = 0;
    var target = prompt("Введите число");
    for (var i = 0; i < students.length; i++)
    {
        for (var j = 0; j < students[i]['marks'].length; j++)
        {
            s = s + students[i]['marks'][j];
            count++;
        }
        s = s / count;
        if (s > target)
        {
            console.log(
                rpad(students[i]['name'], 15),
                rpad(students[i]['surname'], 15),
                rpad(students[i]['group'], 8),
                rpad(students[i]['marks'], 20)
            );
        }
        s = 0;
        count = 0;
    }
    console.log('\n');
};

var mode = prompt("Выберите режим:\n1) Фильтрация по группе\n2) Фильтрация по среднему баллу");
if (mode % 2 == 1) printStudents_group(groupmates);
else if (mode == null) {}
else printStudents_good(groupmates);


var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++)
{
    foldBtns[i].addEventListener("click", function(e)
    {;
        if (e.target.parentElement.parentElement.className == "one-post folded")
        {
            e.target.innerHTML = "свернуть";
            e.target.parentElement.parentElement.className = "one-post";
        } else
        {
            e.target.innerHTML = "развернуть";
            e.target.parentElement.parentElement.className = "one-post folded";
        }
    });
}