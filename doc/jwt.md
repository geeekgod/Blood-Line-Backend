# JWT Manual

## Access Token Secret

- Open node runtime in terminal
- Type the following command
```
require('crypto').randomBytes(64).toString('hex')
```
- Output might look like
```
'd058aca9c99..................................................bee1958f21c7'
```
- Copy the output and store it in .env as given in .env.example
- JWT_ACCESS_TOKEN_SECRET='d058aca9c99..................................................bee1958f21c7'