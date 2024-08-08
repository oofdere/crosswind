import { expect, test } from "bun:test";
import { colorScheme } from "../index";
import { testHelper } from "./test";

test("light", () => {
	expect(
		testHelper([colorScheme], ".foo {color: red; @light {color: green;}}"),
	).toBe(".foo{color:red;@media (prefers-color-scheme:light){&{color:green}}}");
});

test("dark", () => {
	expect(
		testHelper([colorScheme], ".foo {color: red; @dark {color: green;}}"),
	).toBe(".foo{color:red;@media (prefers-color-scheme:dark){&{color:green}}}");
});
