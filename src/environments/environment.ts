// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: "http://lgferreyra.esy.es/lab4/",
  authUrl: "http://lgferreyra.esy.es/lab4/PHP/server/jwt/php/auth.php",
  geoUrl:"http://maps.googleapis.com/maps/api/geocode/json?"
};
