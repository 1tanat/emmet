import { tokenizeText } from "../tokenizer.ts";

const input = "ul#nav>li.item$*4>a{Item $}";

console.log(tokenizeText(input));
expect.toEqual(["ul", "nav", "li", "item", "a", "Item"]);
