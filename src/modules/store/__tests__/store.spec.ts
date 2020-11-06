import Store from "../store";

describe("Store", function() {
    const store = new Store();

    it("should set/get value", function () {
        store.set("prop", "value");

        expect(store.get("prop")).toEqual("value");
    });
});
