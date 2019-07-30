# Historische kranten 1700

## Rename original files
Example original file: historischekranten_45675_28890_3163.tok.frogmodernized.folia.xml
Example renamed file: 45675_28890_3163.xml

$ cd $SOME_PATH/docere-config/projects/kranten1700/xml
$ node
> const files = fs.readdirSync('.')
> for (file of const files) for (const file of files3) fs.renameSync(file, file.split(/\.|_/).slice(1, 4).join('_').concat('.xml'))
