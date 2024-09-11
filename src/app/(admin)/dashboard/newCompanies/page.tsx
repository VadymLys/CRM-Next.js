import Header from '@/app/components/header';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div>Some additional information</div>
    </>
  );
}
