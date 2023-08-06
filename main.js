studentarray=[];

function submit() {
    var name1student = document.getElementById("studentname1").value;
    var name2student = document.getElementById("studentname2").value;
    var name3student = document.getElementById("studentname3").value;
    var name4student = document.getElementById("studentname4").value;

    studentarray.push(name1student);
    studentarray.push(name2student);
    studentarray.push(name3student);
    studentarray.push(name4student);

    console.log(studentarray);

    document.getElementById("displaynames").innerHTML = studentarray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sort() {
    studentarray.sort();
    console.log(studentarray);
    document.getElementById("displaynames").innerHTML = studentarray;
    
}
