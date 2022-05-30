

export const ValidateProps = {
    user:{
        username:{type:String, minLength:4, maxLength:20},
        email:{type:String,minLength:1},
        password:{type:String,minLength:8}
    }
}