const app = require("./test-server");
import { HTTP } from "../HTTP";

let server: any;

beforeAll(() => {
    server = app.listen(8000);
});

afterAll(() => server.close());

describe("HTTP", function () {
    const http = new HTTP("/api/v2", "http://localhost:8000");

    it("should return data on a GET request to existing endpoint", async () => {
        const data = await http.get("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });
        expect(data).toBe("hello from server");
    });

    it("should return data on a POST request to existing endpoint", async () => {
        const data = await http.post("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });
        expect(data).toBe("hello from server");
    });

    it("should return data on a PUT request to existing endpoint", async () => {
        const data = await http.put("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });
        expect(data).toBe("hello from server");
    });

    it("should return data on a DELETE request to existing endpoint", async () => {
        const data = await http.delete("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });
        expect(data).toBe("hello from server");
    });
});
