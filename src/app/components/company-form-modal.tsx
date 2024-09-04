'use client';

import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface CompanyFormModalsProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalsProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
