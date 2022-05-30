import bcrypt from 'bcryptjs'

export const hashedPassword = async(val)=>{
    const salt = await bcrypt.genSalt(10);
    const finalVal = await bcrypt.hash(val,salt);
    return finalVal;
}


export const comparePasswords = (userPassword,dbPassword)=>{
    return bcrypt.compareSync(userPassword,dbPassword);
}