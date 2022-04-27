# PrivJs.com Access Verification

Library to verify access to a privjs package

## How to use?
```
import { checkPrivJsAccess } from '@privjs/verify'

async main() {
  const hasAccess = await checkPrivJsAccess(<package-name>) // true | false
  if (hasAccess === true) {
    // User has access
  } else {
    // user does not have access
  }
}
```

## How it works
The package reads the `PRIVJS_TOKEN` value from the env variables and uses it to verify access to the package

## End-user project configuration
The user needs to add a valid `PRIVJS_TOKEN` as an env variable to the project.