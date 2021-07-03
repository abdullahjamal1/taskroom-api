require("jest");
const { Comment } = require('../../models/comment');
const { Task } = require("../../models/task");
const { Group } = require('../../models/group');
const { User } = require('../../models/user');
const moment = require('moment');
const mongoose = require("mongoose");
const request = require("supertest");

describe("/api/comments", () => {
    let server;
    let token;
    let group;
    let admin;
    let task;
    let members;
    let comments;

    const loadSampleData = async () => {

        admin = new User({ name: 'admin', email: 'admin@gmail.com', avatar_url: 'pic-url-usr1' });

        members = [
            new User({ name: 'user4', email: 'user4@gmail.com', avatar_url: 'pic-url-usr4' }),
        ];
        group = new Group({
            title: "taskroom",
            description: "work flow management portal",
            admin,
            members,
            theme: 'primary'
        });
        task = new Task({
            title: 'task1',
            description: 'task1 description',
            groupId: group._id,
            author: admin,
            dueTime: Date.now + 10000
        });
        comments = [
            new Comment({
                message: 'message1',
                groupId: group._id,
                taskId: task._id,
                author: admin,
            }),
            new Comment({
                message: 'message2',
                groupId: group._id,
                taskId: task._id,
                author: admin,
            }),
        ];
    }
    const insertSampleData = async () => {

        await User.collection.insertOne(admin);

        token = admin.generateAuthToken();

        await User.collection.insertMany(members);

        members = [...members, admin];
        group.members = members;

        await Group.collection.insertOne(group);
        await Task.collection.insertOne(task);

        await Comment.collection.insertMany(comments);
    }

    beforeEach(async () => {
        server = require("../../index");
    });
    afterEach(async () => {
        await Comment.deleteMany({});
        await Group.deleteMany({});
        await User.deleteMany({});
        await Task.deleteMany({});
        await server.close();
    });

    describe("GET /", () => {


        beforeEach(async () => {
            await loadSampleData();
            await insertSampleData();
        });

        it("should return all comments for as given task", async () => {

            const res = await request(server)
                .get(`/api/comments?groupId=${group._id}&taskId=${task._id}`)
                .set('x-auth-token', token)
                .send();

            const result = await Comment.find({});

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(comments.length);
            expect(res.body[0]).toHaveProperty('_id', 'groupId', 'taskId', 'message',
                'author', 'creationTime');
        });
    });

    describe('POST /', () => {

        let comment;

        const postComment = () => {

            return request(server)
                .post(`/api/comments?groupId=${group._id}&taskId=${task._id}`)
                .set('x-auth-token', token)
                .send(comment);
        }

        beforeEach(async () => {
            await loadSampleData();
            await insertSampleData();
            comment = {
                message: 'comment3'
            }
        });
        afterEach(async () => {
            await Comment.deleteMany({});
        })

        it('it should return the comment for a valid request', async () => {

            const res = await postComment();

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('_id', 'groupId', 'taskId', 'message',
                'author', 'creationTime');

            expect(res.body.author._id).toBe(admin._id.toHexString());
        });
        it('should save the task for a valid request', async () => {

            const res = await postComment();

            const newComment = await Comment.findById(res.body._id);
            expect(newComment).toHaveProperty('_id', 'groupId', 'taskId', 'message',
                'author', 'creationTime');
        });
    });

    describe('PUT /', () => {

    });

    describe('DELETE /', () => {

    });

});