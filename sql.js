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

    // let sql = "SELECT id_students FROM students AS s INNER JOIN gru AS m ON (s.id_students =  m.id_gru) UNION ALL SELECT id_gru FROM gru  AS s INNER JOIN subject_teacher AS m on (s.id_gru =  m.gru_id) UNION ALL SELECT title FROM subject_teacher  AS s INNER JOIN subject AS m on (s.subject_id =  m.id_subjects)  UNION ALL SELECT CONCAT(nombre," ",apellido) FROM subject_teacher  AS s INNER JOIN teacher AS m on (s.teacher_id =  m.id_teacher)"

                                                                                                                                                                  

 







 await connection.end()
}
catch(err)
{
    console.log(err)
    connection.end()
}
}
main()