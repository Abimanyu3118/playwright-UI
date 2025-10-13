# playwright-UI
Playwright enables reliable end-to-end testing for modern web apps.

## Prerequisites

Before running the Playwright tests, make sure you have **Node.js** installed on your machine.  

> 💡 Use **NVM (Node Version Manager)** to manage Node.js versions easily.

### Install Node.js using NVM (optional but recommended)

```bash
# Install NVM (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash

# Activate NVM (restart terminal or source profile)
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install latest Node.js
nvm install node

# Use the installed version
nvm use node

# Verify Node.js and npm versions
node -v
npm -v

# Install dependencies including Playwright
npm install

# To run a sample test case
npm run test:login

#To open last HTML report run:
npx playwright show-report
