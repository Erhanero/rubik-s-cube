const uniqid = require("uniqid");

class Cube {

    static #cubes = [];

    constructor(name, description, imageUrl, difficultyLevel) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;

    }

    static getAll() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;