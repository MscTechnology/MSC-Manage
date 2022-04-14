
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

    if (!model.name || model.name.length > 30) {
        details.push({
            message: 'name is required and must be at less  30 characters',
            path: ['name'],
            type: 'required',
            validator: 'required'
        });
    }
    if(!model.surname || model.surname.length > 30){
        details.push({
            message: 'surname is required and must be at less  30 characters',
            path: ['surname'],
            type: 'required',
            validator: 'required'
        });
    }
    if(!model.username || model.username.length > 10){
        details.push({
            message: 'username is required and must be at less  st 10 characters',
            path: ['username'],
            type: 'required',
            validator: 'required'
        });
    }
    if(!model.password || model.password.length >50){
        details.push({
            message: 'password is required and must be at less  50 characters',
            path: ['password'],
            type: 'required',
            validator: 'required'
        });
    }



    if(model.phonenumber && model.phonenumber.toString().length !== 10){
        details.push({
            message: 'phonenumber must be 10 digits',
            path: ['phonenumber'],
            type: 'validation',
            validator: 'validate'
        });
    }

    if(model.identificationnumber && model.identificationnumber.toString().length !== 11){
        details.push({
            message: 'identificationnumber must be 11 digits',
            path: ['identificationnumber'],
            type: 'validate',
            validator: 'validate'
        });
    }
    if(!model.email || !model.email.includes('@') || !model.email.includes('.') || model.email.length > 30){
        details.push({
            message: 'email must be include @ and "."',
            path: ['email'],
            type: 'validate',
            validator: 'validate'
        });
    }

    


    return details.length ? { details } : null;
};

// console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras))
export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
