const app = require("../srv/index");
var request = require("supertest")(app);

describe("shell command runner tests", () => {
  it("API Running", () => {
    request
      .get("/")
      .expect(200)
      .end((error, result) => {
        expect(error).toBeFalsy();
        expect(result.text).toBe("API Running");
      });
  });
  it("Send valid command", async () => {
    const res = await request
      .post("/api/command")
      .send({ text: "uname -a" })
      .expect(200);
  });
  it("Send invalid command", async () => {
    const res = await request
      .post("/api/command")
      .send({ text: "name -a" })
      .expect(500);
  });
});
