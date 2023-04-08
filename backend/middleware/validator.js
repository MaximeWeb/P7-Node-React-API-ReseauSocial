const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
    return [
        
        body('pseudo').notEmpty().withMessage("Veuillez renseigné un pseudo"),
        // username must be an email
        body('email').isEmail().notEmpty().withMessage("Veuillez renseigné une adresse email"),
        /*body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
                        .withMessage("Password must include one lowercase character, one uppercase character, a number, and a special character."),*/
        body('password').isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10,
        }).withMessage("Le mot de passe doit inclure un caractère minuscule, un caractère majuscule, un chiffre et un caractère spécial !"),

       
    ]
}

// const signUpErrors = (err) => {
  //  const errors = {pseudo :'', email:'', password:''}

   // if (err.message.includes('pseudo'))
    // errors.pseudo = "pseudo incorrect ou deja prit";

   //  return errors
//}


const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({
        [err.param]: err.msg }))



    return res.status(422).json({
        errors: extractedErrors,
    })

}



module.exports = {
    userValidationRules,
    validate,
    
}