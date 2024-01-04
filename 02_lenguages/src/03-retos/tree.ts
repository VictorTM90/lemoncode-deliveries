interface Tree<T> {
  node: T | null
  nodeChildren?: Array<Tree<T>> 
}

type OtherTree <T> = (T | OtherTree<T>)[]

