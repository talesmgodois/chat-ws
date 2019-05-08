export default class User {
  constructor(params) {
    const { name, email, status, picture } = params;
    this.name = name;
    this.email = email;
    this.status = status;
    this.picture = picture;
  }
}
