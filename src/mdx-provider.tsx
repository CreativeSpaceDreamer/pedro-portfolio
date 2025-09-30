import type { ReactNode } from "react"
import type { MDXComponents } from "mdx/types"

const defaultComponents: MDXComponents = {}

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return { ...defaultComponents, ...components }
}

export function MDXProvider({ children }: { components?: MDXComponents; children?: ReactNode }) {
  return <>{children}</>
}
