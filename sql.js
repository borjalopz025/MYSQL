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
    // let sql= "INSERT INTO gru ( id_gru , fecha) "+ "VALUES (8, SegundoUniversidad),"+ "VALUES (9, TerceroUniversidad),"+ "VALUES (10, CuartoUniversidad),"

    // TABLA STUDENTS
    // let sql ="CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                "first-name VARCHAR(45)"+
    //                                "last-name"+
    //                                "id INT AUTO_INCREMENT PRIMARY KEY) "


    // let sql = "INSERT INTO students ( id_students ,firts_name, last_name, gru_id) "+ "VALUES (6, ana , alvarez, 2)," +   "VALUES (7,carolina, llanos, 2),"+ "VALUES (8, perdo, garcia,1),"+" VALUES (9,marina ,peral,1)"

    // let sql = "SELECT firts_name , last_name FROM students"
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos");
    // console.log(result);
 
    //TABLA SUBJECT
    // let sql = "CREATE TABLE subject (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                   "title VARCHAR(45))"

    // let sql = "INSERT INTO subject (  id_subject, title) "+ "VALUES (6, ética)," +   "VALUES (7,biologia),"+ "VALUES (8, sociales),"+" VALUES (9,inglés)"+"VALUES (10,tecnologia)"
    
    //TABLA SUBJECT_TEACHER
    // let sql = "CREATE TABLE subject_teacher (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                       "id INT AUTO_INCREMENT PRIMARY KEY"+
    //                                        "id INT AUTO_INCREMENT PRIMARY KEY")


    //TABLA TEACHER
    // let sql = "CREATE TABLE subject (id INT AUTO_INCREMENT PRIMARY KEY "+
    //                                   "firts_name VARCHAR(45))"+
    //                                   "last_name VARCHAR(45))"

    // let sql = "INSERT INTO teacher (  id_teacher, firts_name,last_name) "+ "VALUES (6, javier,rodriguez)," +   "VALUES (7,ana,baute),"+ "VALUES (8, pedro, jimenez),"+" VALUES (9,silvia, barroso)"+"VALUES (10,geronimo,bernal)"


    //let sql = "SELECT * FROM teacher";
    // let [result] = await connection.query(sql);
    // console.log("Datos Obtenidos");
    // console.log(result);

  // let [result] =await connection.query(sql)
  // console.log(result);

 await connection.end()
}
catch(err)
{
    console.log(err)
    connection.end()
}
}
main()