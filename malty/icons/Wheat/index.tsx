import { IconWrapper, IconWrapperInterface } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const Wheat = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2a1 1 0 011 1v2.476c1.037-.565 2.31-.833 3.28-.532l.543-.541a1 1 0 011.414 1.414l-.581.583c.203.772.076 1.72-.257 2.581a1 1 0 01.838 1.696l-.586.588c.21.767.088 1.71-.245 2.575a1 1 0 01.83 1.697l-.585.588c.374 1.361-.302 3.278-1.34 4.328l-.004.004a3.122 3.122 0 01-3.307.715V23a1 1 0 01-2 0v-1.828a3.122 3.122 0 01-3.307-.715c-1.042-1.054-1.718-2.97-1.344-4.332l-.586-.588a1 1 0 01.831-1.7c-.333-.862-.455-1.805-.245-2.572l-.586-.588A1 1 0 016.6 8.98c-.333-.86-.46-1.807-.257-2.58l-.581-.582a1 1 0 011.414-1.414l.543.541c.97-.301 2.245-.033 3.28.532V3a1 1 0 011-1zm1.307 15.457c-.153.153-.252.34-.299.535.017.172.017.344.003.516a1.121 1.121 0 001.88.537c.637-.648 1.058-2.202.822-2.438-.231-.23-1.765.201-2.406.85zm-2.618-.004c-.637-.645-2.171-1.077-2.402-.846-.236.236.185 1.79.822 2.438a1.121 1.121 0 001.882-.535 2.983 2.983 0 01-.002-.518 1.108 1.108 0 00-.3-.54zm2.618-4.856c-.153.153-.252.34-.299.535.017.172.017.344.003.516a1.121 1.121 0 001.88.537c.637-.648 1.058-2.202.822-2.438-.231-.23-1.765.201-2.406.85zm-2.618-.004c-.637-.645-2.171-1.077-2.402-.846-.236.236.185 1.79.822 2.438a1.121 1.121 0 001.882-.535 2.983 2.983 0 01-.002-.518 1.108 1.108 0 00-.3-.54zm2.618-4.886c-.153.153-.252.34-.299.535.017.172.017.344.003.516a1.121 1.121 0 001.882.535l.009-.009c.58-.566.99-1.982.85-2.362l-.02-.015a1.011 1.011 0 01-.073-.082c-.348-.15-1.747.27-2.352.882zm-2.618-.004c-.601-.608-2-1.027-2.35-.879l-.072.083a1.02 1.02 0 01-.018.018c-.142.377.269 1.793.85 2.36l.008.008a1.121 1.121 0 001.884-.533 2.983 2.983 0 01-.002-.518 1.108 1.108 0 00-.3-.54z" />
    </g>
  );

export default Wheat;
