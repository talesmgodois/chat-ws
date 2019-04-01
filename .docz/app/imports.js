export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'documentation/header.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-header" */ 'documentation/header.mdx'),
}
