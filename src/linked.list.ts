import { INode } from "./node";
export class LinkedList<T> {
  private head: INode<T> | null = null;
  private tail: INode<T> | null = null;
  private ptr: INode<T> | null = null;

  public append = (value: T): LinkedList<T> => {
    const node = this.newNode(value);

    if (this.empty()) {
      this.tail = node;
      this.tail.next = this.tail;
      this.tail.prev = this.tail;

      this.head = this.tail;

      return this;
    }

    if (this.tail?.next) {
      node.next = this.tail.next;
      node.prev = this.tail;
      if (this.head?.prev) {
        this.head.prev = node;
      }
      if (this.tail.prev === this.tail) {
        this.tail.prev = node;
      }
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
    } else {
      this.ptr = this.head;
    }
    return this.ptr;
  }

  public get Prev(): INode<T> | null {
    if (this.ptr?.prev) {
      this.ptr = this.ptr.prev;
    } else {
      this.ptr = this.head;
    }
    return this.ptr;
  }

  private empty(): boolean {
    return this.head == null || this.tail == null;
  }

  private newNode = (value: T): INode<T> => {
    return { value, next: null, prev: null };
  };
}
