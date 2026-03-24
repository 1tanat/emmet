import { tokenizeText } from "../tokenizer";

test("tokenizeText should return correct tokens", () => {
  const input = "ul#nav>li.item$*4>a{Item $}";
  const expectedTokens = ["ul", "nav", "li", "item", "a", "Item"];
  expect(tokenizeText(input)).toEqual(expectedTokens);
});
