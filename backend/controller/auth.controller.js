// import express from "express"
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req , res)=>{
    const {username , email , password , confirmPassword , gender} = req.body 
    let validUser 
     validUser   = await User.findOne({email});
     if(validUser){
        return res.status(400).json({
            success: false ,
            message:"User already exist"
        })
     }

  if(password!==confirmPassword){
    return res.status(400).json({
        error:"Password not match"
    })
}

    const hashedPassword = bcrypt.hashSync(password , 10)
     const boyProfilePic  = `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilePic  = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
        gender,
        profilePic :gender==="male"?boyProfilePic:girlProfilePic,
    })
  
  try{
     //Generate jwt token
     const token = jwt.sign({id:newUser._id} , process.env.JWT_SECRET)
     await newUser.save()
     res.cookie("access_token" , token , {httpOnly:true}).status(201).json({
        _id:newUser._id,
        username: newUser.username,
        email:newUser.email,
        profilePic:newUser.profilePic,     
     })
  }catch(error){
console.log("Error"+ error)
   res.status(500).json({
    error: "Internal server error",
    
})
  }
} 

export const login = (req , res)=>{

}
export const logout=(req , res)=>{}










// import express from "express"; // Uncomment if required in your setup
// import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const signup = async (req, res) => {
//     const { username, email, password, confirmPassword, gender } = req.body;

//     try {
//         // Check if user already exists
//         const validUser = await User.findOne({ email });
//         if (validUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User already exists"
//             });
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             return res.status(400).json({
//                 error: "Passwords do not match"
//             });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
//         const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

//         // Declare newUser before the try-catch block
//         let newUser;

//         // Create new user
//         newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//             gender,
//             profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
//         });

//         // Save the user and generate JWT token
//         await newUser.save();
//         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

//         // Respond with the created user's info
//         res.status(201).json({
//             _id: newUser._id,
//             username: newUser.username,
//             email: newUser.email,
//             profilePic: newUser.profilePic,
//             token
//         });

//     } catch (error) {
//         res.status(500).json({
//             error: "Error: " + error.message
//         });
//     }
// };

// export const login = (req, res) => {
//     // Implement login functionality here
// };

// export const logout = (req, res) => {
//     // Implement logout functionality here
// };

// // export { signup, login, logout };
