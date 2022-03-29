import { GraphQLBridge } from "uniforms-bridge-graphql";
import { buildASTSchema, parse } from "graphql";

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
  
`;

const schemaType = buildASTSchema(parse(schema)).getType("UserInput");
const schemaExtras = {};

const schemaValidator = (model) => {
  const details = [];

  if (!model.name) {
    details.push({
      message: "Name is required",
      name: "name",
      type: "required",
      value: model.name,
    });
  }

  if (!model.surname) {
    details.push({
      message: "Surname is required",
      name: "surname",
      type: "required",
      value: model.surname,
    });
  }

  if (!model.username) {
    details.push({
      message: "Username is required",
      name: "username",
      type: "required",
      value: model.username,
    });
  }
  if (!model.password) {
    details.push({
      message: "password is required",
      name: "password",
      type: "required",
      value: model.password,
    });
  }
  if (!model.usertypesid) {
    details.push({
      message: "usertypesid is required",
      name: "usertypesid",
      type: "required",
      value: model.usertypesid,
    });
  }

  return details.length ? { details } : null;
};

console.table(
  "GraphQLBridge",
  new GraphQLBridge(schemaType, schemaValidator, schemaExtras.fields)
);
export const bridge = new GraphQLBridge(
  schemaType,
  schemaValidator,
  schemaExtras
);
