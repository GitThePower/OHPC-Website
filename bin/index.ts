#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { config } from '../local-config';
import { OHPCWebsiteStack } from '../lib/stack';

const app = new App();
const { awsAccountNumber, awsRegion } = config;

new OHPCWebsiteStack(app, 'OHPCWebsiteStack', {
  env: { account: awsAccountNumber, region: awsRegion}
});
