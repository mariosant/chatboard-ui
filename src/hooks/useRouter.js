import { useStoreon } from 'storeon/react';
import { routerKey } from '@storeon/router';

const useRouter = () => {
  const { [routerKey]: route } = useStoreon(routerKey);

  const push = (url) => (window.location.href = url);
  const replace = (url) => window.location.replace(url);

  return [route, { push, replace }];
};

export default useRouter;
