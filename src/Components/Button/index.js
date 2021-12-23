import React from 'react'
import { Button} from './style.js';

export default function ButtonCostum({primary, children}) {
  return (
    primary ? <Button primary>{children}</Button> : <Button>{children}</Button>
  );
}
