import { Song } from "./playlist"

export class LinkedList {

  private head: Node|null = null
  private tail: Node|null = null
  private length: number = 0

  getHead() {
    return this.head
  }

  append(song: Song) {
    const newNode = new Node()

    newNode.setValue(song)
    if(!this.head) {
      this.head = newNode
    } else {
      this.tail?.setNext(newNode)
    }

    this.tail = newNode
    this.length++
  }

  size() {
    return this.length
  }

  toArray() {
    let current = this.head
    const array = []
    while(current) {
      array.push(current.getValue())
      current = current.getNext()
    }
    return array
  }
}

class Node{
  private value: Song = new Song()
  private next: Node|null = null

  getValue() {
    return this.value
  }

  getNext() {
    return this.next
  }

  setValue(value: Song) {
    this.value = value
  }

  setNext(node: Node) {
    this.next = node
  }
}