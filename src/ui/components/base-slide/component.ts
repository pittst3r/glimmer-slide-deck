import Component, { tracked } from "@glimmer/component";

export default class BaseSlide extends Component {
  @tracked ordinal: number;

  @tracked args: {
    current: number | boolean,
    title: string,
    deckMeta: {
      title: string,
      author: string,
      twitter: string,
      github: string
    }
  };

  @tracked('args', 'ordinal') get currentClass(): string {
    if (this.args.current === this.ordinal) return '';

    return 'hidden';
  }

  didInsertElement(): void {
    let siblings = (this.element.parentNode as Element).getElementsByClassName('slide');
    let currentOrdinal = 0;

    do {
      if (siblings[currentOrdinal] === this.element) {
        this.ordinal = currentOrdinal;
        break;
      }
      currentOrdinal++;
    } while (currentOrdinal <= siblings.length);
  }
}
