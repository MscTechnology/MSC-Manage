
import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';

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
    fields: {
        id: {
            type: 'number',
            label: 'Id',
            disabled: true,
            hidden: true,
            initialValue: 0,
        },
        name: {

            type: 'string',
            label: 'Name',
            placeholder: 'Name',
            required: true,
            maxLength: 50,
            minLength: 1,
            initialValue: '',

        },
        surname: {

            type: 'string',
            label: 'Surname',
            placeholder: 'Surname',
            required: true,
            maxLength: 50,
            minLength: 1,
            initialValue: '',

        },
        username: {

            type: 'string',
            label: 'Username',
            placeholder: 'Username',
            required: true,
            maxLength: 50,
            minLength: 1,
            initialValue: '',
        }
    },

};



const schemaValidator = (model) => {
    const details = [
        
    ];


    
    return details.length ? { details } : null;

};

console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras.fields))
export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
