module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://football-site-backend.herokuapp.com/",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9bfca35eb8527df0e11fa4e5ae6ed249"),
    },
  },
});
