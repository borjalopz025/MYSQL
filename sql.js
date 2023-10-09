const mysql = require("mysql2/promise");


async function main()
{
  try
  {
    let connection = await mysql.createConnection(
    {
          host         : "localhost",
          user         : "root",
          password     : "borborjaja",
          database     : "retoo1"
    });
    console.log('conexion correcta');


    //TABLA DIRECCION
    //let sql = "CREATE TABLE direccion (id INT AUTO_INCREMENT PRIMARY KEY, " + 
                                      // "calle VARCHAR(200), "+
                                      // "numero INT, " +
                                      // "ciudad VARCHAR(60))";

      // let sql= "INSERT INTO direccion (id , calle, numero, ciudad) " + 
      //                 "VALUES (2,\"Juan domingo de mena\", 10,\"cadiz\")";
  
                                                      

    // let sql = 'ALTER TABLE direccion ADD COLUMN bloque INT'
    // let sql = 'ALTER TABLE direccion DROP COLUMN bloque'
    // let sql = 'DROP TABLE direccion'
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos");
    // console.log(result);


    //TABLA MARK
    // let sql = "CREATE TABLE mark (id INT AUTO_INCREMENT PRIMARY KEY,"+
    //                                  "id INT AUTO_INCREMENT PRIMARY KEY,"+
    //                                  "id INT AUTO_INCREMENT PRIMARY KEY ,"+
    //                                  "fecha DATE,"+
    //                                  "mark INT)"

  //  let sql= "INSERT INTO mark (mark_id, students_id, subject_id, fecha, mark) "+ "VALUES (9,9,9,\"1999-02-02\",9);"


  // let sql = 'DELETE FROM mark WHERE fecha < DATE_SUB(NOW(), INTERVAL 10 YEAR)
  // let sql = 'UPDATE mark SET mark = 5 WHERE mark < 5'
  //  let sql= 'UPDATE mark SET mark = 0'
  // let [result] = await connection.query(sql);
  // console.log("Datos Obtenidos");
  // console.log(result);



    //TABLA GRU
    // let sql = "CREATE TABLE gru (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                               "name VARCHAR(45))"
    // let sql= "INSERT INTO gru ( id_gru , fecha) "+ "VALUES (8, \"SegundoUniversidad\"),"
    // TABLA STUDENTS
    // let sql ="CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                "first-name VARCHAR(45)"+
    //                                "last-name"+
    //                                "id INT AUTO_INCREMENT PRIMARY KEY) "


    // let sql = "INSERT INTO students ( id_students ,firts_name, last_name, gru_id) "+ "VALUES (6, \"ana\" , \"alvarez\", 2),";

    // let sql = "SELECT firts_name , last_name FROM students"
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos");
    // console.log(result);
 
    //TABLA SUBJECT
    // let sql = "CREATE TABLE subject (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                   "title VARCHAR(45))"

    // let sql = "INSERT INTO subject (  id_subject, title) "+ "VALUES (6, \"ética\),";
    
    //TABLA SUBJECT_TEACHER
    // let sql = "CREATE TABLE subject_teacher (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                       "id INT AUTO_INCREMENT PRIMARY KEY"+
    //                                        "id INT AUTO_INCREMENT PRIMARY KEY")


    //TABLA TEACHER
    // let sql = "CREATE TABLE subject (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                   "firts_name VARCHAR(45))"+
    //                                   "last_name VARCHAR(45))"

    // let sql = "INSERT INTO teacher (  id_teacher, firts_name,last_name) "+ "VALUES (6, \"javier,rodriguez\"),";

    //let sql = "SELECT * FROM teacher";
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos");
    // console.log(result);

  // let [result] =await connection.query(sql)
  // console.log(result);


    // RETO 2


     // let sql = "SELECT AVG(mark) FROM mark"

    // let sql = "SELECT COUNT (*) students"
    
    // let sql = "SELECT mark FROM mark WHERE mark > 5 AND fecha >= 2019-01-01"

    // let sql = "SELECT * FROM students WHERE ingreso = 2023"

    // let sql = "SELECT subject_teacher_id, COUNT (*) AS numero_profesores FROM subject_teacher GROUP BY subject_teacher_id"

    // let sql = "SELECT student_id, mark FROM mark WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(fecha) = YEAR(CURDATE())-1);"

    // let sql = "SELECT student_id, AVG(mark) AS nota_media FROM mark WHERE YEAR(fecha) = YEAR(CURDATE()) - 1 GROUP BY student_id;"



    //RETO 3 

    
    // let sql = "SELECT firts_name , last_name ,title FROM students AS s INNER JOIN subject AS m ON (s.id_students = m.id_subject)"

    // let sql = "SELECT nombre, apellido , title FROM teacher AS s INNER JOIN subject AS m ON (s.id_teacher = m.id_subject)"

    // let sql = "SELECT  s.id_students ,b.title,v.nombre ,v.apellido FROM students AS s INNER JOIN gru AS m ON (s.id_students =  m.id_gru) INNER JOIN gru AS m on (s.id_students =  m.id_gru) INNER JOIN subject_teacher AS n ON (m.id_gru = n.gru_id) INNER JOIN subject AS b ON (n.subject_id = b.id_subjects) INNER JOIN teacher AS v ON (n.teacher_id = v.id_teacher);"

                                                                                                                                                                  

 







 await connection.end()
}
catch(err)
{
    console.log(err)
    connection.end()
}
}
main()