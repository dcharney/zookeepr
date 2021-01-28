const fs = require("fs");
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require("../lib/animals.js");
const { animals } = require("../data/animals");

test("creates an animal object", () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "jhgdja3ng2" },
        animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("jhgdja3ng2");
});