import { AxiosError } from "axios";

export const getError = (e: unknown) => {
  if (typeof e === 'string') {
      return e;
  } else if (Array.isArray(e) && e[0]?.message) {
      return e[0].message;
  }
  const error: AxiosError = e as AxiosError;
  const message = error.message;
  return message;
};
