# Historische kranten 1700

## Copy kranten1700 XML between 85k and 90k
$ cd $DIR_WITH_ORIGINALS
$ find -type f -size +85k -size -90k -name "*.xml" -exec cp {} $BASE/docere-config/projects/kranten1700/xml/ \;

## Rename original files
Example original file: historischekranten_45675_28890_3163.tok.frogmodernized.folia.xml
Example renamed file: 45675_28890_3163.xml

$ cd $SOME_PATH/docere-config/projects/kranten1700/xml
$ node
> const files = fs.readdirSync('.')
> for (const file of files) fs.renameSync(file, file.split(/\.|_/).slice(1,4).join('_').concat('.xml'))
