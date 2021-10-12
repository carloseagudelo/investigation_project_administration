const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require("./user_type");
const ProjectType = require("./project_type");

const User = require("../../models/user.model");
const Project = require("../../models/project.model");

const ContributionType = new GraphQLObjectType({
  name: 'contribution',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById( parent.userId )
      }
    },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById( parent.projectId )
      }
    }
  })
});

module.exports = ContributionType
