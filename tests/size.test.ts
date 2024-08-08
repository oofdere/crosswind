import { expect, test } from "bun:test";
import { size } from "../index";
import { testHelper } from "./test";

test("size", () => {
	expect(testHelper([size], ".foo {size: 1em}")).toBe(
		".foo{width:1em;height:1em}",
	);
});

test("size auto", () => {
	expect(testHelper([size], ".foo {size: auto}")).toBe(
		".foo{width:auto;height:auto}",
	);
});
