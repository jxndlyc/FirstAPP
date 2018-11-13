import Student from "./Student"

export default class MingStudent extends Student {

    constructor() {
        super('小明', '男', '20')
    }

    getDescription() {
        return '子类----' + super.getDescription();
    }
}


