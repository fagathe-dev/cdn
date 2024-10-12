const $: Element | NodeList | undefined = (selector: string) => {
  const result = document.querySelectorAll(selector)

  if (result.length === 1) {
    return result[0] as Element
  }

  if (result instanceof NodeList && result.length > 1) {
    return result
  }

  return undefined
}
