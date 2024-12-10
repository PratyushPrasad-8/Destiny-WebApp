class MyError extends Error{
    constructor(errorName,statusCode,message){
        super();
        this.errorName=errorName;
        this.statusCode=statusCode;
        this.message=message;
    }
}

module.exports=MyError;