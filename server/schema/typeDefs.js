const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        password: String
        posts: [Post]!
    }

    type Post{
        _id: ID
        postText: String
        postAuthor: String
        createdAt: String
        comments: [Comment]!
        tags: [Tag]!
    }

    type Comment{
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Tag{
        _id: ID
        tagName: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(postId: ID!): Post
        me: User
    }
`;

module.exports = typeDefs;