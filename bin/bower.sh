#!/bin/bash
find bower_components/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf bower_components/backbone-bootstrap-tabs