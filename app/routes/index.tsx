import {
  ArticleList,
  Carousel,
  Categories,
  Footer,
  Nav,
  NewProduct,
  WhatsappButton,
} from '~/components'

export default function Index() {
  return (
    <>
      <Nav />
      <Carousel />
      <NewProduct />
      <WhatsappButton />
      <Categories />
      <ArticleList />
      <Footer />
    </>
  )
}
