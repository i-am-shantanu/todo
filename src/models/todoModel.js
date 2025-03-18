const pool=require("../configuraton/database")


exports.getAllTodos = async(userID)=>{
    const query="select * from todos where user_id = ?";
    try {
        const[rows]= await pool.query(query,[userID]);
        return rows;
    } catch (error) {
        console.log("Error occured while fetching data :",error);
    }
};

exports.addTodo = async(data)=>{
    const query="Insert into todo (user_id,description,deadline,status) values (?,?,?,?)";
    const values=[data.user_id,data.description,data.deadline,data.status];
    try {
        const[rows]= await pool.query(query,values);
        return rows;
    } catch (error) {
        console.log("Error occured while inserting value :",error);
    }
}

exports.getTodoById = async(data)=>{
    const query="Select * from todo where user_id = ?";
    const values=[data.user_id];

    try {
        const[rows]=await pool.query(query,values);
        return rows;
    } catch (error) {
        console.log("Error occured while inserting values :",error);
    }
}

exports.deleteTodoById = async(data)=>{
    const query="Delete from todo where id = ?"
    values=[data.id]

    try {
        const[rows] = await pool.query(query,)
    } catch (error) {
        
    }
}