const pool=require("../configuraton/database")

exports.getAllTodos = async(userID)=>{
    const query="select * from todos where user_id = ?";
    try {
        
    } catch (error) {
        
    }
    const[rows]= await pool.query(query,[userID]);
    return rows;
};

exports.addTodo = async(data)=>{
    const query="Insert into todo (user_id,description,deadline,status) values (?,?,?,?)";
    const values=[data.user_id,data.description,data.deadline,data.status];
    const[rows]= await pool.query(query,values)
}