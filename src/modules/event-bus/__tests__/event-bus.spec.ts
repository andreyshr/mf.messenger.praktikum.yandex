import {EventBus} from "../event-bus";

describe("EventBus", function() {
    const eventBus = new EventBus();

    it("eventBus instanceof EventBus", function() {
        expect(eventBus instanceof EventBus).toBe(true);
    });

    it("eventBus add callback on event", function() {
        const mockCallback = jest.fn(prop => prop);
        eventBus.on("event", mockCallback);

        expect(eventBus.listeners["event"][0]).toBe(mockCallback);
    });

    it("eventBus call callback on emit event", function() {
        const mockCallback = jest.fn(prop => prop);
        eventBus.on("event", mockCallback);
        eventBus.emit("event", "prop");

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
