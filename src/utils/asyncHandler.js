// asyncHandler ek function hai jo requestHandler (controller) ko wrap karta hai
const asyncHandler = (requestHandler) => {

    // yeh ek middleware function return kar raha hai
    return (req, res, next) => {

        // Promise.resolve se async function ko handle karte hain
        Promise.resolve(requestHandler(req, res, next))

        // agar error aata hai to catch me aayega
        .catch((err) => next(err)) // error ko Express ke next middleware ko bhej diya
    }
}

// named export kar rahe hain
export { asyncHandler }

 

// const asyncHandler = (fn) => async (req, res, next) =>{
//      try {
//         await fn(req, res, next)
//      } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//      }
// }