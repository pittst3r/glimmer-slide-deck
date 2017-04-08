import Component, { tracked } from "@glimmer/component";

const BRACKET_LEFT = 91;
const BRACKET_RIGHT = 93;

export default class SlideDeck extends Component {
  @tracked current: number = 0;

  didInsertElement() {
    window.addEventListener('keypress', {
      handleEvent: this.keypressHandler = this.keypressHandler.bind(this)
    });
  }

  get meta(): object {
    return {
      title: 'Making a slide deck with Glimmer',
      author: 'Robbie Pitts',
      twitter: '@_robbiepitts',
      github: '@robbiepitts'
    };
  }

  private keypressHandler(ev: KeyboardEvent): void {
    let which = ev.which;
    let actionMap = {
      [BRACKET_LEFT]: this.back,
      [BRACKET_RIGHT]: this.forward
    };

    actionMap[which].apply(this);
  }

  private back(): void {
    this.current--;
  }

  private forward(): void {
    this.current++;
  }
}
