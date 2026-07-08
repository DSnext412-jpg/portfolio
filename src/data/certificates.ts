// src/data/certificates.ts
export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  image: string
  credentialId?: string
  verificationUrl?: string
}

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'React Developer Certification',
    issuer: 'Meta',
    issueDate: '2024-01-15',
    image: '/images/certificates/react-developer.jpg',
    credentialId: 'react-cert-12345',
    verificationUrl: 'https://certificates.meta.com/verify/react-12345',
  },
  {
    id: '2',
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2023-06-20',
    image: '/images/certificates/aws-sa.jpg',
    credentialId: 'aws-sa-67890',
    verificationUrl: 'https://aws.amazon.com/certificates/verify/67890',
  },
]
