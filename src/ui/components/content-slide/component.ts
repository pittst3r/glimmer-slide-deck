import BaseSlide from '../base-slide/component';
import { tracked } from "@glimmer/component";

export default class ContentSlide extends BaseSlide {
  get headerText() {
    let { title, author, twitter, github } = this.args.deckMeta;

    return `${title} / ${author} / twitter: ${twitter} / github: ${github}`;
  }
}
