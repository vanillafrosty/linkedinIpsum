import "graphql-import-node";
import { resolveIndustries } from "./resolvers/industry-resolver";
import { bioCreate } from "./resolvers/bio-resolver";
import typeDefs from "./schema.graphql";

const resolvers = {
  Query: {
    industries: resolveIndustries,
  },
  Mutation: {
    bioCreate,
  },
};

const schema = { typeDefs, resolvers };

export default schema;
