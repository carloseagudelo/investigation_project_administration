const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const Project = require('../models/project.model');
const Contribution = require('../models/contribution.model');

const ProjectType = require("./types/project_type");
const ContributionType = require("./types/contribution_type");
const isTokenValid = require('../helper/validate');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        status: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args, context, info) {
        const { error, data } = await isTokenValid(context.token);
        if (error) {
          throw new Error(error);
        }
        let project = new Project({
          title: args.title,
          description: args.description,
          status: args.status,
          userId: data.id,
        });
        return project.save();
      }
    },
    addContribution: {
      type: ContributionType,
      args: {
        title: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        projectId: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      async resolve(parent, args) {
        const { error, data } = await isTokenValid(context.token);
        if (error) {
          throw new Error(error);
        }
        let contribution = new Contribution({
          title: args.title,
          description: args.description,
          userId: data.id,
          projectId: args.projectId
        });
        return contribution.save();
      }
    }
  }
});

module.exports = Mutation