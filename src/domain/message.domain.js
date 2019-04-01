export default class Message {
    constructor(params) {
        this.content = params.content;
        this.user = params.user;
        this.type = params.type;
        this.dateTime = params.dateTime;
    }
}
