export const success = (statusCode, data) => ({
  statusCode,
  body: JSON.stringify(data),
});

export const error = (statusCode, message) => ({
  statusCode,
  body: JSON.stringify({ error: message }),
});
