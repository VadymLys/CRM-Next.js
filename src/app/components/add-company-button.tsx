'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Button from './button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'));

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
