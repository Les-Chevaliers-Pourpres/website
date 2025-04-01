export default class User {
  id?: number
  pseudo?: string
  constructor(data: User | null) {
    this.id = data?.id
    this.pseudo = data?.pseudo
  }
}
