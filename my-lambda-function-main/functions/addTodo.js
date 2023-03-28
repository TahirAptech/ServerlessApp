const { v4 } = require("uuid")
const AWS = require('aws-sdk');
const dayjs = require("dayjs");

exports.handler = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const { todo } = JSON.parse(event.body);

    const newTodo = {
        id: v4(),
        todo,
        createdAt: dayjs().unix(),
        completed: false
    }

    const aa = await dynamodb.put({
        TableName: "TodoTable",
        Item:newTodo
    }).promise();
    console.log("Created Todo Successfully:", aa);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/json; charset=UTF-8'
        },
        body: JSON.stringify(newTodo)
    };
}