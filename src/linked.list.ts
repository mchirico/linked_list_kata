import { INode } from "./node";
export class LinkedList<T> {
  private head: INode<T> | null = null;
  private tail: INode<T> | null = null;
  private ptr: INode<T> | null = null;

  public append = (value: T): LinkedList<T> => {
    const node = this.newNode(value);

    if (this.empty()) {
      this.head = node;
      this.tail = this.head;
      this.tail.next = this.head;
      this.ptr = this.tail;
    }

    if (this.tail?.next) {
      node.next = this.tail.next;
      this.head = node;
      this.tail.next = node;
    }

    return this;
  };

  public get Head(): INode<T> | null {
    return this.head;
  }

  public get Tail(): INode<T> | null {
    return this.tail;
  }

  public get Next(): INode<T> | null {
    if (this.ptr?.next) {
      this.ptr = this.ptr.next;
    }
    return this.ptr;
  }

  private empty(): boolean {
    return this.head == null && this.tail == null;
  }

  private newNode = (value: T): INode<T> => {
    return { value, next: null, prev: null };
  };
}
