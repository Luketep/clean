### Simple setup to start creating web apps with Node & Express

Installation:
```sh
$ git clone https://github.com/luketep/clean.git && cd clean
$ npm install
$ nom install -g gulp
$ gulp watch
$ node app.js
```

You can now access the server at http://localhost:5555/

CSS:
- site.css : your custom css for your app
- starter-template.css : bootstrap starter template

The folder structure:

    root/
        modules/
        src/
            css/
                libs/
                    bootstrap.min.css
                starter-template.css
                site.css
            js/
                libs/
                    backbone-min.js
                    backbone-min.map
                    bootstrap-min.js
                    jquery-min.js
                    json2-min.js
                    mustache.js
                    require-min.js
                    text.js
                    underscore-min.js
                    underscore-min.map
                app.js
                configuration.js
            resources/
                favicon.ico
            index.html
        app.js
        CHANGELOG.md
        gulpfile.js
        package.json
        README.md
        WTFPL.md