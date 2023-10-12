import bodyParser from 'body-parser';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(bodyParser.json())

let students = [
    {
        id: 1,
        name: "Jessica Drake",
        classes: {
            biology: 95,
            algebra: 92
        }
    },
    {
        id: 2,
        name: 'Ben Cohen',
        classes: {
            biology: 95,
            algebra: 92,
        }
    },
    {
        id: 3,
        name: 'Lisa Downing',
        classes: {
            biology: 95,
            algebra: 92
        }
    }
];

// Get a list of data about all students

app.get('/students', (req, res)=>{
    res.json(students)
});

// Get the data about a single student by name
app.get('/students/:name', (req, res)=>{
    res.json(students.find((student)=>{
        return student.name === req.params.name}))
})

// Add data for a student to our list of students.
app.post('/students', (req, res)=>{
    let newStudent = req.body;

    if(!newStudent.name){
        const message = "Missing name in request Body"
        res.status(404).send(message);
    }else{
        newStudent.id =  uuidv4();
        students.push(newStudent)
        res.status(201).send(newStudent)
    }
})

// Deletes a student from our List by Id

app.delete('/students/delete/:id', (req, res)=>{
    let student = students.find((student)=>{
        return student.id === req.params.id
    })

    if (student){
        students.filter((obj)=>{
            return obj.id === req.params.id
        })
        res.status(201).send("Student " + req.params.id + "was deleted")
    }
})

//Update the "grade" of a student by student name/class name

app.put('/students/:name/:class/:grade', (req, res)=>{
    let student = students.find((student)=>{ 
        return student.name === req.params.name})
    if (student){
        student.classes[req.params.class] = parseInt(req.params.grade);
        res.status(201).send('Student ' + req.params.name + " was assigned a grade of " +
    req.params.grade + " in " + req.params.name)
    }else{
        res.status(404).send('Student with the name ' + req.params.name + ' was not found')
    }
})

// Gets the GPA of the student
app.get('student/:name/gpa', (req, res)=>{
    let student = students.find((student)=>{
        return student.name === req.params.name
    })
    if (student){
        let classGrades = Object.values(student.classes);
        let sumOfGrades = 0;
        classGrades.forEach((grade) => {
            sumOfGrades = sumOfGrades + grade;
        })
        let GPA = sumOfGrades / classGrades.length;
        console.log(sumOfGrades);
        console.log(classGrades.length);
        console.log(gpa);
        res.status(201).send(' ' + GPA);

    }else{
        res.status(404).send('Student with the name ' + req.params.name + " was not found!")
    }

})

app.listen(8080, ()=>{ console.log('App is listening on port 8080')})