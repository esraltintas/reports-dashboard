### Node & NPM

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm --version
nvm install node
nvm install --lts
```

You'll need Node and npm (or yarn) installed on your machine to run this project. You can verify your installations by running these commands:

````bash
node --version
npm --version

```### Install modules

```bash
npm install --global yarn
````

If you've cloned this repository, navigate into the directory and install the npm modules using this command:

```bash
yarn
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
