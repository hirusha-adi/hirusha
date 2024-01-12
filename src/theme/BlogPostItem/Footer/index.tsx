import React from 'react'
import clsx from 'clsx'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import Tag from '@theme/Tag'
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink'
import { Icon } from '@iconify/react'
import { ReadingTime } from '../Header/Info/index'

import styles from './styles.module.scss'

export default function BlogPostItemFooter(): JSX.Element | null {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { tags, title, editUrl, hasTruncateMarker, date, formattedDate, readingTime, authors } =
    metadata

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker

  const tagsExists = tags.length > 0
  const authorsExists = authors.length > 0

  const renderFooter = isBlogPostPage

  if (!renderFooter) {
    return (
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.blogPostInfo}>
          {date && (
            <>
              <Icon icon="ri:calendar-line" />
              <time dateTime={date} className={styles.blogPostDate} itemProp="datePublished">
                {formattedDate}
              </time>
            </>
          )}
          {tagsExists && (
            <>
              <Icon icon="ri:price-tag-3-line" />
              <span className={styles.blogPostInfoTags}>
                {tags.map(({ label, permalink: tagPermalink }) => (
                  <Tag label={label} permalink={tagPermalink} key={tagPermalink} />
                ))}
              </span>
            </>
          )}
          {readingTime && (
            <>
              <Icon icon="ri:time-line" />
              <span className={clsx(styles.blogPostReadTime, 'blog__readingTime')}>
                <ReadingTime readingTime={readingTime} />
              </span>
            </>
          )}
          {truncatedPost && (
            <div
              className={clsx('readMore', {
                'col--3': tagsExists,
              })}
            >
              <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <footer
      className={clsx('row docusaurus-mt-lg', isBlogPostPage && styles.blogPostFooterDetailsFull)}
    >
      {truncatedPost && (
        <div
          className={clsx('col text--right', {
            'col--3': tagsExists,
          })}
        >
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  )
}
