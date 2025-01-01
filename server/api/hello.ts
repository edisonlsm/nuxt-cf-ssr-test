export default defineEventHandler(({ context }) => {
  return {
    keys: Object.keys(context)
  };
});