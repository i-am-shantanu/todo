const pool=require("../configuraton/database")

exports.addUser=async(data)=>{
    const query="INSERT INTO USERS (NAME,EMAIL,PASSWORD,PROFESSION) VALUES (?,?,?,?);"
    const values=[data.name,data.email,data.password,data.profession??null]
    try {
        const res = await pool.query(query,values);
        console.log(res);
    } catch (error) {
        throw new Error(error);
    }
}

exports.getUserByUsername= async(username)=>{
    const query="SELECT * FROM USERS WHERE EMAIL = ?";
    const values=[username];

    try{
        const [rows] = await pool.query(query,values);
        return rows;
    } catch(error){
        throw new Error(error);
    }
}

exports.getUserById = async(id)=>{
    const query = "SELECT * FROM USERS WHERE ID=?";
    values=[id];

    try {
        const [rows]= await pool.query(query,values);
        if(rows.length===0)
            throw new Error("Invalid ID");
        const[user]=rows;
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}