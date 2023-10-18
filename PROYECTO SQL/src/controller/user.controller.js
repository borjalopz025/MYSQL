const {pool} = require("../database")
const { response } = require("express");

const postRegister = async (req, res) =>
{
    try 
    {
        console.log(req.body);
        let sql = "INSERT INTO user (user_id, name , last_name , email, photo, password)"+
                                        "values ('"+ req.body.user_id+ "','"+
                                                     req.body.name + "','"+
                                                     req.body.last_name +"','"+
                                                     req.body.email +" ',' "+
                                                     req.body.photo +"','"+
                                                     req.body.password+"')";
                                                     
        console.log(sql);
        let [result] = await pool.query(sql)
        console.log(result);

        if(result.insertId)
            res.send(String(result.insertId))
        else
            res.send("-1")
    }
    catch (error)
    {
        console.log(error);
    }
}

const postLogin = async (req, res)=>
{
    try
    {
        let parametros = [req.body.email, req.body.password]
        sql = "SELECT user_id, name,last_name, email, photo FROM user WHERE email = ? AND password = ?"
    
        
        console.log(sql);
        let [result] = await pool.query(sql,parametros)
        console.log(result); 
        if(result.length == 0)
        res.send({error:true , codigo:404, mensaje:"usuario no encontrado"})
        else{
            res.send({error:false , codigo:200, mensaje:"usuario encontrado" , data:result})
        }
    }
    catch (error)
    {
        console.log(error);
    }
    }

 
module.exports = {postRegister,postLogin}