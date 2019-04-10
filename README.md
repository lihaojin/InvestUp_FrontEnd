# InvestUp FrontEnd

**InvestUp** is a chatbot web application trained with IBM Watson Assistant that educates new investors on the process of investment and how to begin. Investup is capable of retrieving real-time stock prices and relevant news articles using the IEX market data API. This chatbot is developed with a user friendly messenger interface using React JS that can be incorporated into any website.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.0.0
    
    $ npm --version
    5.6.1

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

## Install

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm start


**Note:** If cross-origin read blocking (CORB) is creating an issue with API calls, try to run on firefox using "BROWSER=firefox npm start"

## Price of any stock
<img src='https://github.com/lihaojin/InvestUp_FrontEnd/blob/master/gifs/price.gif' />

## Relevant news on any stock
<img src='https://github.com/lihaojin/InvestUp_FrontEnd/blob/master/gifs/news.gif' />

## How to invest?
<img src='https://github.com/lihaojin/InvestUp_FrontEnd/blob/master/gifs/howtoinvest.gif' />

## What do I need to invest?
<img src='https://github.com/lihaojin/InvestUp_FrontEnd/blob/master/gifs/whatdoineed.gif' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).



## License

    Copyright [2019] [Haojin Li]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
