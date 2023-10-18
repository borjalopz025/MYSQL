const {pool} = require("../database")
const { response } = require("express");

const getLibros1 = async(req,res) =>
{
    try 
    {
        let sql;
        if(req.query.id){
            sql = "SELECT * FROM book WHERE id_user = "+req.query.id
           
        }
        else{
           console.log("libros no encontrados");
        }

        console.log(sql);
        let [result] = await pool.query(sql)
        console.log(result); 
        if(result.length == 0)
        res.send({error:true , codigo: 404, mensaje:"libros no encontrados "})
        else{
            res.send({error:false , codigo:200, mensaje:"libros encontado", data: result});
        }

    } 
    catch (error) 
    {
        console.log(error);
    }
}

const getLibrosId = async (req,res) =>
{
    try 
    {
        let sql;

       
        
        sql = "SELECT * FROM book WHERE id_book = " +req.query.id + " AND id_user = ?" +req.query.id_user
           
        console.log(sql);
        let [result] = await pool.query(sql,parametros)
        console.log(result); 
        if(result.length == 0)
        res.send({error:true , codigo: 404, mensaje:"libro no encontrados "})
        else{
            res.send({error:false , codigo:200, mensaje:"libro encontado", data: result});
        }

    } 
    catch (error) 
    {
        console.log(error);
    }
}

const postLibro1 = async (req , res) => 
{
    try
    {
        console.log(req.body);
        let sql = "INSERT INTO book ( id_user , title , author, type, price , photo)"+
                                        "values ('"+ 
                                                     req.body.id_user + "','"+
                                                     req.body.title +"','"+
                                                     req.body.author +" ',' "+
                                                     req.body.type +" ',' "+
                                                     req.body.price +" ',' "+
                                                     req.body. photo +"')";

        console.log(sql);
        let [result] = await pool.query(sql)
        console.log(result);

        if(result.insertId)
            res.send(String(result.insertId))
        else
            res.send("-1")
    }
    catch(err)
    {
        console.log(err);
    }
}

const putLibro1 = async (req,res) =>
{
        try
    {
        let sql;
        console.log(req.body);
        let parametros = [
           
            req.body.title,
            req.body.author,
            req.body.type,
            req.body.price,
            req.body.photo,
            req.body.id_book,
            req.body.id_user
        ]


         sql =  "UPDATE book SET title = COALESCE (?, title) , "+
                    "author = COALESCE (?,author) , "+
                    "type = COALESCE (?,type) , "+
                    "price = COALESCE (?,price) , "+
                    "photo = COALESCE (?,photo)  WHERE id_book = ? AND id_user= ? "
                   

        console.log(sql);
        let [result] = await pool.query(sql,parametros)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }
    
   
}

const deleteLibro1 = async (req, res) =>
{
    try
    {
        console.log(req.body);

        let params = [req.body.id]
        let sql = "DELETE FROM book WHERE id_book = ?"
        console.log(sql);
        let [result] = await pool.query(sql,params)
        res.send(result)
    }
    catch(err)
    {
        console.log(err);
    }

}



module.exports={getLibros1,getLibrosId,postLibro1,putLibro1,deleteLibro1}