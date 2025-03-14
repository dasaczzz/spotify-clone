// interface Clonable<T> {
//   clon(): T
//}

// class Playlist implements Clonable<Playlist> {
//   constructor(private title: string, private songs: LinkedList, private genre: string) {}
// }

export class Song {
  constructor(private name: string, private genre: string) {}
}

class Node{
  constructor(private value: Song, private next: Node|null = null) {}

  getValue() {
    return this.value
  }

  getNext() {
    return this.next
  }

  setNext(node: Node) {
    this.next = node
  }
}

export class LinkedList {

  constructor(private head: Node|null = null, private tail: Node|null = null, private length: number = 0) {}

  append(song: Song) {
    const newNode = new Node(song)
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

  print() {
    let current = this.head
    while (current) {
      console.log(current.getValue())
      current = current.getNext()
    }
    
  }
  
}