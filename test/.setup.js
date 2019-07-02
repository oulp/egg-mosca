'use strict';

const execSync = require('child_process').execSync;

execSync('mosca -uroot -e "create database IF NOT EXISTS test;"');
execSync('mosca -uroot test < test/npm_auth.sql');
console.log('create table success');
