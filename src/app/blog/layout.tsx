import { blogSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/blog'>) {
  return (
    <DocsLayout tree={blogSource.pageTree} {...baseOptions()} >
      {children}
    </DocsLayout>
  );
}
