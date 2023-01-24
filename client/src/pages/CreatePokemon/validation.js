function validation (state) {
    let stringRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    let numberRegex = /^[0-9]+$/

    let errors = {}

    if (!state.name) {
        errors.name = "Please insert a name";
    } else if (state.name) {
        if (!stringRegex.test(state.name)) {
            errors.name = "The name cannot contain numbers or signs";
        } else {
            errors.name = "";
        }
    }
    if (!state.hp) {
        errors.hp = "Please insert a hp";
    } else if (state.hp) {
        if (numberRegex.test(state.hp) && state.hp <= 255 && state.hp > 0) {
            errors.hp = "";
        } else {
            errors.hp = "HP cannot exceed 255";
        }
    }
    if (!state.attack) {
        errors.attack = "Please insert a attack";
    } else if (state.attack) {
        if (numberRegex.test(state.attack) && state.attack <= 255 && state.attack > 0) {
            errors.attack = "";
        } else {
            errors.attack = "Attack cannot exceed 255";
        }
    }
    if (!state.defense) {
        errors.defense = "Please insert a defense";
    } else if (state.defense) {
        if (numberRegex.test(state.defense) && state.defense <= 255  && state.defense > 0) {
            errors.defense = "";
        } else {
            errors.defense = "Defense cannot exceed 255";
        }
    }
    if (!state.speed) {
        errors.speed = "Please insert a speed";
    } else if (state.speed) {
        if (numberRegex.test(state.speed) && state.speed <= 255  && state.speed > 0) {
            errors.speed = "";
        } else {
            errors.speed = "Speed cannot exceed 255";
        }
    }
    if (!state.height) {
        errors.height = "Please insert a height";
    } else if (state.height) {
        if (numberRegex.test(state.height) && state.height <= 1000  && state.height > 0) {
            errors.height = "";
        } else {
            errors.height = "Height cannot exceed 255";
        }
    }
    if (!state.weight) {
        errors.weight = "Please insert a weight";
    } else if (state.weight) {
        if (numberRegex.test(state.weight) && state.weight <= 1000  && state.weight > 0) {
            errors.weight = "";
        } else {
            errors.weight = "Weight cannot exceed 255";
        }
    }
    if (!state.abilityOne) {
        errors.abilityOne = "Please invent a skill";
    } else if (state.abilityOne) {
        if (!stringRegex.test(state.abilityOne)) {
            errors.abilityOne = "The skill cannot contain numbers or signs";
        } else {
            errors.abilityOne = "";
        }
    }
    if (!state.abilityTwo) {
        errors.abilityTwo = "Please invent another skill";
    } else if (state.abilityTwo) {
        if (!stringRegex.test(state.abilityTwo)) {
            errors.abilityTwo = "The skill cannot contain numbers or signs";
        } else {
            errors.abilityTwo = "";
        }
    }
    if (!state.moveOne) {
        errors.moveOne = "Please invent a move";
    } else if (state.moveOne) {
        if (!stringRegex.test(state.moveOne)) {
            errors.moveOne = "The move cannot contain numbers or signs";
        } else {
            errors.moveOne = "";
        }
    }
    if (!state.moveTwo) {
        errors.moveTwo = "Please invent another move";
    } else if (state.moveTwo) {
        if (!stringRegex.test(state.moveTwo)) {
            errors.moveTwo = "The move cannot contain numbers or signs";
        } else {
            errors.moveTwo = "";
        }
    }
    return errors;
}

export default validation;