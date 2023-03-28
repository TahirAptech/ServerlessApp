const AWS = require('aws-sdk')

exports.handler = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    console.log("> id", event.pathParameters.id);
    const id = event.pathParameters.id;
    const { Attributes: oldTodo } = await dynamodb.delete({
        TableName: "TodoTable",
        Key: { id },
        ReturnValues: "ALL_OLD"
    }).promise();
    console.log("Todo Deleted Successfully");

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Todo Deleted Successfully", oldTodo })
    };
}