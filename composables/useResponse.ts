export type Response<T> = {
  state?: 0 | 1;
  data: T;
  message?: string;
};

export default function useResponse<T>(
  data: T,
  state: 0 | 1 = 0,
  message: string = "成功",
): Response<T> {
  return {
    data,
    state,
    message,
  };
}
