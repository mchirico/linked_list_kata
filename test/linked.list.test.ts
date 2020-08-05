import { expect } from "chai";
import { LinkedList } from "../src/linked.list";

describe("Linked List", () => {
  it("can have head and tail", () => {
    const linkList = new LinkedList<string>();
    linkList.append("one");
    linkList.append("two");
    linkList.append("three");

    console.log(linkList.Head?.value);
    expect(linkList.Head?.value).to.equal("three");
    expect(linkList.Tail?.value).to.equal("one");
  });

  it("can have Next", () => {
    const linkList = new LinkedList<string>();
    linkList.append("one");
    linkList.append("two");
    linkList.append("three");

    const result = [];
    result.push(linkList.Next?.value);
    result.push(linkList.Next?.value);
    result.push(linkList.Next?.value);
    result.push(linkList.Next?.value);
    result.push(linkList.Next?.value);
    result.push(linkList.Next?.value);
    console.log(result);
    // Note.. use to.eql
    expect(result).to.eql(["three", "two", "one", "three", "two", "one"]);
  });

  it("can have Prev", () => {
    const linkList = new LinkedList<string>();
    linkList.append("one");
    linkList.append("two");
    linkList.append("three");

    const result = [];
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);
    result.push(linkList.Prev?.value);

    console.log("test: ", result);
    const expected = ["three", "one", "two", "three", "one", "two", "three"];
    // Note.. use to.eql
    expect(result).to.eql(expected);
  });
});
