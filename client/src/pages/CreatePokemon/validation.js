function validation (state) {
    let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    let numberRegex = /^[0-9]+$/

    let error = {}

    if (!state.name) {
        error.name = "Please insert a name";
    } else if (state.name) {
        if (!stringRegex.test(state.name)) {
            error.name = "The name cannot contain numbers or signs";
        }
    }
    if (!state.hp) {
        error.hp = "Please insert a hp";
    } else if (state.hp) {
        if (!numberRegex.test(state.hp) || state.hp > 255 || state.hp <= 0) {
            error.hp = "HP cannot exceed 255";
        }
    }
    if (!state.attack) {
        error.attack = "Please insert a attack";
    } else if (state.attack) {
        if (!numberRegex.test(state.attack) || state.attack > 255 || state.attack <= 0) {
            error.attack = "Attack cannot exceed 255";
        }
    }
    if (!state.defense) {
        error.defense = "Please insert a defense";
    } else if (state.defense) {
        if (!numberRegex.test(state.defense) || state.defense > 255 || state.defense <= 0) {
            error.defense = "Defense cannot exceed 255";
        }
    }
    if (!state.speed) {
        error.speed = "Please insert a speed";
    } else if (state.speed) {
        if (!numberRegex.test(state.speed) || state.speed > 255 || state.speed <= 0) {
            error.speed = "Speed cannot exceed 255";
        }
    }
    if (!state.height) {
        error.height = "Please insert a height";
    } else if (state.height) {
        if (!numberRegex.test(state.height) || state.height > 255 || state.height <= 0) {
            error.height = "Height cannot exceed 255";
        }
    }
    if (!state.weight) {
        error.weight = "Please insert a weight";
    } else if (state.weight) {
        if (!numberRegex.test(state.weight) || state.weight > 999 || state.weight <= 0) {
            error.weight = "Weight cannot exceed 999";
        }
    }
    if (!state.abilityOne) {
        error.abilityOne = "Please invent a skill";
    } else if (state.abilityOne) {
        if (!stringRegex.test(state.abilityOne)) {
            error.abilityOne = "The skill cannot contain numbers or signs";
        }
    }
    if (!state.abilityTwo) {
        error.abilityTwo = "Please invent another skill";
    } else if (state.abilityTwo) {
        if (!stringRegex.test(state.abilityTwo)) {
            error.abilityTwo = "The skill cannot contain numbers or signs";
        }
    }
    if (!state.moveOne) {
        error.moveOne = "Please invent a move";
    } else if (state.moveOne) {
        if (!stringRegex.test(state.moveOne)) {
            error.moveOne = "The move cannot contain numbers or signs";
        }
    }
    if (!state.moveTwo) {
        error.moveTwo = "Please invent another move";
    } else if (state.moveTwo) {
        if (!stringRegex.test(state.moveTwo)) {
            error.moveTwo = "The move cannot contain numbers or signs";
        }
    }
    return error;
}

export default validation;