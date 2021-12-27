let chai = require("chai");
let chat_http = require("chai-http");
let server = require("../index").server;

chai.use(chat_http);

let requester = chai.request(server).keepOpen();

let should = chai.should();

describe("Test express server", () => {
  describe("Echo test", () => {
    it("Should echo Hello World!!!", (done) => {
      requester
        .post("/echo")
        .set("Content-Type", "text/plain")
        .send("Hello World!!!")
        .end((err, res) => {
          res.status.should.equal(200);
          res.text.should.equal("Hello World!!!");
          done();
        });
    });
  });
});
