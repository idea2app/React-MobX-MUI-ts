import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type TSXSampleProps = PropsWithChildren<{
  title: string;
}>;

export const TSXSample: FC<TSXSampleProps> = ({ title, children }) => (
  <>
    <Typography variant="h2">{title}</Typography>
    {children}
    {/* <CodeBlock language="tsx">{children}</CodeBlock> */}
  </>
);
