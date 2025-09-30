import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { children?: ReactNode }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", children, ...props }: AnchorProps) => {
      if (href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            {...props}
            className="text-primary underline-offset-4 transition-colors hover:text-primary/80"
          >
            {children}
          </a>
        )
      }

      return (
        <Link
          href={href}
          {...props}
          className="text-primary underline-offset-4 transition-colors hover:text-primary/80"
        >
          {children}
        </Link>
      )
    },
    ...components,
  }
}
