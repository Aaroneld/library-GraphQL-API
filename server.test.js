const server = require("./server");
const request = require("supertest");

describe("Ascertains link to datagraph layer", () => {
    let status;

    beforeEach(async () => {
        status = await request(server).post("/graphql").send({
            query: `query { hello }`,
        });
    });

    test("returns hello", () => {
        console.log(status.body);
        expect(status.body.data).toMatchObject({ hello: "hello" });
    });
});
