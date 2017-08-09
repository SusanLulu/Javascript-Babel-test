# Install Babel

![babeldemo](https://github.com/SusanLulu/Javascript-Babel-test/raw/master/babeltest.gif)

##### set up globally:

```
npm install -g babel-cli  

babel --version
```

##### install in file:

```
npm init
npm install --save-dev babel-preset-es2015

//paste into clipboard and then ctrl-v to Chrome
babel app.js.es6 --presets es2015 | pbcopy

//update app.js & after create html:<script src="app.js"></script>
babel app.js.es6 --presets es2015 > app.js

//create .babelrc and then no need to write --presets es2015
{
  presets:["es2015"]
}

//remove old app.js and run
babel app.js.es6 > app.js

```

###### Reference:
http://babeljs.io/blog/2015/10/31/setting-up-babel-6/


