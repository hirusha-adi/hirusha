import React from 'react'
import { translate } from '@docusaurus/Translate'
import Link from '@docusaurus/Link'
import { Icon } from '@iconify/react'
import type { Props } from '@theme/BlogPostItem/Footer/ReadMoreLink'

function ReadMoreLabel() {
  return <b>Read More</b>
}

export default function BlogPostItemFooterReadMoreLink(props: Props): JSX.Element {
  const { blogPostTitle, ...linkProps } = props
  return (
    <Link
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description: 'The ARIA label for the link to full blog posts from excerpts',
        },
        { title: blogPostTitle },
      )}
      style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
      {...linkProps}
    >
      <ReadMoreLabel />
      <Icon icon="ri:arrow-right-line"></Icon>
    </Link>
  )
}
