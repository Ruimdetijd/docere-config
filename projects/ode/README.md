# 

## Links
- http://corpora.ugr.es/ode/

## Download
- xml: `wget -r -np -nH -nc http://corpora.ugr.es/ode/xmlfiles/ODE/Almeria/`
- facsimiles: `wget -r -np -nH -nc http://corpora.ugr.es/ode/Facsimile/`
- lower case the facsimile files: ```for f in `find`; do mv -v "$f" "`echo $f | tr '[A-Z]' '[a-z]'`"; done```
