import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

import { CodeBlock } from 'idea-react';
import { FC, PropsWithChildren } from 'react';

export type TSXSampleProps = PropsWithChildren<{
    title: string;
}>;

export const TSXSample: FC<TSXSampleProps> = ({ title, children }) => (
    <>
        <h2 className="mt-3">{title}</h2>
        {children}
        <CodeBlock language="tsx">{children}</CodeBlock>
    </>
);
