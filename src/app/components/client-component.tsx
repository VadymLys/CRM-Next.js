export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ServerComponentProps) {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
