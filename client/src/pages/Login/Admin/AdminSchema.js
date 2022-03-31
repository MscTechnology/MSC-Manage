
import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';
import Password from 'antd/lib/input/Password';

const schema = `
   
input UserInput {
    id: Int!
    name: String
    surname: String
    username: String
    password: String
    usertypesid: Int
    createuser: Int
    createtime: String
    changeuser: Int
    changetime: String
  }
  
`


const schemaType = buildASTSchema(parse(schema)).getType('UserInput');
const schemaExtras = {
    
};



const schemaValidator = (model) => {
    const details = [
        
    ];

    if (!model.username) {
        details.push({
          name:"username",
            message: 'Name is required',
            path: ['username'],
            type: 'required',
            value: model.username,
        });
    }
    if (!model.password) {
        details.push({
          name:"password",
            message: 'Password is required',
            path: ['password'],
            type: 'required',
            value: model.password,
        });
    }
      
  
    
    return details.length ? { details } : null;

};

// console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras.fields))




export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
