export default function inlineCode(args: string[]): HTMLElement {
  let codeString = args[0];
  let textNode = document.createTextNode(codeString);
  let codeNode = document.createElement('code');

  codeNode.appendChild(textNode);

  return codeNode;
};
