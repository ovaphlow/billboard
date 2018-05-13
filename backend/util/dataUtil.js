const config = require('../config')


module.exports ={
    initial,
    createSqlAndData,
    checkData               
}


function initial(tableName){
    switch(tableName){
     case "platform_news":   
        module.exports.checkData=checkDataByMessage
        module.exports.createSqlAndData=createSqlAndDataByMessage
        break;
    }
    
 }

function createSqlAndData(data){}

function checkData(data) {return false }

function checkDataByMessage(data){
    
    return data!=undefined&&data.userId!=undefined&&data.title!=undefined&&data.content!=undefined;
}

function createSqlAndDataByMessage(data){
 let sql=`INSERT INTO ${config.database.schema}.platform_news ` 
 let col=""
 let value=""
 let valueData=[]; 
 Object.keys(data).forEach(element => {
       switch (element){
            case "userId":
                col=col+'user_id,'
            break
            case "imgFlag":
                col=col+'img_flag,'
            break
            case "topFlag":
                col=col+'top_flag,'
            break    
            case "top_time":
                col=col+'top_time,'
            break
            default:col=col+element+','
       }
       value=value+'?,'
       valueData.push(data[element])        
    });  

    return {"sql":sql+"("+col+"uuid)"+"value ("+value+"uuid())" ,"sqlData":valueData};

}

