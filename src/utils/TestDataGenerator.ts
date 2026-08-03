export class TestDataGenerator {
  static uniqueNumber = Date.now();

  static companyName() {
    return `OpenAI Company ${this.uniqueNumber}`;
  }

  static contactFirstName() {
    return `William${this.uniqueNumber}`;
  }

  static dealTitle() {
    return `Automation Deal ${this.uniqueNumber}`;
  }
}
