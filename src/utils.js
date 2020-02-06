import React from 'react';
import { skip, filter } from 'rxjs/operators';

const useSharedState = subject => {
    const [value, setState] = React.useState(subject.getValue());
    React.useEffect(() => {
      const sub = subject.pipe(skip(1)).subscribe(s => setState(s));
      return () => sub.unsubscribe();
    });
    const newSetState = state => subject.next(state);
    return [value, newSetState];   
};

export {useSharedState};