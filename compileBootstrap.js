
var sass = require('node-sass')
var fs = require('fs')
var uglify = require('uglify-js')
var stripCssComments = require('strip-css-comments')

var outputFolder = './public/TEST_20_ES_files/'

/** https://github.com/sass/node-sass */
var sassOpts = {
  file: './private/bootstrap-sass-3.3.6/assets/stylesheets/_bootstrap.scss',
  outFile: outputFolder + 'bootstrap.css',
  outputStyle: 'compressed',
  sourceMap: true,
  sourceComments: false,
}

/** https://github.com/mishoo/UglifyJS2 */
var uglifyOpts = {
  compress: {

  },
  sourceMap: {
    // filename: outputFolder + 'bootstrap.js.map',
    url: 'bootstrap.js.map'
  }
}

// console.log(result.css)
// console.log(result.map)
// console.log(result.stats)

// var CleanCSS = require('clean-css')
// var css = new CleanCSS().minify(result.css)
// var css = result.css

function compileCss() {
  var result = sass.renderSync(sassOpts)
  var css = stripCssComments(result.css, { preserve: false }) /* preserve: false will remove important comments */

  /** Output the CSS */
  fs.writeFile(outputFolder + 'bootstrap.css', css, function(err) {
    if(err) {
      console.log(err)
      throw err
    }
    console.log('Bootstrap CSS was compiled!')
  })

  /** Generate a sourcemap if its set in the options */
  if (sassOpts.sourceMap) {
    fs.writeFile(outputFolder + 'bootstrap.css.map', result.map, function(err) {
      if(err) {
        console.log(err)
        throw err
      }
      console.log('Bootstrap CSS sourcemap was generated!')
    })
  }
}

function compileJs() {

  /** Concatenate the javascript */
  var bsFiles = [
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/affix.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/alert.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/button.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/carousel.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/collapse.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/dropdown.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/modal.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/scrollspy.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/tab.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/transition.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/tooltip.js',
    './private/bootstrap-sass-3.3.6/assets/javascripts/bootstrap/popover.js'
  ]

  var concatenatedBootstrapJs = uglify.minify(bsFiles, uglifyOpts)

  fs.writeFile(outputFolder + 'bootstrap.js', concatenatedBootstrapJs.code, function(err) {
    if(err) {
      console.log(err)
      throw err
    }
    console.log('Bootstrap javascript was compiled!')
  })

  /** supposed to generate the sourcemap for the js, but returns null for some reason */
  // fs.writeFile(outputFolder + 'bootstrap.js.map', concatenatedBootstrapJs.map, function(err) {
  //   if(err) {
  //     console.log(err)
  //     throw err
  //   }
  //   console.log('Bootstrap javascript source map was generated!')
  // })
}


// console.log(concatenatedBootstrapJs.map)

compileJs()
compileCss()
