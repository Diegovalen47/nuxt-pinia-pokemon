export default class Pokemon {
  constructor(json) {
    this.id = json.id
    this.name = json.name
    this.image = json.image
    this.types = json.types
  }
}