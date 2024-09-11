'use client';

export interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return <div>Unexpected error in sales page</div>;
}
