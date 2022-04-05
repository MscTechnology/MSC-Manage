
import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';

const schema = `
   
input UserfileInput {
    id: Int!
    usersid: Int!
    data: [Float!]
    filetypesid: Int!
    extensitions: String
    createuser: Int
    createtime: String
    changeuser: Int
    changetime: String
    filetypes: FiletypeInput
    
  }

  input FiletypeInput {
    id: Int!
    typename: String
    userfiles: [UserfileInput]
  }
  
`
const schemaType = buildASTSchema(parse(schema)).getType('UserfileInput');
const schemaExtras = {

};



const schemaValidator = (model) => {
 
    const details = [];



    return details.length ? { details } : null;
};

// console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras))
export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
