
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
  status: Int!
  usertypes: UsertypeInput
  userinfos: [UserinfoInput]
  usersmovements: [UsersmovementInput]
}
  
input UsertypeInput {
  id: Int!
  typename: String
  users: [UserInput]
}

input UserinfoInput {
  id: Int!
  usersid: Int!
  email: String
  phonenumber: Float
  identificationnumber: Float
  adress: String
  cityid: Int
  districtsid: Int
  gender: String
  schoolname: String
  createuser: Int
  createtime: String
  changeuser: Int
  changetime: String
  city: CityInput
  districts: DistrictInput
  users: UserInput
  userfiles: [UserfileInput]
}

input UsersmovementInput {
  id: Int!
  usersid: Int!
  transactiondate: String
  createuser: Int
  createtime: String
  entrytime: String
  exittime: String
  users: UserInput
}

input DistrictInput {
  id: Int!
  citysid: Int!
  districtname: String
  citys: CityInput
  userinfos: [UserinfoInput]
}

input UserfileInput {
  id: Int!
  usersid: Int!
  data: [String!]
  filetypesid: Int!
  extensitions: String
  createuser: Int
  createtime: String
  changeuser: Int
  changetime: String
  filetypes: FiletypeInput
  users: UserinfoInput
}
input CityInput {
  id: Int!
  cityname: String
  plateno: Int!
  districts: [DistrictInput]
  userinfos: [UserinfoInput]
}
input FiletypeInput {
  id: Int!
  typename: String
  userfiles: [UserfileInput]
}

  
`
const schemaType = buildASTSchema(parse(schema)).getType('UserInput');
const schemaExtras = {

};



const schemaValidator = (model) => {
  console.log("---- model")
  console.log(model)
    const details = [];



    return details.length ? { details } : null;
};

// console.table("GraphQLBridge", new GraphQLBridge(schemaType, schemaValidator, schemaExtras))
export const bridge = new GraphQLBridge(schemaType, schemaValidator, schemaExtras);
