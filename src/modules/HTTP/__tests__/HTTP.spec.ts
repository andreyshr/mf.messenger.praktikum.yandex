import { HTTP } from "../HTTP";

describe("HTTP", function () {
    const http = new HTTP("/api/v2", "http://localhost:8000");

    http.request = jest
        .fn()
        .mockImplementation((url, options) =>
            Promise.resolve({ url, options })
        );

    it("should call http.request with args on GET", () => {
        http.get("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });

        expect(http.request).toHaveBeenCalledWith(
            "http://localhost:8000/api/v2/test",
            {
                data: {},
                headers: { "Content-Type": "application/json" },
                method: "GET",
            }
        );
    });

    it("should call http.request with args on POST", () => {
        http.post("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });

        expect(http.request).toHaveBeenCalledWith(
            "http://localhost:8000/api/v2/test",
            {
                data: {},
                headers: { "Content-Type": "application/json" },
                method: "GET",
            }
        );
    });

    it("should call http.request with args on PUT", () => {
        http.get("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });

        expect(http.request).toHaveBeenCalledWith(
            "http://localhost:8000/api/v2/test",
            {
                data: {},
                headers: { "Content-Type": "application/json" },
                method: "GET",
            }
        );
    });

    it("should call http.request with args on DELETE", () => {
        http.get("/test", {
            data: {},
            headers: { "Content-Type": "application/json" },
        });

        expect(http.request).toHaveBeenCalledWith(
            "http://localhost:8000/api/v2/test",
            {
                data: {},
                headers: { "Content-Type": "application/json" },
                method: "GET",
            }
        );
    });
});
