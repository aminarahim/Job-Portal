const ErrorResonse=require('../utils/errorResponse')

const errorHandler=(err,req,res,next) =>{

    let error={...err}
    error.message=err.message

    if(err.name=="CastError"){
    
        const message=`Resource Not Found ${err.value}`;
        error=new ErrorResonse(message,404)
            
    }
    if(err.code==11000){
    
        const message="Duplicate Value Entered";
        error=new ErrorResonse(message,400)
            
    }
    if(err.name=="ValidationError"){
        const message=Object.values(err.message).map(value =>' '+value.message)
        error=new ErrorResonse(message,400)
            
    }
    res.status(error.status || 500).json({
        success:false,
        error:error.message||"server error"
    })

    
}
module.exports=errorHandler