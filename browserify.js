var browserify = require('browserify')
var watchify = require('watchify')
var tsify = require('tsify')
var exorcist = require('exorcist')
var watch = require('node-watch')
var sass = require('node-sass')
var uglifyify = require('uglifyify')

var es3ify = require('es3ify')

var fs = require('fs')
var path = require('path')

var privateFiles = __dirname + '/private/'
var scssFiles = privateFiles + 'scss/'
var styleFilePath = scssFiles + 'style.scss'

var publicFiles = __dirname + '/public/FULL_MODULE_SUIT_files/'
var jsFileName = 'master.js'
var jsMapFileName = jsFileName + '.map'
var jsOutputFilePath = publicFiles + jsFileName
var jsMapOutput = publicFiles + jsMapFileName

var cssOutputFilePath = publicFiles + 'style.css'
var cssMapOutputFilePath = publicFiles + 'style.css.map'

var tsOpts = {
  compilerOptions: {
    noImplicitAny: false,
    noImplicitUseStrict: true,
    removeComments: true,
    allowJs: true,
    target: "ES3"
  }
}

var uglifyOpts = {
  global: true,
  mangle: true,
  sourceMap: false,
  compress: {
    sequences: true,
    dead_code: false,
    drop_debugger: false,
    booleans: true
  }
}

var b = browserify({
  debug: true,
  cache: {},
  packageCache: {},
  entries: [
    'private/index.tsx'
  ]
})

b.plugin(watchify, {
  delay: 1000,
  poll: true
})
b.plugin(tsify, tsOpts)


function stripInlineSourceMap(filePath) {
  console.log('Stripping inline sourceMap')
  var file = fs.readFileSync(filePath, { encoding: "utf-8", flag: "r" })
  // console.dir(file)
  var replaced = file.replace(/\/\/# sourceMappingURL=data:application\/json;charset=utf-8;base64(.*)\n/, "//# sourceMappingURL=data:application\/json;charset=utf-8;" + jsMapFileName  + "\n")
  return fs.writeFileSync(filePath, replaced)
}

function bundle(theBundle) {
  console.log('Bundling Javascript...')

  b.transform(uglifyify, uglifyOpts)
  b.transform(es3ify)
  var data = b.bundle()
  var js = fs.createWriteStream(jsOutputFilePath, { autoClose: true })
  data.pipe(exorcist(jsMapOutput))
  data.pipe(js)
  // console.dir(data)
}

b.on('error', function (error) {
  try {
    console.error('Error --', error)    
  } catch(err) {
    console.error('Error handling an error ---', err)
  }

  this.emit('end')
})
b.on('update', bundle)
b.on('bytes', function(bytes) {
  console.log(bytes + ' bytes written')
  setTimeout(function() {
    stripInlineSourceMap(jsOutputFilePath)
  }, 500)
})

function compileSass() {
  console.log('Compiling SASS')
  var result = sass.renderSync({
    file: styleFilePath,
    outputStyle: 'compressed',
    outFile: cssOutputFilePath,
    sourceMap: cssMapOutputFilePath
  })
  fs.writeFile(cssOutputFilePath, result.css, "utf-8", function(err) {
    if (err) return console.error(err.toString())
  })
  fs.writeFile(cssMapOutputFilePath, result.map, "utf-8", function(err) {
    if (err) return console.error(err.toString())
  })
  return result
}

console.log('Watching for SCSS changes', scssFiles)
watch(scssFiles, { recursive: true }, function(evt, name) {
  try {
    var result = compileSass()
  } catch (e) {
    console.error(e.toString())
    return
  }
  // console.log(result)
})

compileSass()
bundle()

