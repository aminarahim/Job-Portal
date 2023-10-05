class ErrorResonse extends error{
    constructor(message,status){
        super(message);
        this.status=status
    }

}
module.exports=ErrorResonse;