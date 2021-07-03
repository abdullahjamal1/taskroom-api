require("jest");
const mongoose = require("mongoose");
const request = require("supertest");
const { Group } = require('../../models/group');
const { User } = require('../../models/user');

describe("/api/groups", () => {
    let server;

    beforeEach(async () => {
        server = require("../../index");
    });
    afterEach(async () => {
        await Group.deleteMany({});
        await User.deleteMany({});
        await server.close();
    });

    describe("GET /", () => {
        it("should return all groups of which user is the member", async () => {


        });
    });

    describe('GET /:id', () => {
        it('should return the particular group only if user is member', async () => {

        });
        it('should send status 403 if the user is not a member of the group', async () => {

        });
    })

    describe('POST /', () => {

        // Define the happy path, and then in each test, we change
        // one parameter that clearly aligns with the name of the test

        let token;
        let group;
        let admin;
        let members;
        let emails;

        const exec = () => {

            return request(server)
                .post('/api/groups')
                .set('x-auth-token', token)
                .send(group);
        }

        beforeEach(async () => {

            admin = new User({ name: 'admin', email: 'admin@gmail.com', avatar_url: 'pic-url-usr1' });
            await admin.save();

            token = admin.generateAuthToken();

            members = [
                { name: 'user4', email: 'user4@gmail.com', avatar_url: 'pic-url-usr4' },
                { name: 'user2', email: 'user2@gmail.com', avatar_url: 'pic-url-usr2' },
                { name: 'user3', email: 'user3@gmail.com', avatar_url: 'pic-url-usr3' }
            ];

            await User.collection.insertMany(members);

            emails = members.map(member => member.email);

            group = {
                title: "taskroom",
                description: "work flow management portal",
                members: emails,
                theme: 'primary'
            };
        });


        it('it should return the group for a valid request', async () => {

            const res = await exec();

            console.log(res.text);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('title', 'description', 'admin',
                'members', 'theme');
            expect(res.body.admin._id).toBe(admin._id.toHexString());
            expect(res.body.members).toHaveLength(members.length);
        });
        it('it should save the group if it is valid ', async () => {

            const res = await exec();

            const newGroup = await Group.findById(res.body._id);

            expect(newGroup).toHaveProperty('title', 'description', 'admin',
                'members', 'theme');
        });
        it('should add groupId to each of the users collection who are members', async () => {

            const res = await exec();

            // admin is also a member of the group
            emails.push(admin.email);
            const users = await User.find({ email: { $in: emails } });
            users.map(user => expect(user.groups).toContain(res.body._id));
        });

    });

});