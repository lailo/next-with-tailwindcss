import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout, { Props as LayoutProps } from './Layout'
import Text from '@components/Text'
import List from '@components/List'

const components = {
  h1: ({ children }) => (
    <Text h1 className="mb-4">
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text h2 className="mb-4">
      {children}
    </Text>
  ),
  h3: ({ children }) => (
    <Text h3 className="mb-4">
      {children}
    </Text>
  ),
  h4: ({ children }) => (
    <Text h4 className="mb-4">
      {children}
    </Text>
  ),
  h5: ({ children }) => (
    <Text h5 className="mb-4">
      {children}
    </Text>
  ),
  h6: ({ children }) => (
    <Text h6 className="mb-4">
      {children}
    </Text>
  ),
  p: ({ children }) => <Text className="mb-4">{children}</Text>,
  strong: ({ children }) => (
    <Text bold className="mb-4">
      {children}
    </Text>
  ),
  sub: ({ children }) => (
    <Text small className="mb-4">
      {children}
    </Text>
  ),
  ul: ({ children }) => <List className="mb-4">{children}</List>,
  ol: ({ children }) => (
    <List ordered className="mb-4">
      {children}
    </List>
  ),
  li: ({ children }) => <List item>{children}</List>,
}

const LayoutMDX: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  )
}

export default LayoutMDX
