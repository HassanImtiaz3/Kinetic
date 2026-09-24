import { FooterArea } from '@/shared/components/layout/FooterArea';
import { Nav } from '@/shared/components/layout/Nav';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <FooterArea />
    </>
  );
}
