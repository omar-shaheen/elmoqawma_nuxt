module.exports = {
  apps: [
    {
      name: "elmoqawma",
      port: "3029",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
