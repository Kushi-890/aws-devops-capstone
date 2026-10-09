
const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / returns the API status", async () => {
    const response = await request(app).get("/");

    assert.equal(response.status, 200);
    assert.equal(response.body.status, "success");
    assert.equal(
        response.body.message,
        "AWS DevOps Capstone API is running"
    );
});

test("POST /api/users rejects missing name and email", async () => {
    const response = await request(app)
        .post("/api/users")
        .send({});

    assert.equal(response.status, 400);
    assert.equal(response.body.status, "error");
    assert.equal(response.body.message, "Name and email are required");
});