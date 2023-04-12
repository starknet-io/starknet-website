import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { getCategories } from '../../database/categories'

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  return {
    pageContext: {
      pageProps: {
        categories: await getCategories()
      }
    }
  }
}
