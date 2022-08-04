export default {
  Query: {
    _: async (parentValue, args, { ctx }, info) => {
      return "Hello Query"
    },
  },
  Mutation: {
    _: async (parentValue, args, { ctx }, info) => {
      return "Hello Mutation"
    },
  },
};
