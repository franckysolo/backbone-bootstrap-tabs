#!/bin/bash
find node_modules/backbone-bootstrap-tabs -maxdepth 1 -mindepth 1 -exec mv {} . \;
rm -rf node_modules/backbone-bootstrap-tabs