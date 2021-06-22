require("jest");
const { Task } = require("../../models/task");
const { Group } = require('../../models/group');
const { User } = require('../../models/user');
const moment = require('moment');
const mongoose = require("mongoose");
const request = require("supertest");

describe("/api/tasks", () => {
    let server;
    let token;
    let group;
    let admin;
    let tasks;
    let members;

    const addNewUsers = async () => {


        admin = new User({ name: 'admin', email: 'admin@gmail.com', avatar_url: 'pic-url-usr1' });
        await User.collection.insertOne(admin);

        token = admin.generateAuthToken();

        members = [
            new User({ name: 'user4', email: 'user4@gmail.com', avatar_url: 'pic-url-usr4' }),
            new User({ name: 'user2', email: 'user2@gmail.com', avatar_url: 'pic-url-usr2' }),
            new User({ name: 'user3', email: 'user3@gmail.com', avatar_url: 'pic-url-usr3' })
        ];
    }
    const exec = async () => {
        await User.collection.insertMany(members);

        members = [...members, admin];
        group = new Group({
            title: "taskroom",
            description: "work flow management portal",
            admin,
            members,
            theme: 'primary'
        });
        await Group.collection.insertOne(group);

        tasks = [
            new Task({
                title: 'task1',
                description: 'task1 description',
                groupId: group._id,
                author: admin,
                dueTime: Date.now + 10000,
                creationTime: Date.now()
            }),
            new Task({
                title: 'task2',
                description: 'task2 description',
                groupId: group._id,
                author: admin,
                dueTime: Date.now + 10000,
                creationTime: Date.now()
            })
        ];
        await Task.collection.insertMany(tasks);
    }

    beforeEach(async () => {
        server = require("../../index");
    });
    afterEach(async () => {
        await Group.deleteMany({});
        await User.deleteMany({});
        await Task.deleteMany({});
        await server.close();
    });

    describe("GET /", () => {


        beforeEach(async () => {
            await addNewUsers();
            await exec();
        });

        it("should return all tasks for a given group", async () => {

            const res = await request(server)
                .get(`/api/tasks?groupId=${group._id}`)
                .set('x-auth-token', token)
                .send();

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(tasks.length);
            expect(res.body[0]).toHaveProperty('_id', 'groupId', 'description', 'title',
                'author', 'dueTime');
        });
    });

    describe('GET /:id', () => {

        beforeEach(async () => {
            await addNewUsers();
            await exec();
        });
        it('should return the task if request is valid', async () => {

            const res = await request(server)
                .get(`/api/tasks/${tasks[0]._id}?groupId=${group._id}`)
                .set('x-auth-token', token)
                .send();

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('_id', 'title', 'description', 'dueTime');
        });
        it('should send status 403 if the user is not a member of the group', async () => {

            token = new User({ name: 'user5', email: 'abcd@yahoo.com', avatar_url: 'user5-pic' })
                .generateAuthToken();

            const res = await request(server)
                .get(`/api/tasks/${tasks[0]._id}?groupId=${group._id}`)
                .set('x-auth-token', token)
                .send();

            expect(res.status).toBe(403);
        });
    });

    describe('POST /', () => {

        let task;

        const postTask = () => {

            return request(server)
                .post(`/api/tasks?groupId=${group._id}`)
                .set('x-auth-token', token)
                .send(task);
        }

        beforeEach(async () => {
            await addNewUsers();
            await exec();
            task = {
                title: 'task1',
                description: 'task1 description',
                dueTime: Date.now(),
                isCompleted: false
            }
        });
        afterEach(async () => {
            await Task.deleteMany({});
        })

        it('it should return the task for a valid request', async () => {

            const res = await postTask();

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('_id', 'title', 'description', 'dueTime', 'author');
            expect(res.body.author._id).toBe(admin._id.toHexString());
        });
        it('should save the task for a valid request', async () => {

            const res = await postTask();

            const newTask = await Task.findById(res.body._id);
            expect(newTask).toHaveProperty('_id', 'title', 'description', 'dueTime', 'author');
        });
    });

    describe('PUT /', () => {

    });

    describe('DELETE /', () => {

    });

});