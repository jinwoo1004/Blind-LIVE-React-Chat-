const http = 'http://172.16.150.20:';
const port = import.meta.env.VITE_SERVER_PORT || 3000;

const url = {
  base: http + port,
  api: `${http}${port}/api`,
};

export default url;
