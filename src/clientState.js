export const defaults = {
    notes: []
};
export const resolvers = [
    // note: (_, variables,  { cache, getCacheKey})
    `
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation {
        createNote(title: String!, content: String!, isImportant: Boolean!)
        editNote(id: String!, title: String!, content: String!)
    }
    type Note {
        id: Int!
        title: String!
        content: String!
    }
    `
];
export const typeDefs = {};
