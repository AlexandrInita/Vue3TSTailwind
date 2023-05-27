import ICardTask from '../interface/ICardTask'

export class CardTask implements ICardTask {
  id: number = -1
  title: string | null = null
  text: string | null = null
  list: number | null = null

  constructor(obj: ICardTask) {
    this.id = obj && obj?.id || -1
    this.title = obj && obj?.title || null
    this.text = obj && obj?.text || null
    this.list = obj && obj?.list || null
  }
}