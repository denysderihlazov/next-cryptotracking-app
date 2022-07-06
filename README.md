1) To create our Next.js app we need to use

npx create-next-app . --use-npm

2) To add TypeScript into our current app we need to

npm install touch-cli -g // library to create an empty file 

touch tsconfig.json // to create an empty tsconfig file

npm i -D typescript @types/react @types/node

npm run dev 

3) We need to rename couple of our files

_app.js => _app.tsx

index.js => index.tsx

//Okay now we can use TypeScript inside our app

tsconfig.json "allowJs": false,
tsconfig.json "strict": true, //this will control our code
tsconfig.json "strictPropertyInitialization": false,

4) We need to install eslint

npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

in root create file .eslintrc

{
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"semi": "off",
		"@typescript-eslint/semi": [
			"warn"
		],
		"@typescript-eslint/no-empty-interface": [
			"error",
			{
				"allowSingleExtends": true
			}
		]
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	]
}

6) 

we need to delete api folder

image.png

7) _app.tsx

import { AppProps } from '../node_modules/next/dist/shared/lib/router/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;

8) index.tsx

import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div>

    </div>
  );
}


9) setting up our stilelint

npm i -D stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard -legacy-peer-deps

10) We need to create .stylelintrc.json

{
	"extends": [
		"stylelint-config-standard",
		"stylelint-order-config-standard"
	],
	"plugins": [
		"stylelint-order"
	],
	"rules": {
		"indentation": [
			"tab"
		],
		"color-hex-case": "upper"
	}
}

11) Then we need to switch on our stylelint plugin in VS

in package.json in "scripts" add:

    "stylelint": "stylelint \"**/*.css\" --fix"

then in console write:

npm run stylelint 

and our css will be looking better

12) DEBUG

RUN >> ADDCONFIGURATION >> NODE.JS

then in launch.json we need to paste this; 

{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "attach",
			"name": "Launch Program",
			"skipFiles": [
				"<node_internals>/**"
			],
			"port": 9229
		}
	]
}

then in our package.json paste this next to "dev": 

    "debug": "cross-env NODE_OPTIONS='--inspect' next dev",

	npm i cross-env

	npm run debug

	PRESS F5 to open debug menu


13) LETS Clear our app 

_app.tsx

import { AppProps } from '../node_modules/next/dist/shared/lib/router/router'
import Head from '../node_modules/next/head';
import '../styles/globals.css'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>My App</title>
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;

14) Create _document.tsx in pages 



import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "../node_modules/next/document";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
    
}

export default MyDocument;

15) Clear our index.tsx

export default function Home(): JSX.Element {
    return (
        <div>

        </div>
    );
}

16) Delete Home.module.css

17) in global.css


html,
body {
	margin: 0;
	padding: 0;

	color: var(--black);
	background: #F5F6F8;

	font-family: "Noto Sans", sans-serif;
}

a {
	text-decoration: none;

	color: inherit;
}

* {
	box-sizing: border-box;
}

:root {
	--black: #3B434E;
	--gray-light: #EBEBEB;
	--white: white;
	--primary: #7653FC;
	--primary-hover: #573AEB;
	--red: #FC836D;
	--green: #1DC37E;
	--green-light: #C8F8E4;
	--font-family: "Noto Sans", sans-serif;
	/* stylelint-disable-next-line no-missing-end-of-source-newline */
}


18) add to _app.tsx in <Head />

<link rel='preconnect' href='https://fonts.gstatic.com' />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />

18) create components folder in root, then in components create index.ts and 



--) ClassName

npm i -D @types/classnames

import cn from 'classnames';

--) SVG

npm i -D @svgr/webpack

--) Date/Time

npm i date-fns