import Component, { tracked } from "@glimmer/component";
import DeckMeta from '../../../utils/deck-meta';

export default class BaseSlide extends Component {
  @tracked ordinal: number;

  @tracked args: {
    current: number | boolean,
    title: string,
    deckMeta: DeckMeta
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
