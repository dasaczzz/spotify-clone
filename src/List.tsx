import React from "react";
import { LinkedList, Song } from "./playlist";


const List: React.FC = () => {
  const linkedList = new LinkedList()

  const songOne = new Song('One', 'Rock')
  const songAfrica = new Song('Africa', 'Pop')
  const songRapGod = new Song('Rap God', 'Rap')
  const songWonder = new Song('I wonder', 'Pop')

  linkedList.append(songOne)
  linkedList.append(songAfrica)
  linkedList.append(songRapGod)
  linkedList.append(songWonder)

  linkedList.print()

  return (<h1>Hola mundo</h1>)
}

export default List