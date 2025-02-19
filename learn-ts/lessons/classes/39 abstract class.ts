abstract class Clock {
  protected hours: number;
  protected minutes: number;
  protected seconds: number;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds
  }

  tick() {
    if (this.seconds < 59) {
      this.seconds += 1;
    } else {
      this.seconds = 0;
      if (this.minutes < 59) {
        this.minutes += 1;
      } else {
        this.minutes = 0;
        if (this.hours < 23) {
          this.hours += 1;
        } else {
          this.hours = 0;
        }
      }
    }
  }

  render() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}
