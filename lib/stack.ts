import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Website } from './Website';


const appName = 'ohpc-website';

export class OHPCWebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Website(this, appName);
  }
}
