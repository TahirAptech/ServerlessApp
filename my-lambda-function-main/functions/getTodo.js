const AWS = require('aws-sdk');

exports.handler = async () => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const todos = await dynamodb.scan({ TableName: "TodoTable" }).promise();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/json; charset=UTF-8'
        },
        body: JSON.stringify(todos)
    };
}