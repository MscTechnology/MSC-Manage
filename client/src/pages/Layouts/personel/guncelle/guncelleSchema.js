
import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';

const schema = `
   
input UserInput {
  id: Int!
  name: String
  surname: String
  username: String
  password: String
  email: String
  phonenumber: Float
  identificationnumber: Float
  adress: String
  cityid: Int
  districtsid: Int
  gender: String
  schoolname: String
  usertypesid: Int
  createuser: Int
  createtime: String
  changeuser: Int
  changetime: String
  status: Int!
  usertypes: UsertypeInput
}
input UsertypeInput {
  id: Int!
  typename: String
  users: [UserInput]
}
  
`
const schemaType = buildASTSchema(parse(schema)).getType('UserInput');
const schemaExtras = {

};



const schemaValidator = (model) => {
 
    const details = [];

    if (!model.name) {
        details.push({
            message: 'name is required',
            path: ['name'],
            type: 'required',
            validator: 'required'
        });
    }

    return details.length ? { details } : null;
};

// console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras))
export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
