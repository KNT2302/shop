export const wait = (duaration: any, timer: any) => {
  return new Promise((resolve) => {
    timer.current = setTimeout(resolve, duaration);
  });
};
