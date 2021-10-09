const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    role: {
      type: GraphQLString
    }
  })
});

module.exports = UserType