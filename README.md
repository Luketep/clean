### Simple setup to start creating web apps with Node, Express and React

Installation:
```sh
$ git clone https://github.com/luketep/clean.git clean-react && cd clean-react
$ git checkout clean-react
$ nim install -g gulp
$ npm install
$ gulp watch
$ node app.js
```

You can now access the server at http://localhost:5555/

The folder structure:

    root/
        modules/
        src/
            css/
                site.css
            js/
                App.js
                main.js
            resources/
                favicon.ico
            index.html
        app.js
        CHANGELOG.md
        gulpfile.js
        package.json
        README.md
        WTFPL.md