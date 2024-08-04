import { expect, test } from "bun:test";
import { testHelper } from "./test";
import { screens, spacing } from "../index";


test("sm", () => {
    expect(testHelper([screens], '.foo {color: red; @screen sm {color: green;}}'))
        .toBe('.foo{color:red;@media (min-width:40rem){&{color:green}}}')
})

test("md", () => {
    expect(testHelper([screens], '.foo {color: red; @screen md {color: green;}}'))
        .toBe('.foo{color:red;@media (min-width:48rem){&{color:green}}}')
})

test("lg", () => {
    expect(testHelper([screens], '.foo {color: red; @screen lg {color: green;}}'))
        .toBe('.foo{color:red;@media (min-width:64rem){&{color:green}}}')
})

test("xl", () => {
    expect(testHelper([screens], '.foo {color: red; @screen xl {color: green;}}'))
        .toBe('.foo{color:red;@media (min-width:80rem){&{color:green}}}')
})

test("xxl", () => {
    expect(testHelper([screens], '.foo {color: red; @screen xxl {color: green;}}'))
        .toBe('.foo{color:red;@media (min-width:96rem){&{color:green}}}')
})